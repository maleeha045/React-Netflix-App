import React from 'react';
import Card from "./card"
import sdata from"./sdata"

const App=()=>(

    <>
    <h1 className='heading'>List Of Top 5 PutLockers Series In 2021</h1>

    {sdata.map((val,index)=>{
        return(
        <Card 
         imgsrc={val.imgsrc}
         sname={val.sname}
         title={val.title}
         link={val.link}
         />
        );
        })}
     </>   
); 
export default App;