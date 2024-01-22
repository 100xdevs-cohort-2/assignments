import { useRef } from "react";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { userInfoSelecor, usernameAtom } from "../atoms.js";

export function InfoCard() {
  const username = useRecoilValue(usernameAtom);
  const userInfo = useRecoilValueLoadable(userInfoSelecor(username));

  const defaultAvatar = "https://avatars.githubusercontent.com/u/3909144?v=4";

  const avatarURL = userInfo.contents?.avatar_url || defaultAvatar;

  if (userInfo.contents == null) return <div></div>;

  switch (userInfo.state) {
    case "loading":
      return <div className="text-4xl text-black ">Loading...</div>;
    case "hasError":
      return (
        <div className="text-4xl text-black">
          Couldn't Find User ! Try something else
        </div>
      );
    case "hasValue":
      return (
        <>
          <div
            id="card"
            className="h-[30rem] w-[24rem] rounded-2xl bg-[#0c0c24] p-7 px-10 flex flex-col gap-5"
          >
            <div
              id="first-section"
              className="flex justify-between items-center"
            >
              <div
                id="profile-pic"
                className="w-[8rem] h-[8rem] bg-white rounded-full  bg-cover cursor-pointer hover:scale-[1.15] transition-all"
                style={{
                  backgroundImage: `url('${avatarURL}')`,
                }}
              ></div>

              <a href={userInfo.contents?.html_url || ""}>
                <button className="rounded-lg h-[4rem] w-[8rem] bg-[#f43c04] text-gray-100 px-3 tracking-wider font-bold ">
                  Full Github Profile
                </button>
              </a>
            </div>
            <div id="nameAndLocation">
              <h1 className="tracking-wider text-[#f43c04] font-bold text-3xl ">
                {userInfo.contents?.name || ""}
              </h1>
              <p className="tracking-wider font-bold text-gray-300 text-lg mt-[-3px]">
                {userInfo.contents?.location || ""}
              </p>
            </div>

            <div id="3rd-section" className="flex justify-between">
              <div className="w-[10rem] flex flex-col gap-1 overflow-hidden">
                <div>
                  <p className="font-medium tracking-wider text-md text-gray-300 ">
                    Company
                  </p>
                  <p className="font-bold text-md text-[#f43c04] tracking-wider mt-[-6px]">
                    {userInfo.contents?.company || "Not Available"}
                  </p>
                </div>

                <div>
                  <p className="font-medium tracking-wider text-md text-gray-300 ">
                    Email
                  </p>
                  <p className="font-bold text-md text-[#f43c04] tracking-wider mt-[-6px]">
                    <a href={`mailto:${userInfo.contents?.email || ""}`}>
                      {userInfo.contents?.email
                        ? "Click Here"
                        : "Not Available"}
                    </a>
                  </p>
                </div>

                <div>
                  <p className="font-medium tracking-wider text- text-gray-300 ">
                    Blog
                  </p>
                  <p className="font-bold text-md text-[#f43c04] tracking-wider mt-[-6px]">
                    <a href={userInfo.contents?.blog || ""}>
                      {userInfo.contents?.blog ? "Click Here" : "Not Available"}
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-[7rem] flex flex-col gap-1 overflow-hidden">
                <div>
                  <p className="font-medium tracking-wider text-md text-gray-300 ">
                    Followers
                  </p>
                  <p className="font-bold text-md text-[#f43c04] tracking-wider mt-[-6px]">
                    {userInfo.contents?.followers || 0}
                  </p>
                </div>
                <div>
                  <p className="font-medium tracking-wider text-md text-gray-300 ">
                    Following
                  </p>
                  <p className="font-bold text-md text-[#f43c04] tracking-wider mt-[-6px]">
                    {userInfo.contents?.following || 0}
                  </p>
                </div>
                <div>
                  <p className="font-medium tracking-wider text-md text-gray-300 ">
                    Repos
                  </p>
                  <p className="font-bold text-md text-[#f43c04] tracking-wider mt-[-6px]">
                    {userInfo.contents?.public_repos || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    default:
      return <div></div>;
  }
}
