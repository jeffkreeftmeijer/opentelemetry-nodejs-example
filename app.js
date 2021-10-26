const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "OpenTelemetryExample",
  apiKey: "e526dcd6-3d2e-41c7-91c4-4f6c3cedf7de",
});

const express = require("express");
const { expressMiddleware } = require("@appsignal/express");

const PORT = process.env.PORT || "8080";
const app = express();

app.use(expressMiddleware(appsignal));

app.get("/", (req, res) => {
  console.log(appsignal.tracer().currentSpan())
  res.send("Hello World");
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
