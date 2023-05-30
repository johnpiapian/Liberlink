"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Nav from '@components/Nav';
import CreateLinkForm from '@components/CreateLinkForm';
import { set } from 'mongoose';

const MyLinks = () => {
    const router = useRouter();
    const { data: session, status } = useSession({ required: true});
    
    const [link, setLink] = useState({ url: "", description: "" });

    // Fix flicker
    if (status === "loading") return null;

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(link);

        setLink({ url: "", description: "" });
    }

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
