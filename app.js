const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // 選擇一個適當的端口

app.use(bodyParser.json());

app.post('/postWebhook', (req, res) => {
  // 在這裡處理Webhook請求
  const payload = req.body; // 這裡的payload包含Webhook數據
  
  // 執行您的處理邏輯，回復Webhook請求等等
  res.status(200).send(req.body)
  res.status(200).send('POST Webhook已處理'); // 回復200 OK
});


app.get('/getWebhook', (req, res) => {
  // 在這裡處理Webhook請求
  const payload = req.body; // 這裡的payload包含Webhook數據

  // 執行您的處理邏輯，回復Webhook請求等等

  res.status(200).send('GET Webhook已處理'); // 回復200 OK
});

app.listen(port, () => {
  console.log(`Webhook服務正在監聽端口 ${port}`);
});