"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail, Linkedin, Code, Database, Brain, Globe, GraduationCap, Award, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
const projects = [
  {
    title: "Illinois.Chat — University AI Assistant",
    blurb:
      "Founding member of the university's AI-powered assistant serving 10k+ users. Built multimodal assistant with file ingestion, web search, vector retrieval, and n8n agentic workflows.",
    tech: ["Next.js", "Flask", "Qdrant", "Supabase", "OpenAI", "AWS S3", "LangChain", "TypeScript"],
    demo: "https://uiuc.chat/",
    repo: "https://github.com/Center-for-AI-Innovation/uiuc-chat-frontend",
    highlight: "10k+ users, multimodal AI responses"
  },
  {
    title: "Batchbot — LLM Chatbot",
    blurb:
      "An AI-powered chatbot built with Next.js and OpenAI. The model analyzes images and provides contextual, intelligent responses in real-time.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "LLM", "Multimodal AI"],
    demo: "https://batchbot-q2337jzxu-shikhar-mattoos-projects.vercel.app/",
    repo: "https://github.com/shikhar-jan16/batchbot",
    highlight: "Real-time AI responses"
  },
  {
    title: "Yelp Dataset Analysis",
    blurb:
      "Analyzed over 6M Yelp reviews and business metadata using Python and SQL to uncover trends and patterns. Built ETL pipelines to transform raw JSON into MySQL, enabling structured queries, sentiment analysis, and category-level insights.",
    tech: ["Python", "SQL", "MySQL", "ETL", "Data Analysis"],
    repo: "https://github.com/shikhar-jan16/yelp-data-insights",
    highlight: "6M+ reviews analyzed"
  },
  {
    title: "Face Mask Detection Using MobileNet",
    blurb:
      "Created an efficient real-time face mask detection tool using MobileNet and advanced computer vision methods. Research paper published on the implementation.",
    tech: ["Python", "MobileNet", "Computer Vision", "TensorFlow"],
    highlight: "Real-time detection system",
    paper: "http://www.ijcaonline.org/archives/volume183/number13/31989-2021921445 ",
  },
];

const workExperience = [
  {
    company: "University of Illinois Urbana-Champaign",
    role: "Innovation Researcher",
    period: "September 2025 - Present",
    location: "Illinois, United States",
    achievements: [
      "Working on research projects focused on innovation, agentic AI, and AI applications",
      "Contributing to experiment design and data analysis for AI-driven solutions",
      "Improving learning, teaching, and operational effectiveness through AI research",
      "Developing innovative approaches to educational technology and institutional operations"
    ]
  },
  {
    company: "National Center for Supercomputing Applications - UIUC",
    role: "AI Developer",
    period: "June 2025 - August 2025",
    location: "Illinois, United States",
    achievements: [
      "Founding member of Illinois.Chat initiative serving 10,000+ students and faculty",
      "Improved query resolution coverage by 40% with EXA API integration",
      "Reduced manual scheduling time by 80% with n8n agentic workflows",
      "Built multimodal chatbot with OpenAI, LLaMA, LangChain, and HuggingFace"
    ]
  },
  {
    company: "Infosys Ltd",
    role: "Associate .NET Developer",
    period: "May 2023 - July 2024",
    location: "India",
    achievements: [
      "Led team of 5 developers in Agile/Scrum environment",
      "Enhanced data processing speeds by 30% through robust architecture",
      "Reduced query latency by 30% with SQL Server optimizations",
      "Managed Azure pipelines for CI/CD processes"
    ]
  },
  {
    company: "Infosys Ltd",
    role: ".NET Developer",
    period: "Nov 2021 - May 2023",
    location: "India",
    achievements: [
      "Reduced deployment time by 80% with Jenkins CI/CD automation",
      "Improved data accuracy by 40% with middleware API integration",
      "Modernized legacy VB6 system to ASP.NET Core",
      "Built responsive Windows desktop application with .NET Core"
    ]
  }
];

