import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import comment from "@/models/comment";




export async function POST(request: Request) {
    await dbConnect()

    const {parentId,body,image} = await request.json()

    const Madecomment = await comment.create({parentId:parentId,body:body,image:image})

    return NextResponse.json({
        response: Madecomment
    })
}







