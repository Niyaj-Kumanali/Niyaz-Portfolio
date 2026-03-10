export const MYINFO = {
    FIRST_NAME: "NIYAZ",
    LAST_NAME: "KUMANALI",
    FULL_NAME: "NIYAZ KUMANALI",
    EMAIL: "niyajkumanali@gmail.com",
    PHONE: "+91 82170 97121",
    ADDRESS: "Bengaluru, India",
    GITHUB: "https://github.com/niyaj-kumanali",
    LINKEDIN: "https://linkedin.com/in/niyaj-kumanali",
    LOCATION_URL: "https://www.google.com/maps/search/?api=1&query=Bengaluru,+India",
};

export const SKILLS_DATA = [
    {
        title: "BACKEND & FRAMEWORKS",
        color: "#20B2AA",
        items: ["Spring Boot", "Spring Data", "Spring Cloud", "Spring Security", "Hibernate", "JDBC", "ASP.NET Web API"],
        gridColumn: { xs: "span 1", md: "span 2" }
    },
    {
        title: "LANGUAGES",
        color: "#9370DB",
        items: ["Java", "C#", "TypeScript", "JavaScript", "Python"],
        gridColumn: "span 1"
    },
    {
        title: "SPECIALIZATIONS",
        color: "#FF7F50",
        items: ["Microservices", "Real-time & Event-Driven Systems", "ETL & Data Pipelines", "Stream Processing", "Database Optimization", "API Design", "Caching"],
        gridColumn: { xs: "span 1", md: "span 1" }
    },
    {
        title: "DATABASES",
        color: "#6495ED",
        items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "Oracle SQL", "InfluxDB", "Redis"],
        gridColumn: "span 1"
    },
    {
        title: "MESSAGING & TOOLS",
        color: "#FF69B4",
        items: ["Apache Kafka", "MQTT", "RabbitMQ", "Databricks", "Apache Superset", "Grafana", "Microsoft Fabric"],
        gridColumn: { xs: "span 1", md: "span 2" }
    },
    {
        title: "CLOUD & DEVOPS",
        color: "#F0E68C",
        items: ["AWS", "Jenkins (CI/CD)", "Docker", "Git"],
        gridColumn: "span 1"
    },
    {
        title: "FRONTEND & UI",
        color: "#00CED1",
        items: ["HTML", "CSS/SCSS", "React"],
        gridColumn: "span 1"
    }
];

export const EXPERIENCE_DATA = [
    {
        role: "Software Engineer",
        company: "Talentpace Pvt Ltd",
        location: "Bengaluru, India",
        period: "NOV 2023 – PRESENT",
        highlights: [
            "Reduced inventory discrepancies by ~80% for Lenovo India by deploying automated partner serial-level validation workflows.",
            "Optimized CDMS data pipelines for 10k+ devices, increasing processing throughput by ~60% across the global sales lifecycle.",
            "Architected a real-time IoT cold-chain monitoring ecosystem, integrating ML-driven alerts to boost operational efficiency by ~30%."
        ]
    }
];

export const PROJECTS_DATA = [
    {
        title: "Partner Inventory Management",
        role: "Real-time Architecture @ Lenovo India",
        description: "Centralized real-time validation for 10k+ serials across 200+ partners, slashing manual reconciliation by ~70% with <15s latency.",
        image: "/assets/projects/T2INV.png",
        tags: ["SQL SERVER", "ASP.NET", "REACT", "C#"],
        specs: { label: "Outcome", value: "~80% Accuracy Increase" }
    },
    {
        title: "CDMS Platform",
        role: "Data Workflows @ Lenovo India",
        description: "Modernized data workflows for 10k+ devices across 5+ lifecycle stages, boosting throughput by ~60% and ensuring global data integrity.",
        image: "/assets/projects/CDMS.png",
        tags: ["SQL SERVER", "ASP.NET", "SSIS"],
        specs: { label: "Impact", value: "~60% Throughput Gain" }
    },
    {
        title: "IoT Cold-Chain Monitoring",
        role: "Microservices @ UrjaLinks",
        description: "Scaled microservices for 100+ IoT devices, preventing temperature excursions by ~85% through ML-driven predictive monitoring.",
        image: "/assets/projects/COLDCHAIN.png",
        tags: ["SPRING BOOT", "KAFKA", "MQTT", "AWS", "INFLUXDB", "POSTGRESQL"],
        specs: { label: "Alerting", value: "~85% Excursion Reduction" }
    }
];

export const EDUCATION_DATA = [
    {
        degree: "BE | COMPUTER SCIENCE",
        institution: "VSM's Somashekhar R. Kothiwale Institute of Technology",
        period: "JUN 2019 – MAY 2023",
        location: "Belagavi, India"
    }
];

export const CERTIFICATIONS_DATA = [
    {
        title: "Data Engineering using Databricks on AWS and Azure",
        issuer: "Udemy",
        period: "Oct 2024 – Dec 2024"
    },
    {
        title: "Jenkins: Jobs, Pipelines, CI/CD and DevOps for Beginners",
        issuer: "Udemy",
        period: "Jul 2024 – Aug 2024"
    },
    {
        title: "Java Full Stack Development",
        issuer: "JSpiders",
        period: "Jul 2023 – Dec 2023"
    },
    {
        title: "Java with DSA and System Design",
        issuer: "PWSkills",
        period: "Jan 2023 – Sep 2023"
    },
    {
        title: "The Complete 2023 Web Development Bootcamp",
        issuer: "Udemy",
        period: "Apr 2023 – Jun 2023"
    }
];