import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import comment from "@/models/comment";




export async function POST(request: Request) {
    await dbConnect()

    const Madecomment = await comment.find({})

    return NextResponse.json({
        response: Madecomment
    })
}








