
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Link,
  Mail,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "AI Career Coach",
    subtitle: "Real-Time Insights & Mock Interviews",
    category: "GENERATIVE AI · CAREER TECHNOLOGY",
    description:
      "Built and deployed a FastAPI-based career guidance application powered by Google's Gemini API. Used prompt engineering and session-personalization pipelines to deliver tailored career insights, interactive mock interviews, and adaptive AI-generated feedback grounded in conversational context.",
    stack: [
      "Python",
      "FastAPI",
      "Generative AI",
      "Gemini API",
      "Prompt Engineering",
      "Context Engineering",
    ],
    github: "https://github.com/ADITI9981/SensAI-",
  },
  {
    number: "02",
    title: "FarmBuddy",
    subtitle: "AI-Powered Crop Disease Detection",
    category: "COMPUTER VISION · AGRICULTURAL AI",
    description:
      "Developed a crop-disease detection pipeline combining computer vision on leaf images with IoT sensor data to identify potential disease onset early. Designed a PySpark processing layer for field-scale sensor data to support real-time forecasting and data-driven decisions for farmers.",
    stack: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "PySpark",
      "IoT Data",
      "APIs",
    ],
    github: "https://github.com/ADITI9981/FarmBuddy",
  },
  {
    number: "03",
    title: "Latent Emotion Detection",
    subtitle: "NLP Text Analytics System",
    category: "NATURAL LANGUAGE PROCESSING · TEXT ANALYTICS",
    description:
      "Developed an end-to-end NLP pipeline to classify implicit emotions in unstructured text. Engineered text-preprocessing and feature-extraction steps, applied machine learning models for emotion classification, and incorporated SQL-backed storage to organize structured prediction data.",
    stack: [
      "Python",
      "Natural Language Processing",
      "Text Preprocessing",
      "Feature Extraction",
      "Machine Learning",
      "SQL",
    ],
    github:
      "https://github.com/ADITI9981/Latent-Emotion-Detection",
  },
];

const education = [
  {
    level: "BACHELOR'S DEGREE",
    title: "B.Tech — Information Technology",
    institution: "Acropolis Institute of Technology and Research",
    result: "CGPA 8.25 / 10",
    year: "2022-2026",
  },
  {
    level: "HIGHER SECONDARY",
    title: "Class XII",
    institution: "The New Green field Academy Indore",
    result: "85%",
    year: "2020-2021",
  },
  {
    level: "SECONDARY",
    title: "Class X",
    institution: "The New Green field Academy Indore",
    result: "91%",
    year: "2018-2019",
  },
];


const certifications = [
  {
    title: "Agentforce Specialist",
    issuer: "Salesforce",
    date: "April 06, 2025",
    credentialId: "5995090",
    url: "https://drive.google.com/file/d/17BBYtxhgBZDET9wKNIZTp_feSeevidLy/view?usp=drivesdk",
    skills: [
      "Salesforce",
      "Agentforce",
      "Artificial Intelligence",
      "Generative AI",
      "CRM",
    ],
    description:
      "Certified Agentforce Specialist with knowledge of Salesforce Agentforce and AI-powered capabilities for building and working with intelligent agents.",
  },
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "April 26, 2026",
    credentialId: "160151f8d23c46aea6c3bbd6631e5a93",
    expirationDate: "April 26, 2029",
    url: "https://drive.google.com/file/d/14skC_3J7H94JiHRWBVVGAWzHg3rZYLF0/view?usp=drivesdk",
    skills: [
      "Machine Learning",
      "AWS",
      "Amazon SageMaker",
      "Artificial Intelligence",
      "Machine Learning Engineering",
    ],
    description:
      "Demonstrates knowledge and skills in implementing machine learning workloads using AWS services.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "April 12, 2026",
    credentialId: "1bcbe64fe3354e62a177af4578f76a9e",
    expirationDate: "April 12, 2029",
    url: "https://drive.google.com/file/d/10dPTxC04HY5EOf7iqVw-MhjOND4cpznd/view?usp=drivesdk",
    skills: [
      "AWS",
      "Cloud Computing",
      "Amazon Web Services",
      "Cloud Infrastructure",
    ],
    description:
      "Demonstrates foundational knowledge of AWS Cloud concepts, services, security, architecture, and pricing.",
  },
  {
    title: "AI Associate",
    issuer: "Salesforce",
    date: "December 15, 2024",
    credentialId: "5455163",
    url: "https://drive.google.com/file/d/1beJdK5tKf50i2hiOTJzT_O6jIYQPdigk/view?usp=drivesdk",
    skills: [
      "Artificial Intelligence",
      "Salesforce",
      "Generative AI",
      "CRM",
      "AI Fundamentals",
    ],
    description:
      "Demonstrates foundational knowledge of artificial intelligence and its applications within the Salesforce ecosystem.",
  },
];




