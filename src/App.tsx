import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const portfolioData = {
    hero: {
      name: "THIRAN V",
      title: "BIO-MEDICAL ENGINEER",
      description: "Passionate about creating elegant solutions to complex problems. Specializing in modern web technologies and user-centered design.",
      cvUrl: "/FINAL2025-NOV.pdf"
    },
    about: {
      bio : "I'm a dedicated developer passionate about creating exceptional digital experiences. I enjoy tackling challenging problems, learning new technologies, and continuously improving my skills. Outside of coding, I love exploring tech trends, contributing to open-source projects, and sharing knowledge with the developer community.",
     /* imageUrl: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800"*/
    },
   projects: [
      {
        id: 1,
        title: "Home automation system",
        description: "Built a smart home solution with ESP32-CAM for remote appliance control, live video streaming, motion detection, and keypad-based access. Focused on enhancing security and convenience through real-time automation.",
        technologies: ["Arduino IDE", "Embedded C"],
        imageUrl: "https://imgs.search.brave.com/EBBLWdFLPo_0jSzoluhGB14-ovL6Abos5zFoin8Sy9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zbWFy/dC1ob21lLWF1dG9t/YXRpb24tY29udHJv/bC1zeXN0ZW0taW5u/b3ZhdGlvbi10ZWNo/bm9sb2d5LWludGVy/bmV0LW5ldHdvcmst/Y29uY2VwdC1zbWFy/dC1ob21lLWF1dG9t/YXRpb24tY29udHJv/bC1zeXN0ZW0tOTky/MTE2NzguanBn"
      },
      {
        id: 2,
        title: "Fetal Monitoring System",
        description: "Engineered a non-invasive fetal movement tracker using ESP32 and MPU6050. Enables pregnant women to monitor fetal activity at home, reducing clinical visits and enhancing prenatal care accessibility.",
        technologies: ["Arduino IDE", "Embedded C","Flutter"],
        imageUrl: "https://imgs.search.brave.com/kxpUHXDgbArASkkh4CdkpFQNExiNo2--XeA5wWEDbo0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oZWFs/dGh5LmthaXNlcnBl/cm1hbmVudGUub3Jn/L2NvbnRlbnQvZGFt/L2twL2NodWIvaW1h/Z2VzL21hdGVybml0/eS9GZXRhSUhlYXJ0/TW9uaXRvcmluZ09u/UHJlZ25hbnRXb21h/bmxuVGhlSG9zcGl0/YWxfbC1kdC5qcGc"
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Interactive weather application with location-based forecasts and beautiful data visualizations.",
        technologies: ["React", "API Integration", "Chart.js", "CSS"],
        imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ],/*
  projects: [
  {
    id: 1,
    title: "Fetal Monitoring System",
    subtitle: "Finalist – EDII Hackathon",
    tools: ["Visual Studio Code", "Arduino IDE"],
    description:
      "Engineered a non-invasive fetal movement tracker using ESP32 and MPU6050. Enables pregnant women to monitor fetal activity at home, reducing clinical visits and enhancing prenatal care accessibility.",
  },
  {
    id: 2,
    title: "Paralysis Patient Healthcare Monitoring",
    subtitle: "Runner-up – Technical Presentation",
    tools: ["Visual Studio Code", "Arduino IDE"],
    description:
      "Developed an IoT-based assistive system using motion sensors for hand gesture recognition. Facilitates wireless caregiver alerts and real-time health monitoring for improved patient autonomy.",
  },
  {
    id: 3,
    title: "Home Automation System",
    subtitle: "Finalist – BIT Hacks 2023",
    tools: ["Arduino IDE", "MIT App Inventor", "Firebase"],
    description:
      "Built a smart home solution with ESP32-CAM for remote appliance control, live video streaming, motion detection, and keypad-based access. Focused on enhancing security and convenience through real-time automation.",
  },
],

    skills: [
      {
        category: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
      },
      {
        category: "Tools & Other",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Agile"]
      }
    ],*/
    skills: [
  {
    category: "Programming Languages",
    skills: ["C", "Java", "C++", "SQL"]
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "Visual Studio Code", "Figma", "MySQL Workbench"]
  },
 /* {
    category: "Domain Expertise",
    skills: ["Arduino", "Biomedical Instrumentation", "IoT Systems", "Signal Processing"]
  },*/
  {
    category: "Soft Skills",
    skills: ["Leadership", "Cognitive Flexibility", "Problem Solving", "Communication"]
  }
],

    contact: {
      email: "thiranvofficial@gmail.com",
      linkedin: "https://www.linkedin.com/in/thiran-v-549a51267/",
      github: "https://github.com/thiran18",
      twitter: "https://twitter.com/yourhandle"
    }
  };

  return (
    <div className="app">
      <Navigation />
      <Hero
        name={portfolioData.hero.name}
        title={portfolioData.hero.title}
        description={portfolioData.hero.description}
        cvUrl={portfolioData.hero.cvUrl}
      />
      <About
        bio={portfolioData.about.bio}
        imageUrl={portfolioData.about.imageUrl}
      />
      <Projects projects={portfolioData.projects} />
      <Skills skillCategories={portfolioData.skills} />
      <Contact
        email={portfolioData.contact.email}
        linkedin={portfolioData.contact.linkedin}
        github={portfolioData.contact.github}
      /*  twitter={portfolioData.contact.twitter}*/
      />
    </div>
  );
}

export default App;
