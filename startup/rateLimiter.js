const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 100 requests per windowMs
});

module.exports = function (app) {
    // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB or API Gateway, Nginx, etc)
    // see https://expressjs.com/en/guide/behind-proxies.html
    app.set("trust proxy", 1);
    app.use(limiter);
};
