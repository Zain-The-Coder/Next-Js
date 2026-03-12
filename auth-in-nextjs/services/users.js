import fs, { readFileSync } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd() , "data" , "users.json")

export function getAllUsers () {
    const data = readFileSync(filePath);
    return JSON.parse(data);
}

export function getByEmail () {
    const data = getAllUsers();
    const eachItem = data.filter(user => (user.email).toLowerCase() === email.toLowerCase());
    return eachItem ;
}

export function save () {
    const data = getAllUsers();
    const user = getByEmail();

    if(user) {
        throw new Error("User Already Exist !");
    }
    data.push({
        id : data.length + 1 , 
        email , password 
    })
    fs.writeFileSync(filePath , JSON.stringify(data));
}