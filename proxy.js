import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const proxy = async (request) => {
    const token =
        request.cookies.get("libraryToken")?.value;

    const pathname =
        request.nextUrl.pathname;

    let profile = null;

    try {
        if (token) {
            const secret = new TextEncoder().encode(
                process.env.JWT_SECRET
            );

            const { payload } = await jwtVerify(
                token,
                secret
            );

            profile = payload;
        }
    } catch (error) {
        profile = null;
    }

    // LOGIN redirect if already logged in
    if (
        token &&
        pathname === "/auth/login"
    ) {
        if (profile?.role === "admin") {
            return NextResponse.redirect(
                new URL("/client/admin", request.url)
            );
        }

        if (profile?.role === "student") {
            return NextResponse.redirect(
                new URL("/client/student", request.url)
            );
        }
    }

    // ADMIN PROTECTION
    if (
        !token &&
        pathname.startsWith("/client/admin")
    ) {
        return NextResponse.redirect(
            new URL("/auth/login", request.url)
        );
    }

    // STUDENT PROTECTION
    if (
        !token &&
        pathname.startsWith("/client/student")
    ) {
        return NextResponse.redirect(
            new URL("/auth/login", request.url)
        );
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/", "/client/admin/:path*", "/client/student/:path*", "/auth/login"]
}