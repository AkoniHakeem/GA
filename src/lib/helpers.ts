import {Request} from "express"

/* partly extracted from: https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node */

// there is a concern about this about not able to read the actual location of the user
// rather it can be derived from the users browers agent
export const getClientIp = (req: Request) => {
    const parseIp = 
    (typeof req.headers['x-forwarded-for'] === 'string' && req.headers['x-forwarded-for'].split(',').shift())
    || req.connection?.remoteAddress
    || req.socket?.remoteAddress
    || (<any>req).connection?.socket?.remoteAddress
    return parseIp;
}