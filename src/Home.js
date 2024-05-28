import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useState } from "react";

const Home = ({inx}) => {
  console.log(inx);
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/'+inx)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && inx==1 && <div style={{display:'flex', justifyContent:'center'}}>All</div> }
      { blogs && inx==2 && <div style={{display:'flex', justifyContent:'center'}}>Custom</div> }
      { blogs && inx==3 && <div style={{display:'flex', justifyContent:'center'}}>ICP</div> }
      { blogs && inx==4 && <div style={{display:'flex', justifyContent:'center'}}>Mission</div> }
      { blogs && inx==5 && <div style={{display:'flex', justifyContent:'center'}}>Product</div> }
      { blogs && <div className="rec">Recommended Topics</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
