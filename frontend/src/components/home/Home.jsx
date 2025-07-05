import React from "react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import Left from './Left';
import Right from './Right';
import Aboutme from "../about/Aboutme";

const fetchPersonalInfo = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/core/personalInfoComplete/");
  return response.data;
};

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['personalInfo'],
    queryFn: fetchPersonalInfo,
    staleTime: 3600 * 1000,
  });

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error.message}</p>;

  const fullImageUrl = `http://127.0.0.1:8000${data.personal_info.profile_image}`;
  const profileImageElement = (
    <img
      src={fullImageUrl}
      alt="Profile"
      className="lg:w-full lg:shadow-xl lg:shadow-black transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 rounded-[20%]"
    />
  );

  return (
    <div>
      <div className='bg-[#02061e] mx-14 md:mx-32 pt-32 h-auto' id='HOME'>
        <div className="w-[100%] flex justify-center lg:justify-between flex-col-reverse md:flex-row">
          <Left personal_info={data.personal_info} taglines={data.taglines} />
          <Right profileImageElement={profileImageElement} />
        </div>
      </div>
      <Aboutme bio={data.personal_info.bio} />
    </div>
  );
};

export default Home;
