import { NextResponse } from "next/server";
import prisma from "../../../lib/client";


export async function POST(request:Request){
    const users = await prisma.user.findMany({});
    prisma.$disconnect();
    return NextResponse.json(users);
}