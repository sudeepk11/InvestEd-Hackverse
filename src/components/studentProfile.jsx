import React, { useState, useEffect } from "react";
import WarnBanner from "./warnBanner";
import Card from "./Card";
import PDF from "./PDF";
import BlackCard2 from "./BlackProfileCard";
import { useParams } from "react-router-dom";
import axios from "axios";
const UserProfilePage = () => {
  const { id } = useParams();
  // Generate the profile Page as per this!!

  const [profileData, setProfileData] = useState();

  useEffect(() => {
    getData();
  }, [profileData]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4050/api/v1/student/getprofile/${id}`
    ,{
      withCredentials: true,
    });
    setProfileData(data.student);
   
  };

  const connectUser = async () => {
      await axios.post('http://localhost:4050/api/v1/invester/acceptconnection')
  }
 
  const user = {
    name: profileData?.name,
    skills: [profileData?.skill],
    email: profileData?.email,
    location: profileData?.address,
    bio: profileData?.headline,
    profileImage:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  };

  return (
    <div>
      <WarnBanner />
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
                <h2 className="text-2xl font-bold mb-2">
                  {user.name}
                  <span>
                    <img
                      className="ml-3 w-6 h-6 inline"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    />
                    <img
                      className="ml-3 w-6 h-6 inline"
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    />
                  </span>
                </h2>
                <p className="text-gray-600">{user.skills.join(", ")}</p>
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
            <button 
            onClick = {connectUser}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-5">
              Connect
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <BlackCard2 />
            <BlackCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