const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Building intelligent systems and predictive models.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
    ],
    github: "https://github.com/ADITI9981/Machine-Learning",
    repositories: [
      {
        name: "Machine Learning",
        url: "https://github.com/ADITI9981/Machine-Learning",
      },
      {
        name: "Deep Learning",
        url: "https://github.com/ADITI9981/Deep_Learning",
      },
      {
        name: "Computer Vision",
        url: "https://github.com/ADITI9981/Advanced-Computer-Vision",
      },
      {
        name: "Hands-On ML Projects",
        url: "https://github.com/ADITI9981/Hands-On-ML-Projects",
      },
    ],
  },
  
{
  title: "Programming & Backend",
  icon: "Code2",
  description: "Problem-solving, object-oriented programming, and backend development.",
  skills: [
    "Python",
    "FastAPI",
    "Git & GitHub",
    "Data Structures & Algorithms",
    "OOPM",
  ],
  github: "https://github.com/ADITI9981",
  repositories: [
    {
      name: "Striver A2Z DSA",
      url: "https://github.com/ADITI9981/Striver_A2Z_DSA",
    },
    {
      name: "OOPM",
      url: "https://github.com/ADITI9981/oopm",
    },
  ],
},


  {
    title: "Data Engineering",
    icon: "Database",
    description: "Working with data pipelines, processing, and storage.",
    skills: [
      "Apache Spark SQL",
      "Azure Data Factory",
      "Data Warehousing",
    ],
    github: "https://github.com/ADITI9981",
    repositories: [
      {
        name: "Azure Data Factory",
        url: "https://github.com/ADITI9981/Azure_Data_Factory",
      },
      {
        name: "Spark SQL",
        url: "https://github.com/ADITI9981/SPARK_SQL",
      },
      {
        name: "MongoDB",
        url: "https://github.com/ADITI9981/NOSQL-MONGODB",
      },
      {
        name: "Data Warehouse",
        url: "https://github.com/ADITI9981/DATA_WAREHOUSE",
      },
    ],
  },
  
{
  title: "Databases & DBMS",
  icon: "Database",
  description: "Relational database concepts, query optimization, and data management.",
  skills: [
    "DBMS",
    "SQL",
    "T-SQL",
    "PostgreSQL",
    "MongoDB",
  ],
  github: "https://github.com/ADITI9981/DBMS-SQL",
  repositories: [
    {
      name: "DBMS & SQL",
      url: "https://github.com/ADITI9981/DBMS-SQL",
    },
    {
      name: "T-SQL",
      url: "https://github.com/ADITI9981/T-SQL",
    },
    {
      name: "LeetCode Database Problems",
      url: "https://github.com/ADITI9981/LeetCode-Database-Problems",
    },
    {
      name: "MongoDB & NoSQL",
      url: "https://github.com/ADITI9981/NOSQL-MONGODB",
    },
  ],
},

  {
    title: "Data Analytics & BI",
    icon: "ChartNoAxesCombined",
    description: "Turning raw data into useful insights and visualizations.",
    skills: [
      "Pandas",
      "Power BI",
      "Tableau",
    ],
    github: "https://github.com/ADITI9981",
    repositories: [
      {
        name: "Power BI",
        url: "https://github.com/ADITI9981/Power-Bi",
      },
      {
        name: "Tableau",
        url: "https://github.com/ADITI9981/Tableau",
      },
      {
        name: "Pandas Practice",
        url: "https://github.com/ADITI9981/Introduction_To_Pandas-LEETCODE-",
      },
    ],
  },
];


