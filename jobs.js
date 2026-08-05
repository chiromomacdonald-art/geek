
import {useEffect,useState} from "react";
export default function Home(){
 const[jobs,setJobs]=useState([]);
 useEffect(()=>{
  fetch("/api/jobs").then(r=>r.json()).then(setJobs);
 },[]);
 return(
 <div style={{padding:40}}>
 <h1>Job Dashboard</h1>
 {jobs.map((j,i)=>(
  <div key={i}>
   <h3>{j.title}</h3>
   <a href={j.link}>View</a>
  </div>
 ))}
 </div>);
}
