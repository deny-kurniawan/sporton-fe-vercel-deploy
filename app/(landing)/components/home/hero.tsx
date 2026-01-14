import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero-section" className="container mx-auto h-screen flex">
            <div className="relative self-center">
                <Image src="/image/img-basketball-transparent.svg" width={732} height={723} alt="bola basket" className="grayscale absolute -left-25 -top-15"/>
                <div className="relative ml-40 w-full">
                 <div className="text-primary italic">Friday Sale, 50%</div>
                 <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-light from-black to-[#979797D1] bg-clip-text text-transparent">WEAR YOUR <br/> TOP-QUALITY <br/> SPORTSWEAR</h1>
                 <p className="w-1/2 mt-10 leading-loose">
                    Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion
                 </p>
                 <div className="flex gap-5 mt-14">
                    <Button>Explore More <FiFastForward/></Button>
                    <Button variant="ghost">Watch Video {" "}<Image src="/image/icon-play-video.svg" alt="play video" width={29} height={29}/></Button>
                 </div>
                </div>
                <Image src="/image/img-hero.svg" width={600} height={850} alt="image sporton hero" className="absolute -right-5 top-1/2 -translate-y-1/2 max-w-[50%]"/>
            </div>
            <Image src="/image/img-ornament-hero.svg" width={320} height={320} alt="ornamen sporton" className="absolute -right-[200px] top-1/2 -translate-y-1/2"/>

        </section>
    )
}

export default HeroSection;