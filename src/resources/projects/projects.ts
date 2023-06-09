import spaceImage from './project_images/spacex.jpg';
import portfolioKen from './project_images/ken.jpg';
import myCurrency from './project_images/myCurrency.jpg';
import mathImage from './project_images/math.jpg';
import todoImage from './project_images/to-do-list-mobile.jpg';
import yourCar from './project_images/yourCar.jpg';
import school from './project_images/school.jpg';
import myExpenses from './project_images/my-expenses.jpg';

const arrayOfProjects = [
    {
        name: "My expenses",
        description: "My expenses is a web application where you can create an user and track your expenses divided by category.",
        tools: ['Ruby', 'Rails', 'PostgreSQL', 'CSS'],
        image: myExpenses,
        gitLink: 'https://github.com/Alejandro-Bernal-M/my-expenses',
        liveLink: 'https://my-expenses-wyv4.onrender.com/',
    },
    {
        name: "Space X travelers",
        description: "Space X travelers is a project where we used the data from the Space X API and we implemented the functionality for booking rockets and join to missions. Made with React and Redux.",
        tools: ['React', 'Redux', 'SPA', 'CSS'],
        image: spaceImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Space-X-travelers',
        liveLink: 'https://space-x-travelers.onrender.com/',
    },
    {
        name: "Portfolio for dancers",
        description: "This is a portfolio made for a couple of Colombian dancers who live in Spain. The porfolio is made with Next js, it is responsive.",
        tools: ['Next js', 'SPA'],
        image: portfolioKen,
        gitLink: 'https://github.com/Alejandro-Bernal-M/portafolio-ken-y-juli',
        liveLink: 'https://portafolio-ken-y-juli.vercel.app/',
    },
    {
        name: "Math magicians",
        description: "A wep app, build as SPA with react router where you can use the calculator and see quotes from an API, made with React.",
        tools: ['React', 'SPA', 'CSS'],
        image: mathImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Math.Magicians',
        liveLink: 'https://math-magicians-havp.onrender.com/',
    },
    {
        name: 'My currency',
        description: "My currency it's a web application where you can check the comparison between a certain amount of USD and other currencies. You can also check every currency and see the comparison of that one with the others, you can also filter directly for a specific currency.",
        tools: ['React', 'Redux', 'SPA'],
        image: myCurrency,
        gitLink: 'https://github.com/Alejandro-Bernal-M/my-currency',
        liveLink: 'https://my-currency.onrender.com/',
    },
    {
        name: "To Do's list",
        description: "To Do's list is a web page where you can add tasks that you need to do, edit the task, check the task when is done, clear all the tasks that are completed and drag the task to change the order. ",
        tools: ['HTML5', 'CSS', 'JavaScript'],
        image: todoImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/To-do-list',
        liveLink: 'https://alejandro-bernal-m.github.io/To-do-list/',
    },
    {
        name: "Your new car",
        description: "It's a webpage Where you can interact giving likes and comments using an API and see the data retrieved from another API and see the information of the cars. Made with Webpack. ",
        tools: ['Webpack', 'CSS'],
        image: yourCar,
        gitLink: 'https://github.com/Alejandro-Bernal-M/API-based-project',
        liveLink: 'https://alejandro-bernal-m.github.io/API-based-project/',
    },
    {
        name: "School Library",
        description: "School Library OOP is a project made with ruby where you have a tool to record what books are in the library and who borrows them. The app allow you to: Add new students or teachers. Add new books. Save records of who borrowed a given book and when. And all of this in a beautiful and well-organized way!",
        tools: ['RUBY', 'Object oriented programming'],
        image: school,
        gitLink: 'https://github.com/Alejandro-Bernal-M/school_library',
        liveLink: 'https://github.com/Alejandro-Bernal-M/school_library',
    },
  ];  
  export default arrayOfProjects;
