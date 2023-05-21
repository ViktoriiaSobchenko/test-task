import { useState, useEffect } from "react";
import convertNumber from "../utils/converter";
import logo from "../../images/Logo.png";
import PropTypes from "prop-types";
import css from "./TweetCard.module.css";

const TweetCard = ({ id, user, avatar, followers, tweets }) => {
  const [following, setFollowing] = useState(false);
  const [followersQuantity, setFollowersQuantity] = useState(followers);

  useEffect(() => {
    const storedFollowing = localStorage.getItem(`following_${id}`);
    const storedFollowers = localStorage.getItem(`followers_${id}`);

    if (storedFollowing) {
      setFollowing(JSON.parse(storedFollowing));
    }
    if (storedFollowers) {
      setFollowersQuantity(JSON.parse(storedFollowers));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`following_${id}`, JSON.stringify(following));
    localStorage.setItem(`followers_${id}`, JSON.stringify(followersQuantity));
  }, [id, following, followersQuantity]);

  const handleFollowClick = () => {
    if (following) {
      setFollowersQuantity((prevState) => prevState - 1);
    } else {
      setFollowersQuantity((prevState) => prevState + 1);
    }
    setFollowing((prevState) => !prevState);
  };

  return (
    <div className={css.card}>
      <img src={logo} alt="User avatar" className={css.logo} />
      <img src={avatar} alt="User avatar" className={css.img} />
      <div className={css.wrapper}>
        <p className={css.text}>{user}</p>
        <p className={css.text}>{tweets} tweets</p>
        <p className={css.text}>{convertNumber(followersQuantity)} followers</p>
        <button
          onClick={handleFollowClick}
          style={{ backgroundColor: following ? "#5cd3a8" : "#ebd8ff" }}
          className={css.btn}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};
TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};

export default TweetCard;
