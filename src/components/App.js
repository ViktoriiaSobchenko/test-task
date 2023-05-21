import { useState, useEffect } from "react";
import Button from "./Button/Button";
import TweetList from "./TweetList/TweetList";
import Loader from "./Loader/Loader";
import { getTweets } from "../services/api";
import css from "./App.module.css";

const perPage = 3;
const totalPage = 5;

function App() {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      try {
        const data = await getTweets(page, perPage);
        setTweets((prevState) => [...prevState, ...data]);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching tweets:", error.message);
      }
    };

    fetchTweets();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <main className={css.mine}>
      <h1 className={css.title}>Tweet Cards</h1>
      <TweetList tweets={tweets} />
      {loading && <Loader />}
      {page <= totalPage && (
        <Button text="Load more" onClick={handleLoadMore} />
      )}
    </main>
  );
}

export default App;
