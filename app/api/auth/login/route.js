import { NextResponse } from "next/server";
import generateToken from "@/app/lib/jwt";
import Student from "@/app/server/models/student";
import Admin from "@/app/server/models/admin";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/db";

export const POST = async (request) => {
    try {
        await connectDB();
        const { studentId, adminId, password, role } = await request.json();

        let profile = null;
        let token = null;

        if (role === 'student') {
            if (!studentId || !password || !role) {
                return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
            }

            const student = await Student.findOne({ studentId });

            if (!student) {
                return NextResponse.json({ success: false, message: 'Account not register' }, { status: 404 });
            }

            const checkPassword = await bcrypt.compare(password, student.password);

            if (!checkPassword) {
                return NextResponse.json({ success: false, message: 'Invalid Credentials' }, { status: 400 });
            }

            profile = student;
            token = await generateToken({
                studentId,
                role
            })
        }

        if (role === 'admin') {
            if (!adminId || !password || !role) {
                return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
            }
            const admin = await Admin.findOne({ adminId });

            if (!admin) {
                return NextResponse.json({ success: false, message: 'Account not register' }, { status: 404 });
            }

            const checkPassword = await bcrypt.compare(password, admin.password);

            if (!checkPassword) {
                return NextResponse.json({ success: false, message: 'Invalid Credentials' }, { status: 400 });
            }

            profile = admin;
            token = await generateToken({
                adminId,
                role
            })
        }

        if (!profile || !token) {
            return NextResponse.json({ success: false, message: 'Invalid role' }, { status: 400 });
        }

        const response = NextResponse.json({ success: true, message: 'Login successfully' });

        response.cookies.set('libraryToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30, // 7 days
            path: "/",
        })

        return response;

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}