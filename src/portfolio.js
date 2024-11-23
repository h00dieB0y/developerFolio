
/* Personal Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Replace with your custom animation file

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  username: "Manne Emile KITSOUKOU",
  title: "Hello! I'm Manne, a Passionate Software Developer",
  subTitle: emoji(
    "A dedicated Software Developer 🚀 experienced in building dynamic web applications using Java, Python, and JavaScript, with a keen interest in exploring cutting-edge technologies."
  ),
  resumeLink: "https://mkitsoukou.dev/resume.pdf",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/hoddieBoy",
  linkedin: "https://www.linkedin.com/in/mkitsoukou/",
  gmail: "emilemannekitsoukou@gmail.com",
  display: true,
};

const skillsSection = {
  title: "What I Do",
  subTitle: "A Versatile Software Developer Exploring Diverse Technologies",
  skills: [
    emoji(
      "⚡ Developing interactive web applications with a strong focus on backend development"
    ),
    emoji(
      "⚡ Implementing advanced algorithms and data structures to solve complex challenges"
    ),
    emoji(
      "⚡ Collaborating with cross-functional teams to deliver high-quality software solutions"
    ),
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "TDD", fontAwesomeClassname: "fas fa-vial" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IMT Atlantique",
      logo: require("./assets/images/imtLogo.png"),
      subHeader: "Apprenticeship in Software Engineering",
      duration: "September 2023 - September 2026",
      desc: "Specializing in software engineering, programming, and algorithms.",
      descBullets: [
        "Focusing on full-stack development, test-driven development, and CI/CD",
        "Gaining hands-on experience through projects and real-world applications",
      ],
    },
    {
      schoolName: "Université de Caen Normandie",
      logo: require("./assets/images/unicaenLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - June 2022",
      desc: "Focused on foundational computer science principles and programming.",
      descBullets: [
        "Excelled in object-oriented programming, data structures, and algorithms",
        "Completed projects in full-stack web development and database design",
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development", progressPercentage: "80%" },
    { Stack: "Frontend Development", progressPercentage: "70%" },
    { Stack: "Algorithm Design", progressPercentage: "75%" },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Apprentice & Project Manager",
      company: "La Poste Groupe",
      companylogo: require("./assets/images/laposteLogo.png"),
      date: "September 2023 – Present",
      desc: "Contributing to software projects and team engagement initiatives.",
      descBullets: [
        "Led webinars on Agile methodologies, increasing engagement by 20%",
        "Developed Node.js features for internal tools to improve data processing",
        "Enhanced accessibility and user experience for departmental websites",
        "Evaluated CMS alternatives, reducing decision-making time significantly",
      ],
    },
    {
      role: "Web Development Intern",
      company: "KNP Labs",
      companylogo: require("./assets/images/knplabsLogo.png"),
      date: "April 2023 – August 2023",
      desc: "Built full-stack web applications with ReactJS and Symfony.",
      descBullets: [
        "Developed a dynamic parking management system to optimize space usage",
        "Integrated Slack and email notifications, automating user alerts",
        "Improved CI/CD workflows, reducing deployment time by 40%",
      ],
    },
    {
      role: "Tutor in Computer Science & Mathematics",
      company: "Université de Caen Normandie",
      companylogo: require("./assets/images/unicaenLogo.png"),
      date: "November 2022 – June 2023",
      desc: "Provided tutoring support to first- and second-year students.",
      descBullets: [
        "Boosted student exam scores by an average of 15%",
        "Customized lesson plans to meet individual needs",
      ],
    },
  ],
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the Significant Projects I've Contributed To",
  projects: [
    {
      projectName: "HarmoniCal",
      projectDesc:
        "A state-of-the-art calendar management tool designed to seamlessly harmonize daily scheduling with unparalleled ease and intelligence.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/h00dieB0y/HarmoniCal",
        },
      ],
    },
    {
      projectName: "Meteo Airports",
      projectDesc:
        "Built an airport weather station simulator in Go, using MQTT and InfluxDB for real-time data handling. Worked collaboratively to showcase skills in API design and Docker deployment.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/hoddieBoy/imt-2023-go-project-ZEBIAN-KITSOUKOU-MILLION-LEBRAS-ACHEK",
        },
      ],
    },
    {
      projectName: "Task & Parking Management System",
      projectDesc:
        "Built a task and parking management system to prevent duplicates and optimize resource allocation for KNP LABS.",
      footerLink: [],
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Recognitions, Certifications, and Notable Accomplishments",
  achievementsCards: [
    {
      title: "Certified Java Developer",
      subtitle:
        "Earned certification demonstrating advanced proficiency in Java programming.",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.example.com/certification",
        },
      ],
    },
  ],
  display: false,
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights and knowledge on software development and technology.",
  blogs: [
    {
      url: "https://www.example.com/blog1",
      title: "Exploring Genetic Algorithms in Software Development",
      description:
        "An in-depth exploration of how genetic algorithms can be leveraged to solve complex software engineering problems.",
    },
  ],
  display: false,
};

const openSource = {
  showGithubProfile: "true",
  display: true,
};

const talkSection = {
  title: "Talks & Presentations",
  subtitle: "Sharing knowledge on technology and innovation.",
  talks: [],
  display: false,
};

const podcastSection = {
  title: "Podcasts",
  subtitle: "Hosting or featuring in podcasts.",
  podcasts: [],
  display: false,
};

const twitterDetails = {
  userName: "YourTwitterHandle",
  display: false,
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating or have a question? Feel free to reach out.",
  number: "+33-6-56-83-66-90",
  email_address: "emilemannekitsoukou@gmail.com",
};

const isHireable = true;

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  openSource,
  talkSection,
  podcastSection,
  twitterDetails,
  contactInfo,
  isHireable,
  resumeSection,
};
