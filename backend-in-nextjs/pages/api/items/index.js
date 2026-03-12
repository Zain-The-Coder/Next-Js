import { getAllItems } from "@/service/service";
import { saveItem } from "@/service/service";

export default function handler (req , res) {
    if(req.method === "GET") {
    const data = getAllItems();
    return res.status(200).json(data);
    } else if (req.method === "POST") {
        const {title , description , price} = req.body ;
        saveItem(title , description , price);
        res.status(200).json({message : "Item Added Successfully !"});
    } else {
        res.status(404).json({errorMessage : "Method is not allowed"});
    }
}
