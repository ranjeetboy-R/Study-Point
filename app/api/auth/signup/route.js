import { NextResponse } from "next/server";
import Student from "@/app/server/models/student";
import bcrypt from 'bcryptjs';
import connectDB from "@/app/lib/db";
import protect from "@/app/server/middleware/auth";

const generateId = () => {
    return `SP${(Math.floor(100000 + Math.random() * 900000))}`;
}

export const POST = async (request) => {
    try {
        await connectDB();

        const middleware = await protect(request);
        const role = middleware?.role;

        if (role !== 'admin') {
            return NextResponse.json(
                { success: false, message: "Admin UnAuthorized" },
                { status: 401 }
            );
        }

        const { name, password, monthlyFee, phone, state, village, district } = await request.json();

        if (password.length < 6) {
            return NextResponse.json(
                { success: false, message: "Password must be at least 6 characters" },
                { status: 400 }
            );
        }

        let studentId;

        while (true) {
            studentId = generateId();
            const existing = await Student.findOne({ studentId });
            if (!existing) break;
        }

        const hasedPassword = await bcrypt.hash(password, 10);

        if (!name || !password || !monthlyFee || !phone || !state || !village || !district || !role) {
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        if (phone.length > 10) {
            return NextResponse.json({ success: false, message: 'Invalid phone no.' }, { status: 400 });
        }

        const student = await Student.findOne({ phone });

        if (student) {
            return NextResponse.json({ success: false, message: 'Phone already used' }, { status: 400 });
        }

        const profile = new Student({
            name,
            studentId,
            password: hasedPassword,
            monthlyFee,
            phone,
            state,
            village,
            district,
            role: 'student'
        })

        // const token = await generateToken({
        //     studentId,
        //     role: 'student'
        // })

        await profile.save();

        const response = NextResponse.json({ success: true, message: 'Signup successfully' });

        // response.cookies.set('libraryToken', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production",
        //     sameSite: "strict",
        //     maxAge: 60 * 60 * 24 * 30,
        //     path: "/",

        // })

        return response;

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}