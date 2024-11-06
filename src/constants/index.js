import project1 from "../assets/projects/project-1.webp";
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
    link: "https://github.com/shivam2419/EWaste" ,
    technologies: ["HTML", "CSS", "Js", "Django", "Sqlite", "Bootstrap"],
  },
  {
    title: "Attendence Management system Module",
    image: project2,
    description:
      "An application for managing attendance of students, with features such as user authentication, assignment, and attendance marking.",
    link: "https://github.com/shivam2419/Attendance-management-system-" ,
    technologies: ["HTML", "CSS", "Js", "Pho","MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      link: "https://github.com/shivam2419/Portfolio" ,
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "School Website",
    image: project4,
    description:
      "A platform which introduces school to users with features like student registration and an admin panel for modification in website content.",
    link: "https://github.com/shivam2419/School" ,
    technologies: ["HTML", "CSS", "Django", "Js", "Sqlite"],
  },
];

export const CONTACT = {
  address: "ABC-29, Haryana, 121002",
  phoneNo: "+91 XXXXXX4480",
  email: "shivam241980+portfolio@gmail.com",
};
