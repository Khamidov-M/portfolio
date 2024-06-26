import html from "./assets/html-1.svg";
import css from "./assets/css-3.svg";
import js from "./assets/logo-javascript.svg";
import bootstrap from "./assets/bootstrap-5-1.svg";
import tailwind from "./assets/tailwindcss.svg";
import git from "./assets/git-icon.svg";
import github from "./assets/github-icon-1.svg";
import mui from "./assets/material-ui-1.svg";
import react from "./assets/react.svg";

import autoposter from "./assets/pr/autoposter.png";
import cuser from "./assets/pr/cuser.png";
import mcg from "./assets/pr/mcg.png";
import slivait from "./assets/pr/slivait.png";

export const skills = [
  {
    id: 1,
    name: "HTML",
    logo: html,
    info: "using html 5",
    star: 5,
  },
  {
    id: 2,
    name: "CSS",
    logo: css,
    info: "using css 3",
    star: 4,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: js,
    info: "programming language",
    star: 3,
  },
  {
    id: 4,
    name: "React",
    logo: react,
    info: "using lastest",
    star: 4,
  },
  {
    id: 5,
    name: "Tailwind css",
    logo: tailwind,
    info: "css framework",
    star: 5,
  },
  {
    id: 6,
    name: "git",
    logo: git,
    info: "github halper",
    star: 4,
  },
  {
    id: 7,
    name: "GitHub",
    logo: github,
    info: "nick: Khamidov-M",
    star: 5,
  },
  {
    id: 8,
    name: "MUi",
    logo: mui,
    info: "Material ui",
    star: 3,
  },
  {
    id: 9,
    name: "Bootsrap",
    logo: bootstrap,
    info: "not often using",
    star: 2,
  },
];

export const projects = [
  {
    id: 1,
    name: "Auto Poster",
    info: "this web-site was creater for react exam and it took 20 days.",
    link: "https://auto-poster.netlify.app/",
    gitHub: "https://github.com/Khamidov-M/auto-poster",
    image: autoposter,
    texnos: ["#html", "#css", "#JavaScript", "#React", "#Tailwind"],
    star: 5,
  },
  {
    id: 2,
    name: "CUser",
    info: "CUser is simple react example for learning, it was created for fun.",
    link: "https://cuser-web.netlify.app/",
    gitHub: "https://github.com/Khamidov-M/my-team",
    image: cuser,
    texnos: ["#html", "#css", "#JavaScript", "#React"],
    star: 1,
  },
  {
    id: 3,
    name: "MCG",
    info: "this game wes created when I was just learning begining of js, for fun.",
    link: "https://mcg-game.netlify.app/",
    gitHub: "https://github.com/Khamidov-M/memory-card-game",
    image: mcg,
    texnos: ["#html", "#css", "#JavaScript"],
    star: 2,
  },
  {
    id: 4,
    name: "Slivait",
    info: "This web was created for fun when I was learning node js and express (mern)",
    link: "https://slivait.netlify.app/",
    gitHub: "https://github.com/Khamidov-M/slivait",
    image: slivait,
    texnos: ["#html", "#css", "#JavaScript", "#react", "#tailwind"],
    star: 4,
  },
];
