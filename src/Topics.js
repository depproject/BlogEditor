import Keywords from "./Keywords";
import { Link } from 'react-router-dom';

const Topics = ({id,title,keywords}) => {

  console.log(keywords);console.log(id);
    return (
    <div>
      <div>{title}</div>
      <div>
      {keywords.map((ele, i) => (
        <Keywords i={i} ele={ele}/>
      ))}
      <Link to={`/${id}`} style={{width:"60px",height:"25px",position: "absolute",left: "1010px",display:"inline",
          color: 'white', 
          backgroundColor:"rgb(245, 103, 68)",
          borderRadius: '8px' 
        }}>Write &gt;</Link>
      </div>
    </div>
    );
  }
   
  export default Topics;