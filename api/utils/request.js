const https = require("https");

class Request {
    static parseParams(params) {
        const queryParams = Object.keys(params);

        if (!queryParams.length > 0) return "";

        let search = "?";

        queryParams.forEach((key, i) => {
            search += i > 0 ? "&" : "";
            search += `${key}=${params[key]}`;
        });

        return search;
    }

    static get(baseUrl, params) {
        const query = baseUrl + this.parseParams(params);

        return new Promise((resolve, reject) => {
            const req = https
                .get(query, (res) => {
                    let data = "";

                    // A chunk of data has been received.
                    res.on("data", (chunk) => {
                        data += chunk;
                    });

                    // The whole response has been received. Print out the result.
                    res.on("end", () => {
                        resolve(JSON.parse(data));
                    });
                })
                .on("error", (err) => {
                    reject(err.message);
                });

            req.end();
        });
    }
}

module.exports = Request;
