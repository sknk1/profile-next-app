import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto flex min-h-screen flex-row flex-wrap">
        <div className="flex w-full flex-col gap-10 lg:w-2/3">
          <h1 className="text-center font-bold leading-tight lg:text-left lg:leading-snug">
            You can reach me any time🙂
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>LinkedIn</td>
                    <td>:</td>
                    <td>
                      <a
                        href="https://www.linkedin.com/in/gregorius-yuuki/"
                        target="_blank"
                        className="transition-all hover:text-yellow-custom"
                      >
                        <i className="lab la-linkedin text-3xl"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Github</td>
                    <td>:</td>
                    <td>
                      <a
                        href="https://github.com/sknk1"
                        target="_blank"
                        className="transition-all hover:text-yellow-custom"
                      >
                        <i className="lab la-github text-3xl"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td>:</td>
                    <td>
                      <a
                        href="https://www.instagram.com/rickygregorius/"
                        target="_blank"
                        className="transition-all hover:text-yellow-custom"
                      >
                        <i className="lab la-instagram text-3xl"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <a href="#about-section" className="custom-button-1">
                About me
              </a>
              <a href="#portofolios-section" className="custom-button-2">
                😮 Let’s see portfolios
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] w-0 lg:w-1/3">
          <Image
            className="object-contain"
            src="/images/contact.png"
            alt="contact-image"
            fill
          />
        </div>
      </div>
    </>
  );
}
