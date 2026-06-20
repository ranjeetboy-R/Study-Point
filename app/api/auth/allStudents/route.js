import connectDB from "@/app/lib/db";
import protect from "@/app/server/middleware/auth";
import Student from "@/app/server/models/student";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connectDB();

        const middleware = await protect(request);

        if (middleware?.role !== 'admin') {
            return NextResponse.json(
                { success: false, message: "Admin UnAuthorized" },
                { status: 401 }
            );
        }

        const students = await Student.find().sort({createdAt: -1}).select("-password");

        if (students.length === 0) {
            return NextResponse.json(
                { success: false, message: "Students not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, students },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}