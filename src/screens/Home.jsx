import { useEffect, useState } from "react";
import BookContainer from "../components/BookContainer";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <BookContainer />
    </div>
  );
};

export default Home;
