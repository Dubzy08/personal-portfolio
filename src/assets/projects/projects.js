import aeroFlight from './aero_flight.png';
import micromouse from './micromouse.jpg';
import weMessage from './weMessage.png';

export const Projects = [
    {
        id:1, 
        title:'AeroFlight', 
        image:aeroFlight, 
        desc:{
            en:'A drone flight planning tool built with Electron, leveraging RESTful APIs for live data analysis and real-time mission updates. It provides an interactive desktop interface for route optimization, monitoring, and dynamic decision-making.',
            fr:'Un outil de planification de vol pour drones développé avec Electron, utilisant des API RESTful pour l’analyse de données en temps réel et la mise à jour dynamique des missions. Il offre une interface interactive permettant l’optimisation des trajets et le suivi en direct.'
        }, 
        skills:['Electron', 'JavaScript', 'RESTful', 'PostgreSQL', 'Docker', 'HTML', 'CSS', 'Client Interactions', 'UI Design', 'System Architecture'],
        demoLink:'',
        codeLink:'',
    },
    {
        id:2,
        title:'weMessage',
        image:weMessage,
        desc:{
            en:'A real-time messaging application built with React for a fast, responsive user interface and MongoDB for scalable, reliable message storage. It features a clean component-based architecture and persistent chat history for seamless communication.',
            fr:'Une application de messagerie en temps réel développée avec React pour une interface rapide et réactive, et MongoDB pour un stockage des messages fiable et évolutif. Elle offre une architecture modulaire et un historique de conversations persistant pour une communication fluide.',
        },
        skills:['React.js', 'MongoDB', 'Express.js', 'RESTful', 'Socket.io', 'AWS', 'Routing', 'Authentication', 'UI Desing', 'Security', 'JWT', 'Hashing', ],
        demoLink:'https://main.d3gl6ac13rrn25.amplifyapp.com/',
        codeLink:'https://github.com/Dubzy08/weMessage',
    },
    {
        id:3,
        title:'MicroMouse',
        image:micromouse,
        desc:{
            en:'An autonomous Micromouse robot developed in C++ for embedded systems, featuring real-time sensor processing, pathfinding, and precise motion control. The project also includes a C# data analysis application for visualizing telemetry, tuning control algorithms, and optimizing performance.',
            fr:"Un robot Micromouse autonome développé en C++ embarqué, intégrant le traitement en temps réel des capteurs, des algorithmes de pathfinding et un contrôle précis des mouvements. Le projet comprend également une application d’analyse de données en C# permettant de visualiser la télémétrie, d’ajuster les contrôleurs et d’optimiser les performances.",
        },
        skills:['C#', 'C++', 'MVVM', 'Management', 'System Archictecture', 'Pathfinding', 'Performance Optimization', 'Git', 'PID Controllers', 'Team Management', 'Event Driven Programming', 'Embedded Systems'],
        demoLink:'',
        codeLink:'https://github.com/Dubzy08/techmice',
    },
]
    