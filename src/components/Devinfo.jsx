import Hero from "../assets/hades.png"
import { FiTwitter } from "react-icons/fi";
import { FaGithub} from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import { HiLink } from "react-icons/hi";

function Devinfo() {
    return (
        <div className="bg-[#ffffff] dark:bg-[#1e2c48] text-black dark:text-white flex flex-col md:flex-row w-4/5 md:w-2/4 m-auto h-auto mt-10 pb-5 rounded-lg justify-center content-center">
            <img src={Hero} alt="user image" className="rounded-full mx-auto md:mx-8 h-24 w-24 mt-3 md:mt-8" />

            <div className="w-10/12 m-auto md:m-0 md:w-[75%] text-start">
                <div className="w-11/12 flex flex-col md:flex-row justify-between mt-7">
                    <div className="flex flex-col">
                        <h3 className="">John Olaniyi</h3>
                        <h5 className="mt-2 text-[#157cf1]">@Hadestech01</h5>
                    </div>

                    <p className="text-[#7e7e7b]">Sun April 11 2021</p>
                </div>

                <p className="mt-5 text-[#7e7e7b]">I&apos;m a front end developer... Building, Learning,Iterating and Improving 👌</p>

                <div className="bg-black md:w-4/5 h-20 my-2 md:my-5 rounded-lg flex justify-around pt-4 text-white m-auto md:m-0">
                    <div className="flex flex-col text-center">
                        <h3>Repo</h3>
                        <p>31</p>
                    </div>
                    <div className="text-center">
                        <h3>Followers</h3>
                        <p>1</p>
                    </div>
                    <div className="text-center">
                        <h3>Following</h3>
                        <p>4</p>
                    </div>
                </div>

                <div className="flex justify-between w-4/5 md:w-3/5 md:ml-4 m-auto md:m-0">
                    <div>
                        <figure className="flex items-center">
                            <MdLocationOn />
                            <figcaption className="ml-2">Location</figcaption>
                        </figure>

                        <figure className="flex items-center">
                            <HiLink />
                            <figcaption className="ml-2">Website</figcaption>
                        </figure>
                    </div>

                    <div className="">
                        <figure className="flex items-center">
                            <FiTwitter />
                            <figcaption className="ml-2">Twitter</figcaption>
                        </figure>

                        <figure className="flex items-center">
                            <FaGithub />
                            <figcaption className="ml-2">Github</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Devinfo