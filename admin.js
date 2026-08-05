
import {connectDB} from "../../lib/db";
import Job from "../../models/Job";

export default async function handler(req,res){
 await connectDB();
 const jobs=await Job.find().sort({createdAt:-1});
 res.json(jobs);
}
