import product from "@/libs/models/product";
import { connectMongoDB } from "@/libs/mongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();

        const data = await product.find();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something went wrong"
        }, { status: 400 });
    }
}
