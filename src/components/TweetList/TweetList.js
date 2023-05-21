import TweetCard from "../TweetCard/TweetCard";
import css from "./TweetList.module.css";

const TweetList = ({ tweets }) => {
  return (
    <ul className={css.list}>
      {tweets.map(({ id, user, avatar, tweets, followers }) => (
        <li key={id} className={css.item}>
          <TweetCard
            id={id}
            user={user}
            avatar={avatar}
            tweets={tweets}
            followers={followers}
          />
        </li>
      ))}
    </ul>
  );
};

export default TweetList;
