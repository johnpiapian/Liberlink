import React from 'react';

const LinkCard = ({ url, description, authorName, authorImg, date }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-2 border-[1px]">
            <div className="py-4">
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                    <div className="text-gray-900 font-bold text-x mb-2">{url}</div>
                </a>
                <p className="text-gray-700 text-base">{description}</p>
                {/* <div class="pt-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>
            <div className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={authorImg}
                    alt="Avatar"
                />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">{authorName}</p>
                    <p className="text-gray-600">{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default LinkCard;
