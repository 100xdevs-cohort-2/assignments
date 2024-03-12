import axios from "axios";
import { useEffect } from "react";

export const Assignment5 = () => {
  async function getData(){
    const data = await axios.get("https://api.github.com/users/CS50X-RGB");
    console.log(data);
  }
  useEffect(()=>{
    getData();
  })
  return <div>Assignment5</div>;
};
export default Assignment5;