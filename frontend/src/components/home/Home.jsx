import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import Left from './Left';
import Right from './Right';
import Aboutme from "../about/Aboutme";

const fetchPersonalInfo = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/core/personalInfoComplete/");
  return res.data;
};

const Home = (props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['personalInfo'],
    queryFn: fetchPersonalInfo,
    staleTime: 3600 * 1000,
  });

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error.message}</p>;

  const profileImageElement = (
    <img
      src={`http://127.0.0.1:8000${data.personal_info.profile_image}`}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  );

  props.setResumeUrl(`http://127.0.0.1:8000${data.personal_info.resume_file}`);

  return (
    <div className="pt-[80px] md:pt-[120px] w-full" id="Home">
<div className="flex flex-col items-center justify-between md:flex-row w-full">
        <Right profileImageElement={profileImageElement} />

        <Left personal_info={data.personal_info} taglines={data.taglines}/>
      </div>

      
      <Aboutme bio={data.personal_info.bio} profileImageElement={profileImageElement}/>
    </div>
  );
};

export default Home;
