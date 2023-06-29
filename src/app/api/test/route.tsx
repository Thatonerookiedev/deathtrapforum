import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import comment from "@/models/comment";





  
export async function POST(request: Request) {
    const comment = 'hi i am edge'

    return NextResponse.json({
        response: comment
    })
}











