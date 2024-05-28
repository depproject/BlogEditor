import { Link } from "react-router-dom";
const Navbutton = ({ind,i,text,change}) => {

  return (
    <div>
        { ind!==i && <div className="nav"><Link to={`/`} onClick={()=>{change(i);}} >{text}</Link></div>}
        { ind===i && <div className="clicked"><Link to="/" onClick={()=>{change(i);}}>{text}</Link></div>}
    </div>
  );
}
 
export default Navbutton;