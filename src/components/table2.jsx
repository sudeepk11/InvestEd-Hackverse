import React,{useState, useEffect} from "react";
import axios from 'axios';
const Table = ({ name , data }) => {
  const [adminData, setAdminData] = useState("");

  const [studentData, setStudentData] = useState([]);
  const [investorData , setInvestorData] = useState([]);

  useEffect(() => {
    getData();
  }, [adminData]);

  const getData = async () => {
    const data = await axios.get(
      "http://localhost:4050/api/v1/admin/getalldata",
      {
        withCredentials: true,
      }
    );

    setAdminData(data.data)
    //console.log(data.data.allInvestersData)
    console.log(data.data)
  };

  return (

    <div className="flex flex-col gap-3">
          <div class="flex-grow p-4 bg-cover border border-gray-200 rounded-2xl shadow flex flex-col gap-2 relative overflow-x-auto">
      <span className="font-bold">Student Data</span>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              User
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Verify User
            </th>
            <th scope="col" class="px-6 py-3">
              Send Notification
            </th>
          </tr>

        </thead>
        <tbody>
          {adminData.allStudentsData?.map((ele) => (
            <tr class="">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center justify-start gap-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  />
                  <div>{ele.name}</div>
                </div>
              </th>
              <td class="px-6 py-4"> {ele.email} </td>
              <td class="px-6 py-4">
                <button className="bg-green-600 text-green-200 px-2.5 py-2.5 rounded-xl border-none ">
                  Verify User
                </button>
              </td>
              <td className = "px-6 py-4">
              <button className="bg-red-600 text-white px-2.5 py-2.5 rounded-xl border-none ">
                  Send Notification
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div class="flex-grow p-4 bg-cover border border-gray-200 rounded-2xl shadow flex flex-col gap-2 relative overflow-x-auto">
      <span className="font-bold">Investor Data</span>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              User
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Verify User
            </th>
            <th scope="col" class="px-6 py-3">
              Send Notification
            </th>
          </tr>

        </thead>
        <tbody>
          {adminData.allInvestersData?.map((ele) => (
            <tr class="">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center justify-start gap-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  />
                  <div>{ele.name}</div>
                </div>
              </th>
              <td class="px-6 py-4"> {ele.email} </td>
              <td class="px-6 py-4">
                <button className="bg-green-600 text-green-200 px-2.5 py-2.5 rounded-xl border-none ">
                  Verify User
                </button>
              </td>
              <td className = "px-6 py-4">
              <button className="bg-red-600 text-white px-2.5 py-2.5 rounded-xl border-none ">
                  Send Notification
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>

  );
};

export default Table;