import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd() , "db" , "items.json");

export function getAllItems () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById (itemId) {
    const data = getAllItems();
    const eachItem = data.filter(i => i.id === Number(itemId))
    return eachItem ;
}

export function saveById (title , description) {
    const data = getAllItems();
    const newObject = {
        id : data.length + 1 , 
        title : title , 
        description : description ,
    }
    data.push(newObject);
    fs.writeFileSync(filePath , JSON.stringify(data));
}

export function deleteById (itemId) {
    const data = getAllItems();
    const newData = data.filter(p => p.id !== Number(itemId));

    fs.writeFileSync(filePath , JSON.stringify(newData));

}

export function updateById (itemId , title , description) {
    const data = getAllItems();
    const item = data.findIndex(p => p.id === Number(itemId));

    if(item !== -1) {
        data[item].title = title ;
        data[item].description = description ;

        fs.writeFileSync(filePath , JSON.stringify(data));
        return data[item]
    }
    return null ;

}