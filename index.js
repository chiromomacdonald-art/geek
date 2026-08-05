
import {useEffect,useState} from "react";
export default function Admin(){
 const[jobs,setJobs]=useState([]);
 const load=()=>fetch("/api/jobs").then(r=>r.json()).then(setJobs);
 const scrape=async()=>{await fetch("/api/scrape");load();};
 useEffect(load,[]);
 return(
 <div style={{padding:40}}>
 <h1>Admin Panel</h1>
 <button onClick={scrape}>Run Scraper</button>
 {jobs.map((j,i)=>(
  <div key={i}><p>{j.title}</p></div>
 ))}
 </div>);
}
