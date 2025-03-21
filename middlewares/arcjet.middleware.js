import aj from "../utils/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });
        console.log("Arcjet Decision:", decision);
        console.log("Request Headers:", req.headers);
        console.log("Request IP:", req.ip);

        if (decision.isDenied()) {
            if (!decision.reason) {
                return res.status(403).json({ error: "Access Denied: No reason provided" });
            }
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: "Rate limit exceeded" });
            } else if (decision.reason.isBot()) {
                return res.status(403).json({ error: "Bot detected" });
            } else {
                return res.status(403).json({ error: "Access Denied" });
            }
        }
        
        next();
    } catch (err) {
        next(err);
    }
};

export default arcjetMiddleware;
