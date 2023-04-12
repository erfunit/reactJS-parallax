import { Parallax } from "react-parallax";
import imgThree from "../assets/img3.jpg";

const ImageThree = () => (
  <Parallax
    className="w-full h-screen bg-cover bg-left object-cover flex justify-center items-center"
    bgImage={imgThree}
    strength={300}
  >
    <span className="bg-white/70 p-1 rounded-full text-black text-lg font-sans font-light">
      Have a good scrolling trip!
    </span>
  </Parallax>
);

export default ImageThree;
