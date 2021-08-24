const crypto = require("crypto");

function generateMarvelBS() {
    const ts = Date.now();
    const hash = crypto
        .createHash("md5")
        .update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
        .digest("hex");

    return {
        ts,
        apikey: process.env.PUBLIC_KEY,
        hash,
    };
}

module.exports = generateMarvelBS;
