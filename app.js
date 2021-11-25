const { Appsignal } = require("@appsignal/nodejs");
const { context } = require("@opentelemetry/api");

const appsignal = new Appsignal({
  active: true,
  name: "OpenTelemetryExample",
  apiKey: "2d43c838-0e94-4b9c-811d-2055b595b6cc",
  endpoint: "https://push.staging.lol"
});

global.appsignal = appsignal;

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
