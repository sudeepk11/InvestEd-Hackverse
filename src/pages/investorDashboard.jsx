import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Table from "../components/Table";
import ToDo2 from "../components/ToDo2";
import LineItem from "../components/LineItem";
import BlackCard from "../components/BlackCard";
import Conversion from "../components/Conversion";
import BlackCard2 from "../components/BlackCard2";
import AuthHoc from "../authHoc";
import Axios from "axios";
const dashboard = () => {
  const [dbData, setdbData] = useState();
  const [totalContract, setTotalContract] = useState(0);
  const [connections, setConnections] = useState(0);
  const [totalInv, setTotalInv] = useState(0);
  const [notifications, setNofifications] = useState();

  const getData = async () => {
    try {
      const resp = await Axios.get(
        "http://localhost:4050/api/v1/invester/getprofile",
        {
          withCredentials: true,
        }
      );

      setdbData(resp.data.invester);
    } catch (e) {
      console.log(e);
    }
  };

  const getNotif = async () => {
    try {
      const resp = await Axios.get(
        "http://localhost:4050/api/v1/notifications/getnotification",
        {
          withCredentials: true,
        }
      );
      setNofifications(resp.data.notification);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    getNotif();
  }, []);

  return (
    <div className="bg-primary h-full pb-8">
      <h1 className="font-bold text-[24px] pt-8 px-12">
        Good Morning, {dbData?.name}!
      </h1>

      <div className="flex flex-row flex-wrap gap-4 pt-8 px-12">
        <div className="">
          <Card
            text="Total Investment"
            data={`$${totalInv}`}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>
            }
          />
        </div>
        <div className="">
          <Card
            text="Total Contracts"
            data={totalContract}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            }
          />
        </div>
        <div className="">
          <Card
            text="Total Connections"
            data={dbData?.connections.length || 1}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            }
          />
        </div>
        <div className="">
          <Card
            text="Average ROI"
            data="0%"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            }
          />
        </div>

        <div>
          <Conversion />
        </div>

        <div className="flex flex-row w-full">
          <Card2 />
          <LineItem />
          <ToDo2 />
        </div>
      </div>

      <div className=" flex flex-row w-[98%] pt-8 px-12 gap-3">
        <Table data={notifications} />
      </div>
    </div>
  );
};

export default AuthHoc(dashboard);
