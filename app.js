const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // 選擇一個適當的端口
const customParser = bodyParser.json({type: function(req) {
  if (req.headers['content-type'] === ""){
      return req.headers['content-type'] = 'application/json';
  }
  else if (typeof req.headers['content-type'] === 'undefined'){
      return req.headers['content-type'] = 'application/json';
  }else{
      return req.headers['content-type'] = 'application/json';
  }
}});


app.use(bodyParser.json({
  limit: '50mb',
  extended: true
})); // support encoded bodies

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
})); // support encoded bodies


//  app.use(bodyParser.urlencoded({ extended: false }));

app.all('/webhook',customParser,  (req, res) => {
  // 在這裡處理Webhook請求
  const payload = req.body; // 這裡的payload包含Webhook數據
  console.log(payload)
  // 執行您的處理邏輯，回復Webhook請求等等
  res.status(200).send(payload)
  //  res.status(200).send('POST Webhook已處理'); // 回復200 OK
});

app.listen(port, () => {
  console.log(`Webhook服務正在監聽端口 ${port}`);
});