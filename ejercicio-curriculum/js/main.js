const experience = [
  {
    title: "Sykes / 2021",
    role: "Technical support agent-BGCO Verizon account",
    details: [
      "Provided specialized technical support for the U.S. market, focusing on network connectivity and hardware troubleshooting.",
      "Diagnosed and resolved complex issues for mobile devices, modems, and portable hotspots using standardized technical procedures.",
      "Maintained high-quality service standards while managing real-time technical documentation and customer communication in English.",
      "Developed strong analytical and problem-solving skills by identifying root causes in network failures and device malfunctions."
    ]
  },
  {
    title: "Universidad de Costa Rica UCR / 2021-Present",
    role: "Software Developer (Academic Projects)",
    details: [
      "Developed full-stack solutions across multiple languages (C#, Java, Python), applying SOLID principles and Clean Code to build scalable and maintainable software.",
      "Managed the full development lifecycle under the Scrum methodology, actively participating in Sprints, Sprint Grooming, and daily stand-ups to ensure timely delivery.",
      "Worked with Jira for project management, organizing the Product Backlog, defining Epics, and documenting detailed User Stories to align with project requirements.",
      "Implemented version control using Git/GitHub, following best practices for branching and collaborative development.",
      "Designed intuitive front-end interfaces with Figma, Vue.js and Tailwind CSS, based on Human-Computer Interaction (HCI) standards for optimal user experience."
    ]
  }
];

const education = [
  {
    title: "Universidad de Costa Rica UCR / 2021-Present",
    role: "Bachelor in Software Engineering",
    details: [
      "Analysis of Algorithms and Data Structures",
      "Software design",
      "Databases",
      "Human-Computer Interaction (HCI)"
    ]
  },
  {
    title: "COVAO Vocational High School / 2018-2020",
    role: "Technical Degree in Industrial Electronics",
    details: ["Internship at MC Logistica"]
  }
];

const skills = [
  { category: "Languages", items: "C#, C++, Java, SQL, Python, Javascript." },
  { category: "Backend", items: ".Net" },
  { category: "Frontend", items: "Vue.js, Tailwind" },
  { category: "Methodologies & Tools", items: "Scrum, Git, GitHub" }
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2+" }
];

const references = [
  {
    name: "Sebastian Diaz Obando",
    role: "Character Reference - Software Engineer",
    phone: "+506 7292-5139",
    phoneLink: "+50672925139"
  },
  {
    name: "Heidy Sequeira Valverde",
    role: "Character Reference - Administration Professional",
    phone: "+506 8774-5840",
    phoneLink: "+50687745840"
  }
];

function addArticle(container, item) {
  const article = document.createElement("article");

  const title = document.createElement("h3");
  title.textContent = item.title;
  article.append(title);

  const role = document.createElement("p");
  const roleText = document.createElement("strong");
  roleText.textContent = item.role;
  role.append(roleText);
  article.append(role);

  const list = document.createElement("ul");
  item.details.forEach((detail) => {
    const listItem = document.createElement("li");
    listItem.textContent = detail;
    list.append(listItem);
  });
  article.append(list);

  container.append(article);
}

const experienceList = document.querySelector("#experience-list");
experience.forEach((item) => addArticle(experienceList, item));

const educationList = document.querySelector("#education-list");
education.forEach((item) => addArticle(educationList, item));

const skillsList = document.querySelector("#skills-list");
skills.forEach((skill) => {
  const listItem = document.createElement("li");
  const category = document.createElement("strong");
  category.textContent = `${skill.category}: `;
  listItem.append(category, document.createTextNode(skill.items));
  skillsList.append(listItem);
});

const languagesList = document.querySelector("#languages-list");
languages.forEach((language) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const levelCell = document.createElement("td");
  nameCell.textContent = language.name;
  levelCell.textContent = language.level;
  row.append(nameCell, levelCell);
  languagesList.append(row);
});

const referencesList = document.querySelector("#references-list");
references.forEach((reference) => {
  const article = document.createElement("article");

  const name = document.createElement("h3");
  name.textContent = reference.name;

  const role = document.createElement("p");
  role.textContent = reference.role;

  const phone = document.createElement("p");
  phone.append(document.createTextNode("Phone: "));
  const phoneLink = document.createElement("a");
  phoneLink.href = `tel:${reference.phoneLink}`;
  phoneLink.textContent = reference.phone;
  phone.append(phoneLink);

  article.append(name, role, phone);
  referencesList.append(article);
});

const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("curriculum-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
let currentTheme = savedTheme === "dark" || savedTheme === "light"
  ? savedTheme
  : preferredTheme;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.textContent = isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
  );
}

applyTheme(currentTheme);

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  localStorage.setItem("curriculum-theme", currentTheme);
});
