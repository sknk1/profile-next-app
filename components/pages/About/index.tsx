import Image from "next/image";

export default function About() {
  const dataAbout = [
    {
      id: 1,
      name: "Vistek (Web Developer) · Jun 2020 - Aug 2022 ",
      desc: "Software House Company, Website Developer, speciality in eSport Websites.",
      achievement: [
        "Collaborated with 6 team members to develop a good SEO website",
        "Develop mobile and web applications for eSport website",
        "Improve SEO result score on the website",
      ],
      skills: [
        "MySQL",
        "jQuery",
        "Laravel",
        "JavaScript",
        "Cascading Style Sheets (CSS)",
        "Search Engine Optimization (SEO)",
        "PHP",
        "HTML",
      ],
    },
    {
      id: 2,
      name: "Vistek (Full Stack Developer) · Sep 2020 - Jan 2022",
      desc: "Software House Company, Website Developer, speciality in eSport Websites.",
      achievement: [
        "Collaborated with designer team to create a website",
        "Developed mobile and web applications according to the client brief and modified designs to meet changes in client specifications",
        "Developed several type of website like eSport, company profile, and ERP website",
        "Created a animation for the website",
        "Improve SEO score and implement SEO tag on every development",
      ],
      skills: [
        "MySQL",
        "jQuery",
        "Laravel",
        "JavaScript",
        "Cascading Style Sheets (CSS)",
        "Search Engine Optimization (SEO)",
        "PHP",
        "HTML",
        "Leadership",
      ],
    },
    {
      id: 3,
      name: "Xtremax (Back End Developer) · Feb 2022 - Present",
      desc: "Xtremax is a leading cloud solutions provider that has helped to transform and maximise the digital possibilities of some of the biggest names in the region. Built on the belief that every client deserves to enjoy the advantages that come with cloud technology, we have been delivering simple solutions for tough problems since 2003. ",
      achievement: [
        "Worked with the Product Executive, Technical Support Engineer, SI and DBA to stay on track with the project plans and timelines and deliver regular updates",
        "Developed and managed custom plugins on Wordpress CMS, such as auto purge, custom captcha, and reCapthca",
        "Created documentation for Wordpress CMS",
        "Created and helped migrating entrance screening test for PHP team (Algobash)",
      ],
      skills: [
        "WordPress",
        "Amazon Web Services (AWS)",
        "MySQL",
        "Laravel",
        "PHP",
      ],
    },
  ];

  return (
    <>
      <div className="container m-auto flex flex-col justify-center gap-10">
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 lg:gap-0">
          <div className="relative w-full lg:w-1/3">
            <div className="m-auto h-[250px] w-[250px] rounded-full bg-yellow-custom lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]"></div>
            <Image
              className="profile-image"
              src="/images/profile.png"
              alt="profile-image"
              fill
            />
          </div>
          <div className="w-full lg:w-2/3 lg:px-10">
            <h1 className="text-center font-bold leading-tight lg:text-left lg:leading-snug">
              I’m Gregorius Ricky Yuuki
              <span className="text-yellow-custom"> Back End </span> and
              <span className="text-yellow-custom"> Front End </span>
              Developer
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {dataAbout
            .slice(0)
            .reverse()
            .map((data) => {
              return (
                <div key={data.id}>
                  <p className="pb-2 text-2xl font-bold">{data.name}</p>
                  <p className="pb-1">{data.desc}</p>
                  {/* <ul className="pb-1">
                    {data.achievement.map((data) => {
                      return <li key={data}>{`- ${data}`}</li>;
                    })}
                  </ul> */}
                  <p className="pb-1">
                    <span className="font-bold">Skills</span> :
                    {data.skills.map((data) => {
                      return <span key={data}>{` · ${data}`}</span>;
                    })}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
