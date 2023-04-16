import React, { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";
import CompanyBanner from "../components/CompanyBanner";
import InvestorCard from "../components/InvestorCard";
import CompanyCard from "../components/CompanyCard";
import AuthHoc from "../authHoc";

const studentHome = () => {
  const [investorData, setInvestorData] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4050/api/v1/invester/getallinvestors",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
    
        }
      );
      const data = await response.json();
      setInvestorData(data.investers);
    
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    console.log(investorData)
  }, [investorData]);



  return (
    <div className="p-8 h-full">
      <CompanyBanner />

      <SearchBar border={true} />

      <h1 className="font-sans font-bold text-[24px] mt-8">
        Top Organisations To Get Mentorship and Investment from In 2023!
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-6">
        {[1].map((ele) => (
          <CompanyCard />
        ))}
      </div>

      <h1 className="font-sans font-bold text-[24px] mt-8">
        Top Investors To Get Mentorship and Investment from In 2023!
      </h1>

      <div className="grid grid-cols-4 gap-5 mt-6">
        {investorData?.map((data) => (
          <InvestorCard name = {data.name} domain={data.domain} headline={data.headline} verified = {data.is_approved}/>
        ))}
      </div>
    </div>
  );
};

export default AuthHoc(studentHome);
