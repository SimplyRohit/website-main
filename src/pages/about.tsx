import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import Link from "next/link";

export default function About() {
  return (
    <AnimatedPage >
      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p>
        Hey there, I’m Rohit! 20 year old full-Stack developer and freelancer
        based in India. I’ve taken coding seriously since 2023, and have been
        freelancing since 2024. Recently, however, I’ve grown a knack for giving
        back to community. I like contributing to 🤓 open source as a web
        developer, which is probably the reason why you’ve ended up here.
        Currently struggling with blockchain and rust.
      </p>

      <br />
      <p className="pb-10">
        Currently working on{" "}
        <Link href="" target="_blank">
          ....
        </Link>
      </p>
    </AnimatedPage>
  );
}
