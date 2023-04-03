import { NextResponse } from "next/server";
import prisma from "../../../lib/client";


export async function GET(request:Request){
    const user = await prisma.user.findMany({});
    prisma.$disconnect();
    return NextResponse.json(user);
}