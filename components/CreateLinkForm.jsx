const CreateLinkForm = ({ link, setLink, handleCreate }) => {
    return (
        <form onSubmit={handleCreate} className="max-w-md mx-auto bg-white p-4 rounded-lg shadow">
            <div className="mb-4">
                <label htmlFor="link" className="text-gray-700 font-semibold">
                    Url:
                </label>
                <input
                    type="text"
                    id="url"
                    value={link.url}
                    onChange={(e) => setLink({ ...link, url: e.target.value })}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="text-gray-700 font-semibold">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={link.description}
                    onChange={(e) => setLink({ ...link, description: e.target.value })}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create
                </button>
            </div>
        </form>
    );
};

export default CreateLinkForm;

