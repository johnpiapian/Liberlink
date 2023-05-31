import Link from "@models/link";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { ownerId, url, description } = await request.json();
    
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