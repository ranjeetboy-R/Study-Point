import connectDB from "@/app/lib/db";
import protect from "@/app/server/middleware/auth";
import Student from "@/app/server/models/student";
import { NextResponse } from "next/server";

export const DELETE = async (request, {params}) => {
    try {
        await connectDB();
        
        const middleware = await protect(request);
        
        if (middleware?.role !== 'admin') {
            return NextResponse.json(
                { success: false, message: "Admin UnAuthorized" },
                { status: 401 }
            );
        }
        
        const {id} = await params;

        if (!id) {
           return NextResponse.json(
                { success: false, message: "Student id is required" },
                { status: 400 }
            ); 
        }

        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return NextResponse.json(
                { success: false, message: "Students not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Student deleted successfully' },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}