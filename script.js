document.querySelectorAll('.skill-fill').forEach(skill => {
    skill.style.width = skill.dataset.width + '%';
});

 const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.innerHTML = "☀️";
        } else {
            themeToggle.innerHTML = "🌙";
        }
    });
}


 function toggleChat(){
  const chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}


  const input = document.querySelector(".chat-footer input");
const sendBtn = document.querySelector(".chat-footer button");
const chatBody = document.querySelector(".chat-body");



// Yahan apni Gemini API Key paste karo
 

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const message = input.value.trim();
    console.log("User Message:", message);
    if (!message) return;

    // User Message
    chatBody.innerHTML += `
    <div style="text-align:right;margin:10px;">
        <div style="display:inline-block;background:#8b5cf6;color:white;padding:10px 15px;border-radius:15px;max-width:75%;">
            ${message}
        </div>
    </div>`;

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Typing...
    chatBody.innerHTML += `
    <div id="typing" style="margin:10px;">
        <div style="display:inline-block;background:#64748b;color:white;padding:10px 15px;border-radius:15px;">
            Typing...
        </div>
    </div>`;

    chatBody.scrollTop = chatBody.scrollHeight;

    try {

     const response = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          {
                             text: `
You are Ajeet Yadav's AI Portfolio Assistant.

About Ajeet:
- Name: Ajeet Yadav
- Role: Data Analytics Enthusiast
- Skills: Python, SQL, Power BI, HTML, CSS, JavaScript, Excel

Projects:
1. Sales Dashboard in Power BI
2. Customer Churn Analysis
3. Student Performance Dashboard
4. Data Analytics Portfolio Website

Email: ajeetyadav03112005@gmail.com

Rules:
- Answer according to the user's question.
- If the question is about Ajeet, answer using the portfolio information.
- If it is a general question, answer normally.

User Question:
${message}
`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        document.getElementById("typing").remove();

        const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Sorry, I couldn't understand.";

        chatBody.innerHTML += `
        <div style="margin:10px;">
            <div style="display:inline-block;background:#64748b;color:white;padding:10px 15px;border-radius:15px;max-width:75%;">
                ${reply}
            </div>
        </div>`;

        chatBody.scrollTop = chatBody.scrollHeight;

    } catch (err) {

        document.getElementById("typing").remove();

        chatBody.innerHTML += `
        <div style="margin:10px;">
            <div style="display:inline-block;background:red;color:white;padding:10px 15px;border-radius:15px;">
                Error connecting to Gemini API.
            </div>
        </div>`;
    }
}




 