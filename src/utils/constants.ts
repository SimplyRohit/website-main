import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "hello@SimplyRohit.tech.com";
const GITHUB = "https://github.com/SimplyRohit";
const TWITTER = "https://twitter.com/Simply0Rohit";
const LINKEDIN = "https://linkedin.com/in/Simply-Rohit";
const INSTAGRAM = "https://instagram.com/r0hltt";

const DISCORD_ID = "207204046115831809";

const WORK = [
  {
    project: "Github",
    link: "https://github.com/SimplyRohit",
    description: "My open-source projects. Check them out!",
  },
  {
    project: "SimStudioAI",
    link: "https://github.com/simstudioai/sim",
    description:
      "Contributed to the SimStudioAI/sim open-source project, extending Telegram workflow blocks and developing modular tool components to improve automation and communication flows.",
  },
  {
    project: "Oath",
    link: "https://github.com/SimplyRohit",
    description:
      "Currently working on Oath — a React Native app designed to help users overcome bad habits through guided challenges, progress tracking, and personalized motivation. Built with Expo and OAuth authentication for a seamless and secure experience.",
  },

  {
    project: "Deprobo-client",
    link: "https://deprobo-client.vercel.app/",
    description:
      "Deprobo is a decentralized prediction market DApp built with Next.js, Solana Web3, NeonDB, and Drizzle. Users can bet with YES/NO predictions and win SOL.",
  },
  {
    project: "Deprobo-contract",
    link: "https://deprobo-client.vercel.app/",
    description:
      "Smart contracts for Deprobo, written in Anchor (Rust) on Solana. These contracts handle market creation, user bets, resolution logic, and secure SOL payouts.",
  },
  {
    project: "Vstack",
    link: "https://vstackkk.vercel.app/",
    description:
      "VStack is  AI-powered website generator that utilizes the power of Gemini AI to create stunning websites effortlessly.",
  },
  {
    project: "Cloud-IDE",
    link: "https://github.com/SimplyRohit/Cloud-IDE",
    description:
      "Cloud IDE is a web app that allows you to write code and share it with others.",
  },
  {
    project: "WebCinema",
    link: "https://webcinema.vercel.app/",
    description:
      "WebCinema is a web app that allows you to watch movies on the web.",
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
