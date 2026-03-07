import { getAllItems } from "@/services/service"
import { save } from "@/services/service";

export default function handler (req , res) {
    if(req.method === "GET") {
        const data = getAllItems();
        return res.status(200).json(data);
    }else if (req.method === "POST") {
    const {title, description} = req.body;
    save(title, description);
    return res.status(201).json({message: "Data Added Successfully"}).send();
  } else {
        return res.status(404).json({error : "Page Not Found"})
    }
}