import blogScreen from '../src/blog-screen.png'
import QuizImage from '../images/quiz-img.jpg'
import cryptoImage from '../images/projekat_crypto.png'
import shoppingImage from './pages/shopping-cart-ss.png'

export const projects = [
  {
    title: "Crypto Currency App",
    subtitle: "React, Axios, Tailwind CSS",
    description:
      "This project uses Axios in React to fetch data from a Cryptocurrency API, with Tailwind CSS for responsive, modern styling, creating a seamless blend of functionality and design.",
    image: cryptoImage,
    link: "https://portofolio-crypto.netlify.app/ ",
  },
  {
    title: "The Atomic Blog",
    subtitle: "React and UseContext",
    description:
      "This is a Blog Project where I learned and practiced using React Context for state management, avoiding the complexity of 'Prop Drilling' and making the component tree cleaner and more maintainable.",
    image: blogScreen,
    link: "https://atomicblogapp.netlify.app/",
  },
  {
    title: "Epic Shopping Cart",
    subtitle: "useContext and useReducer",
    description:
      "In this project, I integrated both technologies to develop a fully functional shopping cart system, ensuring smooth user interaction and efficient data management."
,
    image: shoppingImage,
    link: "https://shopping-cart-ecommerce-practice.netlify.app/",
  },
  {
    title: "German Quiz App",
    subtitle: "useReducer",
    description:
      "This quiz on German history and general knowledge uses useReducer for efficient state management, ensuring a seamless user experience and organized state handling throughout the app.",
    image: QuizImage,
    link: "https://ibrakaaaa.github.io/my-own-quiz/",
  },
];


export const skills = [
"HTML",
"CSS",
"Javascript",
"React",
"Tailwind CSS",
"GitHub"
];
