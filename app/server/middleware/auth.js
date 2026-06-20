import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET
);

const protect = async (req) => {
    const token = req.cookies.get("libraryToken")?.value;

    if (!token) {
        throw new Error("Unauthorized");
    }

    const { payload } = await jwtVerify(
        token,
        secret
    );

    return payload;
};

export default protect;