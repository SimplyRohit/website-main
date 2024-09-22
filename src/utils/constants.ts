import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "hello@looskie.com";
const GITHUB = "https://github.com/SimplyRohit";
const TWITTER = "https://twitter.com/WasATrueWarrior";
const LINKEDIN = "https://linkedin.com/in/rohit-64971b260";
const INSTAGRAM = "https://instagram.com/r0hltt";

const DISCORD_ID = "207204046115831809";

const WORK = [
  {
    project: "WebCinema",
    link: "https://webcinema.vercel.app/",
    description:
      "WebCinema is a web app that allows you to watch movies on the web.",
  },
  {
    project: "Cloud-IDE",
    link: "https://github.com/SimplyRohit/codeinide",
    description:
      "Cloud IDE is a web app that allows you to write code and share it with others.",
  },
];

export {
  EMAIL,
  TWITTER,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  DISCORD_ID,
  WORK,
  fullTwConfig,
};
