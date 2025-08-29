app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  const aiReply = await getAIResponse(userMessage); // Use OpenAI or similar
  res.json({ reply: aiReply });
});