const skills = [
  { 
    category: "Languages", 
    icon: Code, 
    items: ["C#", "Python", "JavaScript/TypeScript", "Java", "C++", "MATLAB"] 
  },
  { 
    category: "Frontend", 
    icon: Globe, 
    items: ["Next.js", "React", "Blazor", "WPF", "Windows SDK"] 
  },
  { 
    category: "Backend & APIs", 
    icon: Database, 
    items: [".NET Core", "Flask", "Node.js", "Entity Framework", "REST APIs"] 
  },
  { 
    category: "AI/ML & Data", 
    icon: Brain, 
    items: ["OpenAI API", "LangChain", "HuggingFace", "Qdrant", "Computer Vision"] 
  },
  { 
    category: "Databases", 
    icon: Database, 
    items: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL", "Redis"] 
  },
  { 
    category: "DevOps & Cloud", 
    icon: Globe, 
    items: ["Azure Pipelines", "Jenkins", "Docker", "AWS S3", "Vercel"] 
  }
];

const education = [
  {
    degree: "Master of Science in Technology Management",
    school: "University of Illinois Urbana-Champaign",
    period: "Aug 2024 - Aug 2025",
    gpa: "3.8/4.0"
  },
  {
    degree: "Master of Computer Application",
    school: "Amity University",
    period: "Jul 2021 - June 2023",
    gpa: "3.17/4.0"
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Guru Gobind Singh Indraprastha University",
    period: "Jul 2018 - Jun 2021",
    gpa: "3.27/4.0"
  }
];

const certifications = [
  {
    name: "Microsoft Azure AZ-900 Certified (2021)",
    url: "https://www.credly.com/badges/96ca733e-3481-4025-9804-489babda0c57/linked_in_profile" // Replace with your actual badge URL
  },
  {
    name: "Microsoft Azure AZ-104 Certified (2022)", 
    url: "https://www.credly.com/badges/6a09ecd7-c50d-4b55-b526-bfa3f6709bab/linked_in_profile" // Replace with your actual badge URL
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shikhar Mattoo</h1>
          <nav className="hidden md:flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#experience">Experience</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#skills">Skills</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#education">Education</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </nav>
          <ThemeToggle />
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Software Developer
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experienced software developer specializing in AI/ML applications, full-stack development, .NET development, and cloud solutions. 
              with 3+ years of professional experience.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:smattoo2@illinois.edu">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>
            
            {/* Quick Contact Info */}
            <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                smattoo2@illinois.edu
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (217) 390-4980
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I&apos;m a passionate AI Developer and Software Engineer with over 3 years of professional experience 
                  building scalable applications and intelligent systems. I specialize in creating AI-powered solutions that serve thousands of users.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  At NCSA-UIUC, I was a founding member of the Illinois.Chat initiative, building a multimodal AI 
                  assistant that now serves 10,000+ students and faculty. Previously at Infosys, I led development 
                  teams building enterprise .NET applications, managing Azure pipelines, and architecting scalable 
                  solutions for Market and Counterparty Risk systems.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey spans from .NET enterprise development to cutting-edge AI/ML applications, leveraging 
                  technologies like LLMs, vector databases, and cloud platforms to create meaningful impact through technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Work Experience</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl">{job.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {job.company}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{job.period}</div>
                        <div>{job.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.highlight && (
                      <Badge variant="secondary" className="w-fit">
                        {project.highlight}
                      </Badge>
                    )}
                    <CardDescription className="text-sm leading-relaxed">
                      {project.blurb}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-4">
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.repo && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.paper && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.paper} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Paper
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-2 p-3 rounded-full bg-primary/10 w-fit">
                      <skillGroup.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Education & Certifications</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <div>
              <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h5 className="font-semibold text-lg">{edu.degree}</h5>
                            <p className="text-primary font-medium">{edu.school}</p>
                            <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {edu.period}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h4>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{cert.name}</span>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Let&apos;s Connect</h3>
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-8">
                  I&apos;m always interested in discussing new opportunities, collaborating on innovative projects, 
                  or exploring how AI and technology can solve real-world problems.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button size="lg" asChild>
                    <a href="mailto:smattoo2@illinois.edu">
                      <Mail className="w-5 h-5" />
                      Email Me
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://linkedin.com/in/shikhar-mattoo" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://github.com/shikhar-jan16" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>📧 smattoo2@illinois.edu</p>
                  <p>📱 +1 (217) 390-4980</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Shikhar Mattoo. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}