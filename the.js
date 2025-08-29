document.getElementById("chat-button").onclick = () => {
  document.getElementById("chat-window").style.display = "flex";
};

document.getElementById("chat-input").addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const userMessage = e.target.value;
    appendMessage("You", userMessage);
    e.target.value = "";

    // Send to AI backend (replace with your endpoint)
    const response = await fetch("https://your-ai-endpoint.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    appendMessage("Agent", data.reply);
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  document.getElementById("chat-body").appendChild(msg);
}
