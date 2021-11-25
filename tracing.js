const opentelemetry = require("@opentelemetry/sdk-node");
const { ConsoleSpanExporter } = require("./ConsoleSpanExporter.js");

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  instrumentations: []
});

sdk.start()
