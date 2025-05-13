const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// وسيلة لتخزين المعرفات المسموح بها (تقدر تربطها لاحقًا بقاعدة بيانات)
const allowedBots = ['malak-bot-001'];

app.use(express.json());

app.post("/api/check-status", (req, res) => {
  const { botId } = req.body;

  if (!botId) {
    return res.status(400).json({ allowed: false, message: "Bot ID مفقود" });
  }

  const isAllowed = allowedBots.includes(botId);
  res.json({ allowed: isAllowed });
});

app.listen(PORT, () => {
  console.log(`✅ السيرفر شغال على الرابط: http://localhost:${PORT}`);
});
