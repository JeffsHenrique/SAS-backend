import { RequestHandler } from "express";

export const requestIntercepter: RequestHandler = (req, res, next) => {
    // console.log(`► 403 GET /admin/events/123?abc=true {password:123456}`)
    console.log(`► ${res.statusCode} ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
    next();
}