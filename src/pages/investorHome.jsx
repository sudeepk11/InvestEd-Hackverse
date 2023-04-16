import React , {useEffect, useState} from "react";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";
import AuthHoc from '../authHoc';

const studentHome = () => {

  const [studentData, setStudentData] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4050/api/v1/student/getallstudents",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
    
        }
      );
      const data = await response.json();
      setStudentData(data?.students);
    
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    console.log(studentData)
  }, [studentData]);


  

  return (
    <div className="p-8 h-full">
      <SearchBar border={true} />

      <h1 className="font-sans font-bold text-[24px] mt-8">
        Top Students To Invest In 2023!
      </h1>

      <div className="grid grid-cols-4 gap-5 mt-6">
        {studentData?.map((ele) => (
          <StudentCard name={ele.name} verified={ele.isApproved} skill = {ele.domain} headline = {ele.headline} id = {ele._id}/>
        ))}
      </div>
    </div>
  );
};

export default AuthHoc(studentHome);
