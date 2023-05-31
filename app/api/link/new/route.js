import Link from "@models/link";
import { connectToDB } from "@utils/database";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export const POST = async (request) => {
    // Check if user is logged in
    const session = await getServerSession(authOptions);
        
    if(!session?.user?.id || !session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    // Get data from request body
    let { ownerId, url, description } = await request.json();
    ownerId = ownerId.trim();
    url = url.trim(); 
    description = description.trim();


    // Validate required fields
    if(!ownerId || !url || !description) {
        return new Response("Missing required fields", { status: 400 });
    }

    try {
        await connectToDB();

        const newLink = new Link({ownerId, url, description});
        await newLink.save();

        return new Response(JSON.stringify(newLink), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}