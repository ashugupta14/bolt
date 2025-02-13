import { generateCode } from "@/configs/Gemini";
import { NextResponse } from "next/server";

export async function POST(req){
    const {prompt} = await req.json();
    try {
        const result = await  generateCode.sendMessage(prompt);
        const resp = result.response.text(); 

        return NextResponse.json(JSON.parse(resp));
    } catch (error) {
        return NextResponse.json({error:resp});
    }
}