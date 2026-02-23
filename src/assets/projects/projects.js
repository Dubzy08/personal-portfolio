import aeroFlight from './aero_flight.png';
import micromouse from './micromouse.jpg';
import weMessage from './weMessage.png';

export const Projects = [
    {
        id:1, 
        title:'AeroFlight', 
        image:aeroFlight, 
        desc:{
            en:'This is the description and should span on two lines otherwise will be cut to fit two line content. The user will be able to hover over it to see full text.',
            fr:'This is the description.'
        }, 
        skills:['Electron', 'JavaScript', 'RESTful', 'PostgreSQL', 'Docker', 'HTML', 'CSS', 'Client Interactions', 'UI Design', 'System Architecture'],
        demoLink:'#skills',
        codeLink:'#project',
    },
    {
        id:2,
        title:'weMessage',
        image:weMessage,
        desc:{
            en:'This is the description.',
            fr:'This is the description.',
        },
        skills:['React.js', 'MongoDB', 'Express.js', 'RESTful', 'Socket.io', 'Routing', 'Authentication', 'UI Desing', 'Security', 'JWT', 'Hashing', ],
        demoLink:'',
        codeLink:'',
    },
    {
        id:3,
        title:'MicroMouse',
        image:micromouse,
        desc:{
            en:'This is the description.',
            fr:'This is the description.',
        },
        skills:['C#', 'C++', 'MVVM', 'Management', 'System Archictecture', 'Pathfinding', 'Performance Optimization', 'Git', 'PID Controllers', 'Team Management', 'Event Driven Programming', 'Embedded Systems'],
        demoLink:'',
        codeLink:'',
    },
]
    