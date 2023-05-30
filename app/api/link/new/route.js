import Link from "@models/link";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { ownerId, url, description, createdAt, updatedAt } = await request.json();

    try {
        await connectToDB();

        const newLink = new Link({ ownerId, url, description, createdAt, updatedAt });

        await newLink.save();
        return new Response(JSON.stringify(newLink), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}