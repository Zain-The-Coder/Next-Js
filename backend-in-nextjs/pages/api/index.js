import { getAllItems, saveById } from "@/services/itemsService"

export default function handler (req , res) {
    if(req.method === "GET") {
        const data = getAllItems();
        return res.status(200).json(data)
    } 
    else if (req.method === "POST") {
        const { title , description } = req.body;
        saveById(title , description);
        return res.status(201).json({message : "Item Added Successfully"})
    } 
    else {
        return res.status(400).json({errorMessage : "Method Not Found !"});
    }
}