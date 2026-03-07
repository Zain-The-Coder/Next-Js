import fs from 'fs' ;
import path from 'path';

const filePath = path.join(process.cwd() , "db" , "items.json");

export function getAllItems () {
    const data = fs.readFileSync(filePath) ;
    return JSON.parse(data);
}

export function getById (item) {
    const data = getAllItems();
    return data.filter(p => p.id === Number(item))
}

export function save (title , description) {
    const data = getAllItems();
    data.push({
        id : data.length + 1 , 
        title , description
    })
    fs.writeFileSync(filePath , JSON.stringify(data))
}