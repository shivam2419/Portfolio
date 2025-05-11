import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technology like React, as well as back-end technologies like Django, MySQL, and SQlite. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Django, Php, MySQL, Sqlite3, and C++. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July'22 - Sep'22",
    role: "Web Developer",
    company: "NSIC",
    description: `Led a team in developing and maintaining web applications using Html, Css, JavaScript & Php. Implemented RESTful APIs and integrated with MySQL database. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "Php", "API's", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Scrap Management System Module",
    image: project1,
    description:
      "A fully functional scrap management website with features like scrap pickup booking, educational content, user authentication, scrap classification using ML and lot more...",
    link: "https://scrapbridge.vercel.app/" ,
    technologies: ["Javascript", "Django", "API's", "ML"],
  },
  {
    title: "Attendence Management system Module",
    image: project2,
    description:
      "An application for managing attendance of students, with features such as user authentication, assignment, and attendance marking.",
    link: "https://github.com/shivam2419/Attendance-management-system-" ,
    technologies: ["Javascript", "Php","MySQL", "API's"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      link: "http://myportfolio-navy-six-65.vercel.app/" ,
    technologies: ["Tailwind CSS", "React", "Bootstrap"],
  },
  {
    title: "School Website",
    image: project4,
    description:
      "A platform which introduces school to users with features like student registration and an admin panel for modification in website content.",
    link: "https://shivam2419.pythonanywhere.com/" ,
    technologies: ["Django", "Javascript", "Sqlite", "API's"],
  },
];

export const CONTACT = {
  address: "ABC-29, Haryana, 121002",
  phoneNo: "+91 XXXXXX4480",
  email: "shivam241980+portfolio@gmail.com",
};
