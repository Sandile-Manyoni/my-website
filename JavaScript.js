(() => {
  "use strict";
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navAnchors = document.querySelectorAll(".nav-link, .nav-cta");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });
  navAnchors.forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) {
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }
  }));

  const sections = document.querySelectorAll("main section[id], main section.hero");
  const navItems = document.querySelectorAll(".nav-link");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id || "top";
        navItems.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(section => observer.observe(section));
  }

  // Profile chat: a local FAQ assistant. Connect a secure AI API/backend for generative answers.
  const launcher = document.getElementById("chatLauncher");
  const widget = document.getElementById("chatWidget");
  const close = document.getElementById("chatClose");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");
  const quickQuestions = document.querySelectorAll("[data-question]");

  function setChatOpen(open) {
    widget.classList.toggle("open", open);
    widget.setAttribute("aria-hidden", String(!open));
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? "Close chat with Sandile's assistant" : "Open chat with Sandile's assistant");
    if (open) setTimeout(() => input?.focus(), 100);
  }
  launcher?.addEventListener("click", () => setChatOpen(!widget.classList.contains("open")));
  close?.addEventListener("click", () => setChatOpen(false));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && widget.classList.contains("open")) setChatOpen(false);
  });

  const answers = [
    {keys:["experience","work","career","job","role"], answer:"Sandile has over five years of combined experience across information management, reporting, systems and technology-enabled operations. He is currently a Lecturer – Computer Science & Information Systems Specialist at Emeris. Previous roles include ICT Data & Information Management Programme Coordinator and IT Systems & Database Specialist at IIE Rosebank College, PR & Marketing Coordinator, and Innovation Officer at Nelson Mandela University."},
    {keys:["skill","technical","expertise","competenc","tools","technology","power bi","sql","excel"], answer:"His core areas include data and information management; data analysis and BI using Excel and Power BI; SQL and database design; ERP and enterprise applications; business and systems analysis; process documentation; data quality, controls and requirements-based testing; stakeholder communication and mentoring."},
    {keys:["education","qualification","degree","study","academic","master","honours"], answer:"Sandile is completing a Master of Commerce in Computer Science and Information Systems at Nelson Mandela University. He holds a BCom Honours and BCom in Information Systems and Business Management from Nelson Mandela University, a Postgraduate Diploma in Finance, Banking and Investment Management from UKZN, and a BSc in Biochemistry and Chemistry from UKZN."},
    {keys:["contact","email","phone","reach","connect","available","opportunit","hire"], answer:"You can contact Sandile at sandile.alwande@gmail.com or call +27 64 043 7562. Use the “Get in touch” section or email link on this page to start a conversation about professional opportunities."},
    {keys:["about","who","background","profile"], answer:"Sandile Manyoni is an Information Systems and technology professional based in Gauteng, South Africa. His experience spans data management, business processes, reporting, systems analysis and ICT education. He enjoys turning complex information into useful insights and mentoring future technology professionals."},
    {keys:["business analysis","business analyst","requirements","process"], answer:"Sandile's transferable business and systems analysis skills include gathering stakeholder requirements, analysing business processes, workflow mapping, functional validation, documenting requirements and communicating findings to technical and non-technical audiences."},
    {keys:["data engineer","data engineering","data analyst","analytics","bi analyst","business intelligence"], answer:"His relevant foundation includes SQL, database structures and relationships, structured data processing, data validation, Excel, Power BI, operational reporting, trend and exception analysis, and data visualisation. This profile describes transferable skills rather than claiming every specialist role or tool."},
    {keys:["audit","risk","control","compliance"], answer:"Relevant experience includes data accuracy and completeness checks, identifying errors and inconsistencies, requirements-based testing, documentation, process compliance and reviewing projects using operational, commercial and technology information."}
  ];
  function answerQuestion(question) {
    const q = question.toLowerCase();
    const match = answers.find(item => item.keys.some(key => q.includes(key)));
    if (match) return match.answer;
    return "I can help with Sandile's professional profile, experience, skills, education or contact details. Try asking “What are his key skills?”, “Tell me about his experience” or “How can I contact Sandile?”";
  }
  function addMessage(text, who) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${who}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }
  function sendQuestion(question) {
    const clean = question.trim();
    if (!clean) return;
    addMessage(clean, "user");
    input.value = "";
    window.setTimeout(() => addMessage(answerQuestion(clean), "bot"), 220);
  }
  form?.addEventListener("submit", event => {
    event.preventDefault();
    sendQuestion(input.value);
  });
  quickQuestions.forEach(button => button.addEventListener("click", () => sendQuestion(button.dataset.question || "")));
})();
