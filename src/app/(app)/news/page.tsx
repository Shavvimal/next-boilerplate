import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

function IntroductionSection() {
  return (
    <section
      className="max-w-5xl mx-auto w-full flex items-center justify-center min-h-screen py-[90px]"
      id="hero"
    >
      <div className="inline-flex flex-col items-center md:items-start space-y-6 w-full ">
        <div className="flex flex-col md:flex-row w-full">
          <div className="inline-flex items-center md:items-start justify-end flex-col text-4xl md:text-7xl font-bold tracking-widest leading-10 uppercase font-sans select-none  md:w-3/4 ">
            <div className="inline-flex space-x-2 items-center mb-8 md:mb-4">
              <div className="w-16 hidden md:flex h-0.5 bg-white"></div>
              <p className="text-sm font-medium tracking-widest uppercase font-body">
                <ModeToggle />
              </p>
            </div>
            <h2 className=" text-4xl md:text-7xl text-stroke">Shav</h2>
            <h2 className=" text-4xl md:text-7xl ">Vimalendiran</h2>
          </div>
          <div className="h-24 w-24 md:h-auto mx-auto mt-5 md:w-1/4 md:mt-0 "></div>
        </div>

        <p className="text-center md:text-left leading-relaxed tracking-normal">
          Heys 👋, I&apos;m Shav - a Full-Stack Data Scientist, AWS Certified
          Machine Learning Specialist, and an aspiring entrepreneur. I
          specialize in crafting solutions in MLOps & software architecture,
          having been focused on scalable data streaming stacks optimized for
          low-latency, deploying DL architectures, and provisioning distributed
          Python servers for computation & model serving. I spent time at an
          algorithmic & quantitative crypto hedge fund applying my expertise in
          ML, AWS Cloud, stats, and database management to perfect trading
          strategies and develop Risk Models. Along the way, an in-house OMS
          platform led to the creation of{" "}
          <a
            rel="noreferrer"
            className="link"
            target="_blank"
            href="https://www.quadra.trade/"
          >
            Quadra
          </a>
          , a Multi-Asset Multi-Exchange Crypto Portfolio Management & Execution
          platform, which I spent over a year helping build and shape from the
          ground up. <br /> <br />
          In December, I took a leap of faith and I left my career to chase ✨
          Entrepreneurship ✨. The dream of building something transformative
          from the ground up is what drives me. Currently, I&apos;m channeling
          my energy into new projects, hackathons and constantly seeking
          opportunities to innovate and make a lasting impact. Right now
          I&apos;m working on AI consulting services, providing ad-hoc work for
          the Hedge Fund and getting heavily involved in{" "}
          <a
            rel="noreferrer"
            className="link"
            target="_blank"
            href="https://arxiv.org/abs/2305.14325"
          >
            Multi-Agent Collaboration
          </a>{" "}
          (Swarm) Tech. I&apos;m all about forging connections and embarking on
          journeys to create something extraordinary together, so let&apos;s{" "}
          <Link className="link" href="/contact">
            connect
          </Link>{" "}
          and make some waves! 🌊
        </p>
      </div>
    </section>
  );
}

export default async function Home() {
  return (
    <>
      <IntroductionSection />
    </>
  );
}
