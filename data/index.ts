export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#testimonials" },
  { name: "Experiences", link: "#experience"},
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Expertise in AI and Machine Learning",
        description:
            "From research to deployment, specializing in speech recognition and air quality forecasting",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Proven track record of optimizing ML models",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Advanced Tech Stack",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Impactful AI/ML Projects",
        description:
            "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-center",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Award-Winning Developer",
        description:
            "Winner of Rakathon 2024 and finalist in multiple hackathons",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Get in touch",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 pt-12",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
]

export const projects = [
    {
        id: 1,
        title: "Slay: Smart Hyperpersonalised Apparel E-commerce",
        des: "Developed a swipe-based recommendation system with personalized suggestions based on user gestures and skin tone analysis.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "/slay.app",
    },
    {
        id: 2,
        title: "RAG-based Q&A Bot for Insurance Policies",
        des: "Improved RAG accuracy by 14% using semantic chunking, re-ranking, and Mistral LLM for insurance policy document analysis.",
        img: "/p2.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/stream.svg",
            "/c.svg",
        ],
        link: "/rag-bot.app",
    },
    {
        id: 3,
        title: "Sketch to HTML/CSS Converter",
        des: "Developed a converter using Vision transformer and GPT2, with Gemini API integration for code processing and explanation.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/sketch-converter.app",
    },
    {
        id: 4,
        title: "FitScore: Holistic Fitness Evaluation",
        des: "Created models to evaluate health vitals and determine fitness, including a menstrual cycle tracker and mental health chatbot.",
        img: "/p4.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/three.svg",
            "/gsap.svg",
        ],
        link: "/fitscore.app",
    },
]

export const testimonials = [
    {
        quote: "Rakathon is a 36-hour hackathon that challenges participants to build innovative solutions using cutting-edge technologies. Teams compete to solve real-world problems and showcase their technical skills.",
        name: "Rakathon 2024",
        title: "Winner",
    },
    {
        quote: "The Titan Wearable Hackathon focuses on developing innovative wearable technology solutions. Participants create prototypes that address various aspects of wearable tech, from fitness tracking to smart accessories.",
        name: "Titan Wearable Hackathon",
        title: "Runners Up",
    },
    {
        quote: "HackNITR is one of India's largest student-run hackathons, bringing together talented developers from across the country. It provides a platform for students to showcase their coding skills and innovative ideas.",
        name: "HackNITR",
        title: "Finalist (Top 20 Teams)",
    },
    {
        quote: "As President of Machine Learning for Everyone (ML4E) at NIT Rourkela, Aditya leads the official ML and DL community. The club collaborates with various domains to create industry-relevant projects.",
        name: "Machine Learning for Everyone (ML4E)",
        title: "President",
    },
    {
        quote: "HackNITR is India's biggest student-run hackathon, attracting participants from across the country. As a core team member, Aditya plays a crucial role in organizing and managing this large-scale event.",
        name: "HackNITR",
        title: "Core Team Member",
    },
]

export const extrac = [
    {
        quote: "President at Machine Learning for Everyone (ML4E), Rourkela, India.",
        name: "ML4E, NIT Rourkela",
        title: "President",
    },
    {
        quote: "Core Team Member at HackNITR, Rourkela, India.",
        name: "HackNITR",
        title: "Core Team, Organiser",
    },
    {
        quote: "HackNITR is one of India's largest student-run hackathons, bringing together talented developers from across the country. It provides a platform for students to showcase their coding skills and innovative ideas.",
        name: "HackNITR",
        title: "Finalist (Top 20 Teams)",
    },
    {
        quote: "As President of Machine Learning for Everyone (ML4E) at NIT Rourkela, Aditya leads the official ML and DL community. The club collaborates with various domains to create industry-relevant projects.",
        name: "Machine Learning for Everyone (ML4E)",
        title: "President",
    },
    {
        quote: "As a campus journalist, 15+ articles covering academia, editorials, podcasts and interviews with extraordinaire alumnus and respected professors",
        name: "Monday Morning",
        title: "Campus Journalist",
    },
]

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
    {
        id: 1,
        title: "ML Founding Engineer at SuperAI",
        desc: "Developed routing agents using LangChain and OpenRouter, improved accuracy from 60% to 98%.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Research Intern at IIT Delhi",
        desc: "Developed wake word detection for smartwatches, improved accuracy to 98.86% and reduced model size by 80%.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Data Scientist Intern at Aurassure",
        desc: "Developed predictive models for air quality forecasting and implemented machine learning algorithms.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Research Intern at NIT Tiruchirapalli",
        desc: "Studied machine learning concepts, implemented algorithms from scratch, and explored speech recognition.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
]

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        href: "https://github.com/adityathenerd",
    },
    {
        id: 2,
        img: "/link.svg",
        href: "https://www.linkedin.com/in/adityanpatro/",
    },
]
