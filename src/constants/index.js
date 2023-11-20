import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    soti,
    greybox,
    ldss,
    bitcoinpricepredictor,
    crowdwrap,
    astarvisualizer,
    threejs,
    csharp,
    django,
    python,
    java,
    scikitlearn,
    nextjs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack",
      icon: web,
    },
    {
      title: "Big Data",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    }
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  const languages = [
    {
      name: "Python",
      icon: python,
    },   
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java,
    },   
    {
      name: "C#",
      icon: csharp,
    },   
  ]
  const technologies = [
    {
      name: "Django",
      icon: django,
    },      
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    }, 
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "scikitlearn",
      icon: scikitlearn
    }
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "SOTI Research Innovation Lab",
      icon: soti,
      iconBg: "#383E56",
      date: "January 2022 - December 2022",
      points: [
        "Enhanced device registry throughput by 90% and reduced dropped critical logs by implementing a string-based serializer in C#, enabling efficient multi-device management.",
        "Engineered a dynamic API tracker in Python, curtailing code maintenance and API calls by 20%, thus boosting system performance and reducing developer maintenance hours.",
        "Attained a 0% virtual machine crash rate using a dynamic auto-cleanup step in virtual machine installer.",
        "Elevated testing suite success rate comprising 900 tests by 6%, by migrating fragile tests to more robust tests.",
        "Slashed software testing runtime by 50% by orchestrating a novel parallelism based implementation."
      ],
    },
    {
      title: "Java Developer Intern",
      company_name: "Grey-Box",
      icon: greybox,
      iconBg: "#E6DEDD",
      date: "January 2021 - June 2012",
      points: [
        "Developed a Java and AJAX backend for real-time data packet transfer through product captive portal.",
        "Led a team of 3 interns to build an all-encompassing “web cloner” using Python and Beautiful Soup that provides a clean online experience to impoverished kids without internet access in developing nations",
        "Designed a localized SQLite database for offline access using an optimized schema for efficient data storage.",
      ],
    },
    {
      title: "Co-President and Workshop Leader",
      company_name: "Laurier Data Science Society",
      icon: ldss,
      iconBg: "#383E56",
      date: "January 2019 - April 2020",
      points: [
        "Pioneered and nurtured a thriving community of 120+ individuals, creating one of ten largest student organizations at Wilfrid Laurier University.",
        "Established and led an executive team to meet the growing demand for top-tier data-focused sessions.",
        "Planned and instructed numerous collaborative data science workshops, fostering skill development among over 60 attendees.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bitcoin LSTM Price Predictor",
      description:
        "Machine learning model employing a Long Short-Term Memory network to intake historical data from the Bitfinex API to predict future Bitcoin prices.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "black-text-gradient",
        },
        {
          name: "jupyter notebooks",
          color: "orange-text-gradient",
        },
      ],
      image: bitcoinpricepredictor,
      source_code_link: "https://github.com/qadeersan/BTCUSD-LSTMModel-Predictor",
    },
    {
      name: "A* Pathfinding Visualizer",
      description:
        "Full-stack web application that allows the user to select start, end and barrier points to then visualize the A* algorithm finding the shortest path.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "black-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
      ],
      image: astarvisualizer,
      source_code_link: "https://github.com/qadeersan/A-Star-Pathfinding-Visualizer",
    },
    {
      name: "CrowdWrap",
      description:
        "Full-stack web application aiming to streamline collaborative gift giving and fund pooling, developed as part of a cross-functional team of 4 engineers, designer, & 3 product managers in an Agile work flow.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "purple-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: crowdwrap,
      source_code_link: "https://github.com/crowdWrap/crowd-wrap",
    },
  ];
  
  export { languages, services, technologies, experiences, testimonials, projects };