export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise-overlay" />

      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand-mark">A.</span>
          <span>ADITI YADAV</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="availability" href="#contact">
          <span className="status-dot" />
          Open to opportunities
        </a>
      </header>

      <section id="home" className="hero section-wrap">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <Sparkles size={14} />
            <span>PORTFOLIO · 2026</span>
          </div>

          <p className="hero-intro">Hello, I&apos;m Aditi Yadav.</p>

          
            
<h1>
  Exploring
  <br />
  <span className="gradient-text">the unknown.</span>
  <br />
  <span className="outline-text">Engineering</span>
  <br />
  <span className="gradient-text">the possible.</span>
</h1>

         

          

<p className="hero-description">
  Python Development · Backend Engineering · AI/ML · Data Science & Analytics
</p>

<p className="hero-description">
  I turn curiosity into code, complex problems into solutions, and ideas
  into practical applications. I enjoy building software, exploring
  intelligent systems, and creating technology that solves real-world
  problems.
</p>



         
<div className="hero-actions">
  <a className="button-primary" href="#projects">
    Explore my work <ArrowDownRight size={17} />
  </a>

  <a
    className="button-secondary"
    href="https://github.com/ADITI9981"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Code2 size={17} /> GitHub Profile <ArrowUpRight size={16} />
  </a>
</div>


          <div className="hero-socials">
            <a
              href="https://github.com/ADITI9981"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={17} />
            </a>
            <a
              href="https://linkedin.com/in/aditi-yadav9981"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Link size={17} />
            </a>
            <span className="social-divider" />
            <span>INDIA · AVAILABLE FOR ROLES</span>
          </div>
        </motion.div>

       
<motion.div
  className="hero-visual hero-photo-visual"
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <div className="hero-photo-glow" />

  <div className="hero-photo-frame">
    <Image
      src="/images/aditi.jpg"
      alt="Aditi Yadav"
      fill
      priority
      sizes="(max-width: 768px) 78vw, 420px"
      className="hero-photo"
    />
  </div>

  <div className="float-card float-card-top">
    <span className="mini-icon">✳</span>
    <div>
      <strong>Curious mind</strong>
      <span>Always exploring</span>
    </div>
  </div>

  <div className="float-card float-card-bottom">
    <span className="mini-icon purple-icon">↗</span>
    <div>
      <strong>Ideas to impact</strong>
      <span>One project at a time</span>
    </div>
  </div>

  <span className="hero-photo-caption">
    BUILDING WHAT'S NEXT
  </span>

  <span className="visual-coordinate coordinate-two">
    AI / DATA / CODE
  </span>
</motion.div>


        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </a>

      </section>

      <div className="ticker" aria-label="Areas of interest">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-group" key={index}>
              <span>ARTIFICIAL INTELLIGENCE</span><i>✳</i>
              <span>DATA SCIENCE</span><i>✳</i>
              <span>SOFTWARE ENGINEERING</span><i>✳</i>
              <span>CREATIVE PROBLEM SOLVING</span><i>✳</i>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="content-section section-wrap">
        <div className="section-heading">
          <span className="section-index">01 / ABOUT</span>
          <span className="section-line" />
          <span className="section-note">A little about my world</span>
        </div>

               <div className="about-grid">
          <div className="about-heading">
            <h2>
              Curiosity is
              <br />
              where everything
              <br />
              <span className="gradient-text">begins.</span>
            </h2>

            <div className="about-mini-note">
              <span className="about-note-dot" />
              CURIOUS BY NATURE · BUILDER BY PRACTICE
            </div>
          </div>

          <div className="about-copy">
            <p>
              I&apos;m an Information Technology graduate who enjoys looking
              beyond the obvious—finding patterns in data, understanding how
              systems work, and turning ideas into useful applications.
            </p>

            <p>
              From machine learning experiments to backend services, I&apos;m
              building practical experience one challenge at a time. I value
              learning by doing, asking better questions, and making things
              work in the real world.
            </p>

            <a
              className="text-link"
              href="https://github.com/ADITI9981"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub <ArrowUpRight size={16} />
            </a>

            <div className="about-highlights">
              <div className="about-highlight">
                <span className="highlight-number">01</span>
                <div>
                  <h3>Think deeply</h3>
                  <p>Understand the problem before building the solution.</p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">02</span>
                <div>
                  <h3>Build practically</h3>
                  <p>Turn concepts into projects and working applications.</p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">03</span>
                <div>
                  <h3>Keep evolving</h3>
                  <p>Learn new tools and improve through experimentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section section-wrap">
        <div className="section-heading">
          <span className="section-index">02 / EXPERTISE</span>
          <span className="section-line" />
          <span className="section-note">Tools in my toolkit</span>
        </div>

        <div className="skills-intro">
          <h2>
            Built on logic.
            <br />
            <span className="muted-heading">Driven by curiosity.</span>
          </h2>
          <p>
            A growing toolkit for working with data, building applications,
            and solving meaningful problems.
          </p>
        </div>

        

