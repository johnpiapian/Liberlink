export const metadata = {
    title: 'Login'
  };
  
  const Home = () => {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
            Sign In with Google
          </button>
        </div>
      </section>
    );
  };
  
  export default Home;
  