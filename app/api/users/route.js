import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

import User from "@models/user";
import { connectToDB } from "@utils/database";
import { getCurrentUser } from "@utils/auth";

const getCurrentUser = (session) => {
    if (!session || !session.user) return null;
    return session.user;
};

export const GET = async (request, { params }) => {
    try {

        // Check for active sessions
        const session = await getServerSession(authOptions);
        const currentUser = getCurrentUser(session);

        // Unauthorized user
        if(!currentUser?.id || !currentUser?.email) {
            return new Response("Unauthorized", { status: 401 });
        }

        await connectToDB()

        const users = await User.find();

        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 });
    }
} 
