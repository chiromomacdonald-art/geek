
import mongoose from "mongoose";
const JobSchema = new mongoose.Schema({
 title:String,
 link:String,
 createdAt:{type:Date, default:Date.now}
});
export default mongoose.models.Job || mongoose.model("Job", JobSchema);
