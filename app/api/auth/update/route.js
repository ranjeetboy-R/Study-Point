import { NextResponse } from "next/server";
import Student from "@/app/server/models/student";
import Admin from "@/app/server/models/admin";
import connectDB from "@/app/lib/db";
import protect from "@/app/server/middleware/auth";

export const PUT = async (request) => {
    try {
        await connectDB();

        const middleware = await protect(request);

        if (middleware?.role !== 'admin') {
            return NextResponse.json(
                { success: false, message: "UnAuthorized" },
                { status: 400 }
            );
        }

        const { studentId, name, phone, state, village, district, monthlyFee, role } = await request.json();

        if (phone) {
            if (phone.length > 10) {
                return NextResponse.json({ success: false, message: 'Invalid phone no.' }, { status: 400 });
            }

            const existing = await Student.findOne({ phone, studentId: {$ne: studentId} });

            if (existing) {
                return NextResponse.json({ success: false, message: 'Phone already used' }, { status: 400 });
            }
        }

        if (role === 'student') {

            const student = await Student.findOne({ studentId });

            if (!student) {
                return NextResponse.json({ success: false, message: 'Student not found' }, { status: 400 });
            }

            if (name !== undefined) student.name = name;
            if (phone !== undefined) student.phone = phone;
            if (state !== undefined) student.state = state;
            if (village !== undefined) student.village = village;
            if (district !== undefined) student.district = district;
            if (monthlyFee !== undefined) student.monthlyFee = monthlyFee;

            await student.save();
        }

        if (role === 'admin') {

            const admin = await Admin.findOne({ adminId: middleware.adminId });

            if (!admin) {
                return NextResponse.json({ success: false, message: 'Admin not found' }, { status: 400 });
            }

            if (name !== undefined) admin.name = name;

            await admin.save();
        }

        return NextResponse.json({ success: true, message: 'Profile update successfully' });

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}