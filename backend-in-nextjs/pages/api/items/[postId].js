import { deleteById, getAllItems, getById, updateById } from "@/service/service";

export default function handler (req , res) {

    if(req.method === "GET") {
        const postId = req.query.postId ;
        const data = getById(postId);
        return res.status(200).json(data);
    }
     else if (req.method === "DELETE") {
        const data = getAllItems();
        const { postId } = req.query;
        if(data.length < postId) {
            try {
                res.status(201).json({errorMessage : "Item Is Enough !"})
            } catch (e) {
                res.status(404).json(e);
            }
        }

        deleteById(postId);
        return res.status(200).json({message : "Item Deleted Successfully" , postId});
    }
    else if (req.method === "PUT" || req.method === "PATCH") {
        const {title , description , price} = req.body ;
        const { postId } = req.query;
        updateById(postId , title , description);
        res.status(200).json({message : "data updated successfully !"})
    }
    else {
        res.status(404).json({errorMessage : "Method Not Found"})
    }
}