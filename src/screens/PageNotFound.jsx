import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500">
          {error?.statusText || error?.message || "Unknown error"}
        </p>

        <a
          href="/"
          className="mt-6 inline-block  bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded transition"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
