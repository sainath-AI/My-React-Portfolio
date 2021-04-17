/* Change this file to get your personal Porfolio */

/*
TODO:
1. Edit all the texts in Homepage, Education tab, contact me tab, projects tab, Experience tab.
2. Remove opensource tab
3. Remove git projects integration from projects tab
4. Add a component to display all my projects in card components, which will contain project name, description, live link & github link
5. Design the splash screen
6. Update resume link with updated resume
7. Update svg illustrations as I like
8. Play with theme color customizations
*/


// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Subham's Portfolio",
  description:
    "A passionate Software Engineer with 4+ years of experience in Software Industry. Skilled in designing, building & maintaining highly scalable and available software applications.",
  og: {
    title: "Subham Raoniar Portfolio",
    type: "website",
    url: "https://subhamraoniar.com/",
  },
};

//Home Page
const greeting = {
  title: "Subham Raoniar",
  logo_name: "SubhamRaoniar",
  nickname: "",
  subTitle:
    "A passionate Software Engineer with 4+ years of experience in Software Industry. Skilled in designing, building & maintaining highly scalable and available software applications.",
  secondSubtitle: "Love to learn new technologies everyday and apply them through building new projects.",
  resumeLink:
    "https://1drv.ms/w/s!AgouOYIBgjsMpCKSpTqIQvycOJW7?e=6kOg5F",
  portfolio_repository: "https://github.com/SubhamRaoniar28",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/SubhamRaoniar28",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/subham-raoniar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC-NXT1lYAOPa3lrgWXqvuHA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:subham.raoniar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/subhamraoniar",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/subham.raoniar/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/subhamraoniar/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing highly scalable and maintainable REST APIs using Microservice Architecture",
        "⚡ Creating application backend using Java, Spring Boot along with integration of databases such as Oracle SQL & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "bx:bxl-spring-boot",
          style: {
            color: "#5CB230",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#52A74B",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "vscode-icons:file-type-maven",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining dynamic web applications, wordpress or static websites on virtual machine instances",
        "⚡ Setting up application backend in Firebase BaaS, Cloud Firestore",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Cloud Firestore",
          fontAwesomeClassname: "vscode-icons:file-type-firestore",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ As mentioned above, I like to learn new technologies and as a developer everyone should be familiar with latest trending tools & technologies. Data Science and Machine Learning is popular & trending nowadays, and I found it quite interesting.",
        "⚡ So far, I've done a few courses related to the same from Coursera, such as \"Python for Everybody Specialization\", \"Introduction to Data Science in Python\", and learned data computing & manipulating libraries such as Numpy & Pandas.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#130654",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page

// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Jalpaiguri Govt. Engineering College",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "JGEC-logo.png",
      alt_name: "JGEC Logo",
      duration: "2012 - 2015",
      descriptions: [
        "⚡ Graduated with 7.72 DGPA.",
        "⚡ I have studied basic software engineering subjects like Java, DS, Algorithms, Computer Architecture, Operating System, DBMS, Computer Network etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development and Data Science.",
      ],
      website_link: "https://jgec.ac.in/",
    },
    {
      title: "Dumkal Polytechnic",
      subtitle: "Diploma in Electronics & Telecommunications Engg.",
      logo_path: "dumkal-polytech-logo.png",
      alt_name: "Dumkal Polytech. Logo",
      duration: "2009 - 2012",
      descriptions: [
        "⚡ Graduated with First Class Distinction with a score of 80 Percentile.",
        "⚡ I have studied electronics engineering subjects like Analog & Digital Electronics, Microprocessor, Communication Engineering and basic computer science subjects such as C Programming, Computer Network etc.",
        "⚡ Apart from this, I had made an AM (Amplitude Modulation), FM (Frequency Modulation) & PM (Phase Modulation) Kit in my final year project.",
      ],
      website_link: "http://dumkalpolytechnic.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Object Oriented Programming in Java",
      subtitle: "- Mia Minnes, Leo Porter, Christine Alvarado",
      logo_path: "UC-San-Diego-logo.png",
      certificate_link:
        "https://coursera.org/share/95c54b141d11cc638fabef63b5908f09",
      alt_name: "University of California San Diego",
      color_code: "#02447B",
    },
    {
      title: "Java Multithreading",
      subtitle: "- John Purcell",
      logo_path: "udemy-logo.png",
      certificate_link:
        "http://ude.my/UC-2029a6c9-08b6-4622-8427-48a8c111d061",
      alt_name: "IBM",
      color_code: "#FFB6C1",
    },
    {
      title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/7f8702e5879631b6cf9da7f04beb04e1",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "- Jogesh Muppala",
      logo_path: "HKUST-logo.png",
      certificate_link:
        "https://coursera.org/share/59ea7b7b3b5574f799db0dfae4ac6f7b",
      alt_name: "Hong Kong University of Science and Technology",
      color_code: "#F7F7F7",
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "- Jogesh Muppala",
      logo_path: "HKUST-logo.png",
      certificate_link:
        "https://coursera.org/share/24ed6b1f8d080df344a55d13af690777",
      alt_name: "Hong Kong University of Science and Technology",
      color_code: "#F7F7F7",
    },
    {
      title: "Front-End Web UI Frameworks and Tools",
      subtitle: "- Jogesh Muppala",
      logo_path: "HKUST-logo.png",
      certificate_link:
        "https://coursera.org/share/ff017bf02797713d395c83998c2edc21",
      alt_name: "Hong Kong University of Science and Technology",
      color_code: "#F7F7F7",
    },
    {
      title: "HTML, CSS and JavaScript",
      subtitle: "- Jogesh Muppala",
      logo_path: "HKUST-logo.png",
      certificate_link:
        "https://coursera.org/share/684fb4b1b2aca4b3c10b36ec159eae85",
      alt_name: "Hong Kong University of Science and Technology",
      color_code: "#F7F7F7",
    },
    {
      title: "Python for Everybody Specialization",
      subtitle: "- Charles Russell Severance",
      logo_path: "uni-of-michigan-logo.png",
      certificate_link:
        "https://coursera.org/share/b77cc1012bd3ced36c00d31501a6e28d",
      alt_name: "University of Michigan",
      color_code: "#02447B",
    },
    {
      title: "Introduction to Data Science in Python",
      subtitle: "- Christopher Brooks",
      logo_path: "uni-of-michigan-logo.png",
      certificate_link:
        "https://coursera.org/share/ad10f0212cd4eecc3704a002a693d4ea",
      alt_name: "University of Michigan",
      color_code: "#02447B",
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/684c81a4e8f93d65a1462bdfc5b6ffc9",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AI For Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning-logo.png",
      certificate_link:
        "https://coursera.org/share/34d86df65b1b4db906edb601dee26910",
      alt_name: "Deeplearning.ai",
      color_code: "#333333",
    },
    {
      title: "The Science of Success: What Researchers Know that You Should Know",
      subtitle: "- Paula Caproni",
      logo_path: "uni-of-michigan-logo.png",
      certificate_link:
        "https://coursera.org/share/2c5ac2f17afb3b941d55bf51321cfc1f",
      alt_name: "University of Michigan",
      color_code: "#02447B",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "I have worked with one of India's largest IT company as a software developer for more than 4 years. Over these years I've worked on multiple large scale projects for different client companies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Projects",
      experiences: [
        {
          title: "System Engineer",
          company: "Tata Consultancy Services Limited",
          company_url: "https://www.tcs.com/",
          logo_path: "TCS-logo.png",
          duration: "October 2015 - June 2020",
          location: "Bangalore, Karnataka",
          description:
            "",
          color: "#0879bf",
          projects: [
            {
              projectName: "Business Deposits",
              clientName: "Client - U.S Bank",
              projectDescription: "Business Deposits is a complex web application made for small businesses and entrepreneurs so that they can open their business account in U.S. Bank as per their need. Created multiple web services, developed controller, service, repository classes and wrote business logic into service class."
            },
            {
              projectName: "Credit Bridge Core Services",
              clientName: "Client - Wells Fargo Bank",
              projectDescription: "Credit Bridge is an intranet web application for Wells Fargo bank to audit various database tables within the bank. Built the application from scratch, starting from creating RESTful APIs, writing unit testcases for those services, till application build and deployment."
            },
            {
              projectName: "Intel Customized Security Solution (McAfee)",
              clientName: "Client - Intel",
              projectDescription: "McAfee is well known for its various anti-virus products and providing security solutions throughout the world. Customized, tested (both automation and manual), and deployed their core anti-virus products based on the requirements of their around 100s of OEM (such as DELL, HP, ASUS) and non-OEM customers and delivered zero defect products to production."
            },
          ]
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url:
    //         "",
    //       logo_path: "intel_logo.jpg",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = {
  myProjects: [
    {
      id: 1,
      name: "My Portfolio",
      description: "The complete portfolio website hosted using github pages (gh-pages). Visit the website here : ",
      createdAt: "2021-03-06",
      liveUrl: "https://www.subhamraoniar.com/",
      gitUrl: "https://github.com/SubhamRaoniar28/My-React-Portfolio",
    },
    {
      id: 2,
      name: "Covid-19 Tracker",
      description: "Covid-19-tracker is a react app made to track, check status and count of Corona virus affected countries and people.",
      createdAt: "2021-03-06",
      liveUrl: "https://covid-19-tracker-e4bda.web.app/",
      gitUrl: "https://github.com/SubhamRaoniar28/Covid-19-tracker",
    },
    {
      id: 3,
      name: "Restaurante Confusion",
      description: "This project is a Restaurant web application called Confusion made using React and Firebase.",
      createdAt: "2021-03-06",
      liveUrl: "https://confusion-restaurant-95beb.web.app/home",
      gitUrl: "https://github.com/SubhamRaoniar28/confusion-react-firebase-final",
    }
  ]
}

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "subham.png",
    description:
      "I am available on almost every social media. You can message me anytime, I will reply within 24 hours. I can help you with Java, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write blogs to explain solutions of digital & technical problems in much simpler way.",
    link: "https://digital-techie.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Whitefield, Bangalore, Karnataka, 560066",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9641049962",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projectsData,
  contactPageData,
};
