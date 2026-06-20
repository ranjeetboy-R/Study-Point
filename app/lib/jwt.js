import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

const generateToken = async (payload) => {
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export default generateToken;