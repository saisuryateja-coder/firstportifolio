import dynamic from "next/dynamic";

// import Video from "../video";
const Video = dynamic(() => import("../video"), { ssr: false });

export default function Portfolio() {
  return (
    <section id="portfolio" className="flex flex-col items-center mb-10 pt-14">
      <h2 className="font-bold mb-6 text-4xl top-heading text-black">
        My Portfolio
      </h2>
      <div className="flex flex-wrap gap-10 justify-center p-10">
        <Video src="/sample-one.mp4" />
        <Video src="/sample-two.mp4" />
        <Video src="/sample-three.mp4" />
        <Video src="/sample-four.mp4" />
        <Video src="/sample-five.mp4" />
      </div>
    </section>
  );
}
