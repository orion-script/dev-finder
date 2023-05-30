import React from 'react';
import { HiLink } from "react-icons/hi";
import { FaGithub} from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { User } from '../types/UserTypes';
import { infoList } from './OptionalinfoList';

type Props = {
  user: User;
  info: (typeof infoList)[number];
};

const OptionalInfo: React.FC<Props> = ({ user, info }) => {
  const getUserInfo = () => {
    switch (info) {
      case 'blog':
      case 'location':
      case 'company':
        return user[info];
      case 'twitter':
        return user.twitter_username;
      default: {
        const _check: never = info;
        return null;
      }
    }
  };

  const getIcon = () => {
    switch (info) {
      case 'blog':
        return <HiLink />;
      case 'location':
        return <MdLocationOn />;
      case 'company':
        return <FaGithub />;
      case 'twitter':
        return <FiTwitter />;
      default: {
        const _check: never = info;
      }
    }
  };

  const userInfo = getUserInfo();
  const icon = getIcon();
  // GitHub user profile may include an empty string. so it should be disabled also.
  const isOpaque = userInfo === null || userInfo?.trim() === '';
  const displayText =
    userInfo === null || userInfo?.trim() === '' ? 'Not Available' : userInfo;

  return (
    <li
      className={`flex items-center gap-x-2 md:gap-x-4 ${
        isOpaque ? 'opacity-50' : ''
      }`}
    >
      <label htmlFor={info}>{icon}</label>
      {/https?:\/\//.test(displayText) ? (
        <a
          id={info}
          href={displayText}
          className="block md:truncate focus:underline group-hover:underline"
        >
          {displayText}
        </a>
      ) : (
        <div id={info} aria-label={info} className="md:truncate">
          {displayText}
        </div>
      )}
    </li>
  );
};

export default OptionalInfo;