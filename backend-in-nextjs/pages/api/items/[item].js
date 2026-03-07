import { getById } from "@/services/service";

export default function handler (req , res) {
    if(req.method === "GET") {
        const id = req.query.item;
        const data = getById(id);
        return res.status(200).json(data);
    } else {
        return res.status(404).json({message : "Page Not Found !"});
    }
}