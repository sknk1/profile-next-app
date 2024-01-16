import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container relative m-auto flex h-screen flex-col flex-wrap items-center justify-center gap-7 text-center md:gap-10">
        <h1 className="animate__animated animate__pulse animate__delay-2s	animate__infinite animate__slow font-bold leading-snug">
          Hey there 👋
          <br />I am Gregorius
        </h1>
        <p className="w-2/3 md:w-2/5">
          I'm enthusiastic about tech in coding and learning new things about
          computers and what they can do.
          <br />
          In my free time, I enjoy reading 📖 articles and try exploring new
          coding tech.
        </p>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#about-section" className="custom-button-1">
            About me
          </a>
          <a href="#portofolios-section" className="custom-button-2">
            😮 Let’s see portfolios
          </a>
        </div>
      </div>
      <div className="absolute bottom-1/2 right-0 hidden translate-x-0 translate-y-1/2 transform md:block md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px]">
        <Image
          className="object-cover"
          src="/images/home-hand.png"
          alt="home-hand-image"
          fill
        />
      </div>
    </>
  );
}
