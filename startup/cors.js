const cors = require("cors");

module.exports = function (app) {
    app.use(
        cors({
            origin: ["https://afternoon-caverns-13473.herokuapp.com", "http://localhost:3000"],
        })
    );
};
