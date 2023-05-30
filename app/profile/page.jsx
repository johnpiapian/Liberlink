"use client";

import Nav from '@components/Nav';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Profile = () => {
    const router = useRouter();
    const { data: session, status } = useSession({ required: true});
    
    if (status === "loading") return null;

    const handleDelete = () => {
        if(confirm("Are you sure you want to delete your accout?")) {
            alert("Unfortunately account cannot be deleted at this time.");
        }
    };

    return (
        <>
            <Nav />
            <section className="w-full flex-center flex-col p-5">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-5 border-[1px] border-gray-300">
                    <div className="flex items-center py-4">
                        <img src={session.user.image} alt="Profile" className="w-20 h-20 rounded-full" />
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold">{`${session.user.name}`}</h2>
                            <p className="text-gray-500">{session.user.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center py-4 mt-5 justify-center">
                        <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                            Delete Profile
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;
