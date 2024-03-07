import Button from "../button";
import NavBar from "../nav/navbar";
import Video from "./video";

export default function HeroSection() {
  return (
    <div className="flex py-20 pl-28 bg-[#161616]  max-[1434px]:mb-10 max-[1434px]:pl-0 max-[1434px]:pt-7  max-[1434px]:pb-0">
      <div className="w-full">
        <header className="max-[815px]:hidden">
          <NavBar />
        </header>
        <div className="hero-section-container flex ">
          <div className="w-3/6 flex flex-col pb-20 max-[1434px]:order-2 max-[1434px]:w-full max-[1434px]:px-7 max-[1434px]:pb-5 max-[768px]:pb-[40px]">
            <div className="pr-10 mt-auto mb-auto max-[1434px]:flex max-[1434px]:flex-col max-[1434px]:items-center max-[1434px]:pr-0">
              <p className="text-2xl mb-2 max-[1434px]:text-center ">
                Hi, I&rsquo;m Teja
              </p>
              <h2 className="max-[768px]:text-3xl	text-5xl mb-4 max-[1434px]:text-center font-bold heading">
                I Do <span className="editing-title">Video Editing</span>
              </h2>
              <p className="text-2xl mb-10  max-[1434px]:text-center max-[480px]:text-lg w-9/12 max-[480px]:w-full">
                I transform videos into captivating stories with engaging
                editing
              </p>
              <a href="#contact">
                <Button name="Let's Talk" />
              </a>
            </div>
          </div>
          <div className="w-3/6 max-[1434px]:mb-10 max-[1434px]:w-full max-[768px]:hidden">
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}
