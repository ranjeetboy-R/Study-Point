import connectDB from "@/app/lib/db";
import protect from "@/app/server/middleware/auth";
import Admin from "@/app/server/models/admin";
import Student from "@/app/server/models/student";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connectDB();

        const middleware = await protect(request);


        if (!middleware) {
            return NextResponse.json(
                { success: false, message: "UnAuthorized" },
                { status: 400 }
            );
        }

        if (!["student", "admin"].includes(middleware.role)) {
            return NextResponse.json(
                { success: false, message: "Invalid role" },
                { status: 400 }
            );
        }

        let profile = null;

        if (middleware.role === 'student') {
            const student = await Student.findOne({ studentId: middleware.studentId }).select("-password");
            if (!student) {
                return NextResponse.json(
                    { success: false, message: "Student Profile not found" },
                    { status: 404 }
                );
            }

            profile = student;
        }

        if (middleware.role === 'admin') {
            const admin = await Admin.findOne({ adminId: middleware.adminId }).select("-password");
            if (!admin) {
                return NextResponse.json(
                    { success: false, message: "Admin Profile not found" },
                    { status: 404 }
                );
            }

            profile = admin;
        }

        if (!profile) {
            return NextResponse.json(
                { success: false, message: "Invalid request" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, profile },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}