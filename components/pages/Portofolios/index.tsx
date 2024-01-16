import Image from "next/image";

export default function Portofolios() {
  const portoData = [
    {
      id: 1,
      name: "Vistek",
      description:
        "Software House Company, Website Developer, speciality in eSport Websites.",
      link: "https://vistek.id/",
      image: "/project/vistek.png",
    },
    {
      id: 2,
      name: "MPL (ML Pro League)",
      description:
        "MPL, is a regional professional esports league for the game Mobile Legends.",
      link: "https://id-mpl.com/",
      image: "/project/mpl.png",
    },
    {
      id: 3,
      name: "MDL (ML Development League)",
      description:
        "MDL, is a regional professional esports league tier 2 for the game Mobile Legends.",
      link: "https://id-mdl.com/",
      image: "/project/mdl.png",
    },
    {
      id: 4,
      name: "PMCC (PUBG Mobile Campus Championship)",
      description:
        "PMCC Indonesia is a special competition for students in Indonesia.",
      link: "https://pmcc.id/",
      image: "/project/pmcc.png",
    },
    {
      id: 5,
      name: "PMPL (PUBG Mobile Pro League)",
      description:
        "PMPL Indonesia is a PUBG Mobile professional league in Indonesia.",
      link: "https://pmplsea.com/",
      image: "/project/pmpl.png",
    },
    {
      id: 6,
      name: "MAP",
      description:
        "PT MAP is a company specifically engaged in the trading of heavy equipment spare parts.",
      link: "https://marthap.co.id/",
      image: "/project/map.png",
    },
    {
      id: 7,
      name: "MAP Finance",
      description: "Finance website like ERP for PT MAP.",
      link: "https://marthap.co.id/",
      image: "/project/map.png",
    },
    {
      id: 8,
      name: "METZ",
      description:
        "Metz Indonesia - Plastics & Alkafil, The First Alcohol Swab and Hydrophilic Gauze Manufacturer in Indonesia.",
      link: "https://metzindonesia.com/",
      image: "/project/metz.png",
    },
    {
      id: 9,
      name: "Hampton",
      description:
        "A company that focuses on trading and distributing Indonesian commodities worldwide.",
      link: "https://hamptongroup.id/",
      image: "/project/hampton.png",
    },
    {
      id: 10,
      name: "Wordpress",
      description:
        "Able to manage, create, customing WP plugins and CMS itself.",
      image: "/project/wordpress.png",
    },
    {
      id: 11,
      name: "Portofolio",
      description: "",
      image: "/project/portofolio.png",
    },
    {
      id: 12,
      name: "Freelance",
      description: "Do some freelance for creating website.",
      image: "/project/freelance.png",
    },
  ];

  return (
    <>
      <div className="container mx-auto flex min-h-screen flex-col gap-10 ">
        <div className="w-full">
          <h1 className="text-center font-bold leading-tight lg:text-left lg:leading-snug">
            What i’ve done😋
          </h1>
        </div>

        {/* Porto container */}
        <div className="w-full">
          <div className="flex flex-row flex-wrap justify-center gap-10 lg:gap-5 xl:gap-10">
            {/* Porto item */}
            {portoData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="group flex w-full flex-row flex-wrap overflow-hidden rounded-3xl border-2 border-gray-light-custom bg-gray-custom lg:w-[48%]"
                >
                  <div className="relative h-[200px] w-full xl:h-full xl:w-1/2">
                    <Image
                      className="rounded-3xl object-cover "
                      src={data.image}
                      alt={`${data.name}-image`}
                      fill
                    />
                  </div>
                  <div className="flex min-h-[250px] w-full flex-col justify-start gap-5 p-5 lg:min-h-[300px] xl:w-1/2">
                    <h3>{data.name}</h3>
                    <p className="portofolio-desc">{data.description}</p>
                    {data.link ? (
                      <a
                        href={data.link}
                        className="transition-all hover:text-yellow-custom"
                        target="_blank"
                      >
                        Read More <i className="las la-external-link-alt"></i>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
