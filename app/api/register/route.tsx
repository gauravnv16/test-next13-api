import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name,email, password } = await req.json();
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
    prisma.$disconnect();
    return NextResponse.json(user);
}