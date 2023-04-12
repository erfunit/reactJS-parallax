import { Parallax } from "react-parallax";
import imgTwo from "../assets/img2.jpg";

const ImageTwo = () => (
  <Parallax
    className="w-full h-screen bg-cover bg-left object-cover flex justify-center items-center"
    bgImage={imgTwo}
    strength={300}
  >
    <span className="bg-white/70 p-1 rounded-full text-black text-lg font-sans font-light">
      Have a good scrolling trip!
    </span>
  </Parallax>
);

export default ImageTwo;
