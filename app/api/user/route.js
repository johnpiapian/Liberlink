import User from "@models/user";
import { connectToDB } from "@utils/database";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";


export const GET = async (request, { params }) => {
    try {
        // Check for active sessions
        const session = await getServerSession(authOptions);

        if(!session?.user?.id || !session?.user?.email) {
            return new Response("Unauthorized", { status: 401 });
        }

        await connectToDB()

        // get current user from MongoDB
        const currentUser = await User.findOne({ _id: session.user.id });

        return new Response(JSON.stringify(currentUser), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch users", { status: 500 });
    }
} 
