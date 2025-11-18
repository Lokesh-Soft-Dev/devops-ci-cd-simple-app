const express = require('express');
const promClient = require('prom-client');
const app = express();

promClient.collectDefaultMetrics();

app.get('/', (req, res) => {
  console.log("Root requested");
  res.send("Hello from simple-app");
});

app.get('/health', (req, res) => res.status(200).send('OK'));

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
