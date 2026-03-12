import fs from 'fs' ;
import path from 'path';

const filePath = path.join(process.cwd() , "db" , "items.json");

export function getAllItems () {
    const data = fs.readFileSync(filePath);
    const filterData = JSON.parse(data)
    return filterData ;
}

export function getById (postId) {
    const data = getAllItems();
    const eachItem = data.filter(p => p.id === Number(postId));
    return eachItem ;
}

export function saveItem (title , description , price) {
    const data = getAllItems();
    data.push({
        id : data.length + 1 ,
        title : title ,
        description : description , 
        price : price ,
    })
    fs.writeFileSync(filePath , JSON.stringify(data))
}

export function deleteById (postId) {
    const data = getAllItems();
    const newData = data.filter(p => p.id !== Number(postId));
    fs.writeFileSync(filePath , JSON.stringify(newData));
}

export function updateById(postId, title, description) {
    const data = getAllItems(); // Pehle saari items mangwao
    
    // Wo index dhoondo jahan ID match karti hai
    const index = data.findIndex(p => p.id === Number(postId));

    if (index !== -1) {
        data[index].title = title;
        data[index].description = description;

        // Ab POORI array wapis save karo (sirf ek object nahi)
        fs.writeFileSync(filePath, JSON.stringify(data));
        return data[index];
    }
    return null;
}