'use client';

import { useState } from 'react';

const CreateLinkForm = () => {
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Link:', link);
        console.log('Description:', description);
        // Reset form fields
        setLink('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded-lg shadow">
            <div className="mb-4">
                <label htmlFor="link" className="text-gray-700 font-semibold">
                    Link:
                </label>
                <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="text-gray-700 font-semibold">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Link
                </button>
            </div>
        </form>
    );
};

export default CreateLinkForm;

