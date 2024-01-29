import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href={"/"}>
            <Image
              src={
                "https://nike-rosy.vercel.app/assets/footer-logo-4821ca9f.svg"
              }
              alt={"logo"}
              className="m-0"
              width={150}
              height={46}
            />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item) => (
              <div
                key={item.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {link.title}
              </h4>
              <ul>
                {link.links.map((links) => (
                  <li
                    key={links.name}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray cursor-pointer"
                  >
                    {links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={
              "https://nike-rosy.vercel.app/assets/copyright-sign-b38b2eec.svg"
            }
            alt={"Copy riggt sign"}
            width={20}
            height={20}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
