import { eaaa, easv, ubix, threejs, mysql, php, glsl } from "../assets/images";
import {
    plane,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    react,
    sass,
    tailwindcss,
    typescript,
    chat,
    game,
    watch

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: glsl,
        name: "OpenGL Shading Language",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Multimedia Designer",
        company_name: "Erhvervsakademi Sydvest",
        icon: easv,
        iconBg: "#accbe1",
        date: "Aug 2021 - Jun 2023",
        points: [
            "Acquired a deep understanding of design and UX principles through a comprehensive study program.",
            "Developed proficiency in HTML, CSS, and JavaScript, laying the foundation for web development skills.",
            "Gained hands-on experience with React.js, enhancing the ability to build dynamic and interactive user interfaces.",
            "Applied acquired skills to contribute to advertising campaigns, ensuring the creation of captivating user experiences."
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Ubix GmbH",
        icon: ubix,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - Aug 2023",
        points: [
            "Conducted user research to inform and enhance the design process, ensuring user-centric solutions.",
            "Contributed to the development of frontend solutions, leveraging Angular and TypeScript to create interactive and responsive web applications.",
            "Applied Scrum methodologies, gaining valuable real-world experience in agile project management.",
            "Participated in collaborative workflows, working closely with cross-functional teams to achieve project goals.",
            "Enhanced problem-solving abilities through hands-on experience in resolving frontend development challenges.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Erhvervsakademi Aarhus",
        icon: eaaa,
        iconBg: "#b7e4c7",
        date: "Aug 2023 - Jan 2024",
        points: [
            "Currently studying how to create full stack web applications.",
            "Learning React.js for building dynamic and interactive user interfaces.",
            "Acquiring skills in MySQL for database management.",
            "Exploring PHP for backend development to handle server-side logic.",
            "Engaging in group projects to apply knowledge and collaborate effectively.",
            "Gaining proficiency in using Git for version control in larger coding projects."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Noahpetersen',
    }
];

export const projects = [
    {
        iconUrl: watch,
        theme: 'btn-back-red',
        name: '3D Watch Configurator',
        description: 'Developed a web application that allows users to customize and visualize a 3D watch model in real-time.',
        link: 'https://watch-configurator-kappa.vercel.app',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-green',
        name: 'Full Stack Chatbot',
        description: 'Created a full-stack chatbot with authentication, running with php and mysql, allowing users to communicate with a bot in a chatroom.',
        link: 'https://github.com/Noahpetersen/chatbot-with-database',
    },
    {
        iconUrl: plane,
        theme: 'btn-back-blue',
        name: 'Plane Scrollytelling Experience',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://plane-scrollytelling.vercel.app',
    },
    {
        iconUrl: game,
        theme: 'btn-back-pink',
        name: '3D Webbased Game',
        description: 'Built a little webbased game utilizing three.js and react-three-fiber. The game aimed to thoroughly internalize all the techniques and principles I had acquired.',
        link: 'https://3d-game-five.vercel.app',
    },
];