"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Nav from '@components/Nav';
import CreateLinkForm from '@components/CreateLinkForm';
import LinkItem from '@components/LinkItem';

const MyLinks = () => {
    const router = useRouter();
    const { data: session, status } = useSession({ required: true });

    const [link, setLink] = useState({ url: "", description: "" });
    const [links, setLinks] = useState([]); // [{}, {}, {}]

    // Fix flicker
    // if (status === "loading") return null;

    useEffect(() => {
        try {
            const res = fetch("/api/link", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setLinks(data));
        } catch (err) {
            console.log(err);
        }
    }, []);

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

        if (res.ok) {
            alert("Link created successfully!");
        } else {
            alert("An error occured while creating your link.");
        }

        setLink({ url: "", description: "" });
    };

    return (
        <>
            <Nav />
            <section className="w-full flex-center flex-col p-5">
                <CreateLinkForm link={link} setLink={setLink} handleCreate={handleCreate} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 py-5">
                    {links.map((linkItem, index) => (
                        <LinkItem
                            key={index}
                            url={linkItem.url}
                            description={linkItem.description}
                            authorName={session.user.name}
                            authorImg={session.user.image}
                            date={linkItem.createdAt}
                        />
                    ))}
                </div>
            </section>
        </>
        
    );
};

export default MyLinks;
