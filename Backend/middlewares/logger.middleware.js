const fs = require("fs");

const logger = (req, res, next) => {
    const now = new Date();
    const log = now + " " + req.method + " " + req.url + "\n";
    fs.appendFile("./logger.txt", log, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });
    next();
};

module.exports = logger;
