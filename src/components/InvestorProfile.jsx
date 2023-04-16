import React from "react";
import WarnBanner from "./warnBanner";
import BlackCard2 from "./BlackProfileCard";
const UserProfilePage = () => {
  const user = {
    name: "Google",
    domains: ["Web Development"],
    email: "sudeepkulkarni11@example.com",
    location: "Bangalore, Karnataka",
    bio: "I am a full-stack developer with a passion for building web applications that solve real-world problems.",
    profileImage: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
  };

  return (
    <div>
      <WarnBanner  />
      <div>
        <div className="h-screen p-10 grid grid-cols-3 gap-8 ">
          <div className="bg-card col-span-2  rounded-2xl shadow-lg p-8 h-fit">
            <div className="flex  items-center  mb-4">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={user.profileImage}
                alt={user.name}
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">{user.name}
                 <span><img className="ml-3 w-6 h-6 inline" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                 <img className="ml-3 w-6 h-6 inline" src = "https://cdn-icons-png.flaticon.com/512/174/174857.png" /></span></h2>
                <p className="text-gray-600">{user.domains.join(", ")}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">About me</h3>
              <p>{user.bio}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.location}</p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-5">
              Connect
            </button>
          </div>

          <div className="flex flex-col gap-5">
              <BlackCard2/>
              <BlackCard2/>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default UserProfilePage;
