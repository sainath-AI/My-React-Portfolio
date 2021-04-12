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
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Subham Raoniar Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Subham Raoniar",
  logo_name: "SubhamRaoniar",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://1drv.ms/w/s!AgouOYIBgjsMpCKSpTqIQvycOJW7?e=6kOg5F",
  portfolio_repository: "https://github.com/SubhamRaoniar28/MyPortfolio",
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
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP",
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
      title: "Learning Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
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
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = {
  myProjects: [
    {
      id: 1,
      name: "My Portfolio",
      description: "The complete portfolio website hosted using github pages (gh-pages). Visit the website here : ",
      createdAt: "2021-03-06",
      liveUrl: "https://confusion-restaurant-95beb.web.app/home",
      gitUrl: "https://github.com/SubhamRaoniar28",
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
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
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
