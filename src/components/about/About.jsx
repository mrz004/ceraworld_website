import bgimg from "/contact-us/img1.webp";
import img from "/about/about.jpg";
import Hero from "./Hero";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section>
      <div className="hero stacked-elements">
        <img src={bgimg} alt={bgimg} className="h-[90svh]" />
        <div className="overlay grid place-items-center backdrop-brightness-50">
          <h1 className="text-6xl sm:text-8xl xl:text-[8rem] 2xl:text-[10rem] text-theme-white">
            About Us
          </h1>
        </div>
      </div>
      <Hero imgSrc={img} imgAlt={img} />
      <div className="card-container mx-auto justify-center flex flex-wrap gap-16 py-24 px-16">
        <AboutCard
          title="Aim"
          text="Our aim at Ceraworld Chandwani Tiles is to become the leading provider of high-quality tiles, sanitary fittings, and hardware, delivering exceptional value and service to our customers while continuously innovating and improving our product offerings."
        />
        <AboutCard
          title="Vision"
          text="To be recognized as a trusted and innovative leader in the construction materials industry, setting standards for quality, reliability, and customer satisfaction, and to inspire excellence in every project we undertake."
          reverse
        />
        <AboutCard
          title="Mission"
          text="Our mission is to provide superior tiles, sanitary fittings, and hardware that meet the highest standards of quality and design. We are committed to enhancing our customers' building and renovation experiences through exceptional products, expert advice, and outstanding service. By fostering a culture of continuous improvement and innovation, we aim to build lasting relationships with our clients and contribute positively to the communities we serve."
        />
      </div>
    </section>
  );
}

export default About;
