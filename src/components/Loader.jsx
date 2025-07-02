const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://i.gifer.com/ZZ5H.gif"
          alt="Loading..."
          className="w-16 h-16"
        />
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
