const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('👋 Hello from LINE Webhook!');
});

app.post('/webhook', (req, res) => {
  console.log('✅ ได้รับ Webhook จาก LINE:', req.body);
  res.sendStatus(200); // ต้องตอบ 200 OK เสมอ
});

app.listen(port, () => {
  console.log(`🚀 LINE Bot is running on port ${port}`);
});
