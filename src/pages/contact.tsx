import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../components/Icons";
import AnimatedPage from "../components/PageWrapper";
import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from "../utils/constants";

const SOCIAL_ITEMS = [
  {
    platform: "twitter",
    icon: <TwitterIcon width={30} height={30} />,
    link: TWITTER,
    handle: "@WasATrueWarrior",
  },
  {
    platform: "github",
    icon: <GitHubIcon width={30} height={30} className="fill-primary-300" />,
    link: GITHUB,
    handle: "@SimplyRohit",
  },
  {
    platform: "linkedin",
    icon: <LinkedInIcon width={30} height={30} />,
    link: LINKEDIN,
    handle: "@Simply-Rohit",
  },
  {
    platform: "instagram",
    icon: <InstagramIcon width={30} height={30} />,
    link: INSTAGRAM,
    handle: "@r0hltt",
  },
  {
    platform: "email",
    icon: <MailIcon width={30} height={30} />,
    link: "mailto:hello@rohitjaatjaat073.com",
    handle: "@rohitjaatjaat073",
  },
];

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="title__wrapper">
        <AnimatedText element="h1" text="Contact" />
      </div>

      <ul className="flex flex-col gap-6 list-none pb-10">
        {SOCIAL_ITEMS.map((item) => (
          <li key={item.platform} className="flex gap-4 items-center">
            {item.icon}
            <a
              href={item.link}
              className="text-xl"
              target="_blank"
              rel="noreferrer"
            >
              {item.handle}
            </a>
          </li>
        ))}
      </ul>
    </AnimatedPage>
  );
}
