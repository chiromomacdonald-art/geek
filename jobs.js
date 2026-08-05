
import axios from "axios";
import cheerio from "cheerio";
import {connectDB} from "../../lib/db";
import Job from "../../models/Job";

const KEYWORDS=["agriculture","economics","statistics","agribusiness","business"];

export default async function handler(req,res){
 await connectDB();
 const {data}=await axios.get("https://jobsearchmalawi.com/");
 const $=cheerio.load(data);
 let jobs=[];

 $(".job-listing").each((i,el)=>{
  const title=$(el).find(".job-title").text();
  const link=$(el).find("a").attr("href");
  if(KEYWORDS.some(k=>title.toLowerCase().includes(k))){
    jobs.push({title,link});
  }
 });

 for(let job of jobs){
  await Job.updateOne({link:job.link},{ $set:job},{upsert:true});
 }

 res.json({count:jobs.length});
}
