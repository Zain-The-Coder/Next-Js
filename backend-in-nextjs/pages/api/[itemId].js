import { deleteById, getAllItems, getById, updateById } from "@/services/itemsService";

export default function handler(req , res) {
    if(req.method === "GET") {
        const fullObj = getAllItems();
        const itemId = req.query.itemId ;
        const data = getById(itemId);

        if(fullObj.length < itemId) {
            return res.status(404).json({errorMessage : "Oops ! Items Are Enough"})
        } else {
            return res.status(200).json(data);
        }
    } 
    else if (req.method === "DELETE") {
        const fullObj = getAllItems();
        const { itemId } = req.query;
        deleteById(itemId);
        if(fullObj.length < itemId) {
            return res.status(404).json({errorMessage : "Oops ! Items Are Enough"})
        }
        else {
        return res.status(200).json({message : "Item Deleted Successfully !"});
        }
    } 
    else if (req.method === "PATCH" || req.method === "PUT") {
        const data = getAllItems();
        const { itemId } = req.query ;
        const {title , description} = req.body ;
        
        if(data.length < itemId) {
            return res.status(404).json({errorMessage : "Oops ! Items Are Enough"})
        } else {
            updateById(itemId , title , description)
            return res.status(201).json({message : "Item Updated Successfully !"});
        }
        
    }
    else {
        return res.status(404).json({errorMessage : "Method Not Found"})
    }
}