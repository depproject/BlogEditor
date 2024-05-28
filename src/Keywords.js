const Keywords = ({i,ele}) => {
  
      return (
        <div key={i} style={{display:"inline"}}>
          {(i%3)==0 && <div className="key1" style={{display:"inline" }}>{ele}</div>}
          {(i%3)==1 && <div className="key2" style={{display:"inline"}}>{ele}</div>}
          {(i%3)==2 && <div className="key3" style={{display:"inline"}}>{ele}</div>}
       </div>
      );
}
     
    export default Keywords;