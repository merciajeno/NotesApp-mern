const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "10 s"),
});

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit("my-limit");

        if (!success) {
            return res.status(429).json("Too many requests");
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    }
};

module.exports = rateLimiter;
