"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Nav from '@components/Nav';
import CreateLinkForm from '@components/CreateLinkForm';

const MyLinks = () => {
    const router = useRouter();
    const { data: session, status } = useSession({ required: true});
    
    const [link, setLink] = useState({ url: "", description: "" });

    // Fix flicker
    if (status === "loading") return null;

    const handleCreate = async (e) => {
        e.preventDefault();

        const linkItem = {
            ownerId: session.user.id,
            url: link.url,
            description: link.description
        };

        // Make a post request with linkItem as body
        const res = await fetch("/api/link/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(linkItem),
        });

        if(res.ok) {

        } else {
            alert("An error occured while creating your link.");
        }
    };

    return (
        <>
            <Nav />
            <section className="w-full flex-center flex-col p-5">
                <CreateLinkForm link={link} setLink={setLink} handleCreate={handleCreate} />
            </section>
        </>
    );
};

export default MyLinks;
