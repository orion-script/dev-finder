import React from 'react';
import dayjs from 'dayjs';
import { FC } from 'react';
import { User } from "../types/UserTypes";
import OptionalInfoList from "./OptionalinfoList";

type Props = {
  user: User;
};

const Devinfo: FC<Props> = ({ user }) => {
  const formattedDate = dayjs(user.created_at).format('D MMM YYYY');

  return (
    <div className="bg-[#ffffff] dark:bg-[#1e2c48] text-black dark:text-white flex flex-col md:flex-row w-4/5 md:w-3/5 m-auto h-auto mt-10 pb-5 rounded-lg justify-center content-center">
        <img src={`${user.avatar_url}.svg`} alt="user image" className="rounded-full mx-auto md:mx-8 h-24 w-24 mt-3 md:mt-8" />

        <div className="w-10/12 m-auto md:m-0 md:w-[75%] text-start">
            <div className="w-11/12 flex flex-col md:flex-row justify-between mt-7">
                <div className="flex flex-col">
                    <h3 className="">{user.name}</h3>
                    <h5 className="mt-2 text-[#157cf1]">@{user.login}</h5>
                </div>

                <p className="text-[#7e7e7b]">Joined {formattedDate}</p>
            </div>

            <p className="mt-5 text-[#7e7e7b]">{user.bio}</p>

            <div className="bg-black md:w-4/5 h-20 my-2 md:my-5 rounded-lg flex justify-around pt-4 text-white m-auto md:m-0">
                <div className="flex flex-col text-center">
                    <h3>Repo</h3>
                    <p>{user.public_repos}</p>
                </div>
                <div className="text-center">
                    <h3>Followers</h3>
                    <p>{user.followers}</p>
                </div>
                <div className="text-center">
                    <h3>Following</h3>
                    <p>{user.following}</p>
                </div>
            </div>
            <div className="">
              <OptionalInfoList user={user} />
            </div>
        </div>
    </div>
 );
};

export default Devinfo;