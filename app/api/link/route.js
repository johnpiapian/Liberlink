import Link from "@models/link";
import { connectToDB } from "@utils/database";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";


export const GET = async (request, { params }) => {
    try {
        const session = await getServerSession(authOptions);
        
        if(!session?.user?.id || !session?.user?.email) {
            return new Response("Unauthorized", { status: 401 });
        }

        await connectToDB();

        // find links where ownerId matches the current user's id
        const links = await Link.find({ ownerId: session.user.id });

        return new Response(JSON.stringify(links), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch links", { status: 500 });
    }
}
