const input = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let userText = input.value;
    addMessage("You: " + userText);

    let reply = getReply(userText);
    setTimeout(() => addMessage("Bot: " + reply), 500);

    input.value = "";
  }
});

function addMessage(msg) {
  let div = document.createElement("div");
  div.textContent = msg;
  chatBody.appendChild(div);
}

function getReply(text) {
  text = text.toLowerCase();

  if (text.includes("price")) return "Please contact on WhatsApp for best price 👍";
  if (text.includes("battery")) return "We have Exide, Amaron, Microtek batteries 🔋";
  if (text.includes("delivery")) return "Free delivery within 15km 🚚";
  if (text.includes("service")) return "Technician visit charge ₹250 👨‍🔧";

  return "Please contact us on WhatsApp for details 😊";
}
