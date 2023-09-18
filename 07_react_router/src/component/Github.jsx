import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const url = "https://api.github.com/users/hiteshchoudhary";

  const data = useLoaderData();
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch(url)
  //   .then(
  //     res=>res.json()
  //   )
  //   .then(
  //     data=>{
  //       console.log("Data", data);
  //       setData(data)
  //       }
  //   )

  // }, [])

  return (
    <div className="flex flex-wrap justify-center align-middle p-5">
      <div className="w-[300px] rounded-md border">
        <img
          src={data.avatar_url}
          alt="avatar_photo"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{data.login}</h1>
          <p className="mt-3 text-sm text-gray-600">{data.location}</p>
          <button
           
            className="mt-4 rounded-sm w-64 bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const gitHubInfoData = async () => {
  const url = "https://api.github.com/users/iampawan";

  try {
    const responce = await fetch(url);
    return responce.json();
  } catch (error) {
    console.log(error.message);
  }
};