<div className="skill-grid">
  {skillCategories
    .flatMap((category) =>
      category.skills.map((skill) => {
        const repo = category.repositories.find((repository) => {
          const name = repository.name.toLowerCase();
          const value = skill.toLowerCase();

          if (value === "data structures & algorithms")
            return name === "striver a2z dsa";
          if (value === "oopm") return name === "oopm";
          if (value === "computer vision")
            return name === "computer vision";
          if (value === "deep learning")
            return name === "deep learning";
          if (value === "machine learning")
            return name === "machine learning";
          if (value === "sql" || value === "dbms")
            return name === "dbms & sql";
          if (value === "t-sql") return name === "t-sql";
          if (value === "mongodb")
            return name === "mongodb & nosql";
          if (value === "azure data factory")
            return name === "azure data factory";
          if (value === "apache spark sql")
            return name === "spark sql";
          if (value === "data warehousing")
            return name === "data warehouse";
          if (value === "power bi") return name === "power bi";
          if (value === "tableau") return name === "tableau";
          if (value === "pandas") return name === "pandas practice";
          if (value === "scikit-learn")
            return name === "machine learning";
          if (value === "generative ai")
            return name === "hands-on ml projects";

          return false;
        });

        const content = (
          <>
            <span className="skill-number">
              {String(
                skillCategories
                  .flatMap((item) => item.skills)
                  .indexOf(skill) + 1,
              ).padStart(2, "0")}
            </span>

            <span className="skill-name">{skill}</span>

            {repo && (
              <span className="skill-link-label">
                <Code2 size={13} />
                <span>VIEW REPO</span>
              </span>
            )}

            <ArrowUpRight size={16} className="skill-arrow" />
          </>
        );

        return (
          <motion.div
            className={`skill-card ${repo ? "has-repo" : ""}`}
            key={skill}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            {repo ? (
              <a
                className="skill-card-link"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${skill} repository on GitHub`}
              >
                {content}
              </a>
            ) : (
              <div className="skill-card-content">{content}</div>
            )}
          </motion.div>
        );
      }),
    )}
</div>


      </section>

      <section id="projects" className="content-section section-wrap">
        <div className="section-heading">
          <span className="section-index">03 / SELECTED WORK</span>
          <span className="section-line" />
          <span className="section-note">Ideas made tangible</span>
        </div>

        <div className="projects-title-row">
          <h2>
            A few things
            <br />
            <span className="gradient-text">I&apos;ve explored.</span>
          </h2>
          <span className="project-count">03 PROJECTS / EXPLORATIONS</span>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
<span className="project-number">{project.number}</span>

<div className="project-main">
  <span className="project-category">{project.category}</span>

  <h3 className="project-title">{project.title}</h3>

  {project.subtitle && (
    <p className="project-subtitle">{project.subtitle}</p>
  )}

  <p className="project-description">{project.description}</p>

  <div className="project-stack">
    {project.stack.map((technology) => (
      <span className="project-tag" key={technology}>
        {technology}
      </span>
    ))}
  </div>
</div>

<a
  className="project-arrow"
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`View ${project.title} on GitHub`}
>
  <ArrowUpRight size={22} />
</a>

            </motion.article>
          ))}
        </div>

        <a
          className="all-projects-link"
          href="https://github.com/ADIT19981"
          target="_blank"
          rel="noreferrer"
        >
          More experiments on GitHub <ArrowUpRight size={16} />
        </a>
      </section>
      
<section id="education" className="content-section section-wrap">
  <div className="section-heading">
    <span className="section-index">04 / EDUCATION</span>
    <span className="section-line" />
    <span className="section-note">The foundation</span>
  </div>

  <div className="projects-title-row">
    <h2>
      The path
      <br />
      <span className="gradient-text">that shaped me.</span>
    </h2>
  </div>

  <div className="education-list">
    {education.map((item, index) => (
      <motion.article
        className="education-card"
        key={item.level}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
      >
        <span className="education-index">
          0{index + 1}
        </span>

        <div className="education-main">
          <span className="project-category">
            {item.level}
          </span>
          <h3>{item.title}</h3>
          <p>{item.institution}</p>
        </div>

        <div className="education-result">
          <strong>{item.result}</strong>
          {item.year && <span>{item.year}</span>}
        </div>
      </motion.article>
    ))}
  </div>
</section>


<section
  id="certifications"
  className="content-section section-wrap"
>
  <div className="section-heading">
    <span className="section-index">05 / CERTIFICATIONS</span>
    <span className="section-line" />
    <span className="section-note">
      Credentials & continuous learning
    </span>
  </div>

  <div className="projects-title-row">
    <h2>
      Proof of <br />
      <span className="gradient-text">curiosity.</span>
    </h2>
    <span className="project-count">
      {String(certifications.length).padStart(2, "0")} CREDENTIALS
    </span>
  </div>

  <div className="cert-grid">
    {certifications.map((cert, index) => (
      <motion.article
        className="cert-card"
        key={cert.credentialId}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
      >
        <div className="cert-card-top">
          <span className="cert-index">
            CERT. {String(index + 1).padStart(2, "0")}
          </span>
          <span className="cert-type">
            PROFESSIONAL CERTIFICATION
          </span>
        </div>

        <h3>{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>

        <div className="cert-details">
          <div className="cert-detail">
            <span>ISSUED</span>
            <p>{cert.date}</p>
          </div>

          {cert.expirationDate && (
            <div className="cert-detail">
              <span>EXPIRES</span>
              <p>{cert.expirationDate}</p>
            </div>
          )}

          <div className="cert-detail cert-id">
            <span>CREDENTIAL ID</span>
            <p>{cert.credentialId}</p>
          </div>
        </div>

        <p className="cert-description">{cert.description}</p>

        <div className="cert-skills">
          {cert.skills.map((skill) => (
            <span className="cert-skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <a
          className="cert-verify"
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VERIFY CREDENTIAL
          <ArrowUpRight size={16} />
        </a>
      </motion.article>
    ))}
  </div>
</section>



      <section className="statement-section">
        <div className="statement-orb" />
        <span className="section-index">A NOTE TO THE FUTURE</span>
        <h2>
          The universe is full of patterns.
          <br />
          <span className="gradient-text">I want to understand them.</span>
        </h2>
        <p>Learning. Building. Becoming.</p>
      </section>

      <section id="contact" className="content-section contact-section section-wrap">
        <div className="section-heading">
          <span className="section-index">04 / CONTACT</span>
          <span className="section-line" />
          <span className="section-note">The next chapter</span>
        </div>

        <h2>
          Have something
          <br />
          <span className="gradient-text">interesting in mind?</span>
        </h2>
        <p className="contact-description">
          I&apos;m open to entry-level opportunities and collaborations in
          AI/ML, data analytics, Python development, and backend engineering.
        </p>

        <a className="button-primary contact-button" href="mailto:aditiyadav6651@gmail.com">
          <Mail size={17} /> Say hello <ArrowUpRight size={17} />
        </a>

        <div className="contact-links">
          <a href="mailto:aditiyadav6651@gmail.com">EMAIL</a>
          <a href="https://github.com/ADITI9981" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://linkedin.com/in/aditi-yadav9981" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://leetcode.com/u/Aditi_Yadav9981/" target="_blank"rel="noopener noreferrer">LEETCODE</a>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">A.</span>
          <span>ADITI YADAV</span>
        </a>
        <span>DESIGNED WITH CURIOSITY · © 2026</span>
        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}
