
import Link from "@models/link";
import { connectToDB } from "@utils/database";


export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const links = await Link.find();

        return new Response(JSON.stringify(links), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch links", { status: 500 });
    }
}
