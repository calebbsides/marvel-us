import crypto from "crypto";

export default async function handler(req, res) {
  const ts = Date.now();
  const hash = crypto
    .createHash("md5")
    .update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
    .digest("hex");

  const url = new URL(process.env.MARVEL_API + "/characters/" + req.query.id);
  const params = { ts: ts, apikey: process.env.PUBLIC_KEY, hash: hash };

  url.search = new URLSearchParams(params).toString();

  const marvelResponse = await fetch(url);
  const data = await marvelResponse.json();

  res.status(200).json(data);
}
