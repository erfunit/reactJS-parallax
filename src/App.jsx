import ImageFour from "./components/ImageFour";
import ImageTwo from "./components/ImageTwo";
import ImageOne from "./components/imageOne";
import ImageThree from "./components/imageThree";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <div>
        <div className="w-full p-8  flex items-center flex-col justify-center font-light text-gray-500">
          <h2 className="font-semibold text-xl">Scroll to next image!</h2>
          <p className="mx-auto block w-[60%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            nostrum ullam, officiis vitae reprehenderit odit ad quo fugiat
            assumenda esse, officia omnis repellendus laudantium suscipit
            exercitationem laborum. Optio, porro corporis?
          </p>
        </div>
        <ImageOne />
        <div className="w-full p-8  flex items-center flex-col justify-center font-light text-gray-500">
          <h2 className="font-semibold text-xl">Scroll to next image!</h2>
          <p className="mx-auto block w-[60%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            nostrum ullam, officiis vitae reprehenderit odit ad quo fugiat
            assumenda esse, officia omnis repellendus laudantium suscipit
            exercitationem laborum. Optio, porro corporis?
          </p>
        </div>
        <ImageTwo />
        <div className="w-full p-8  flex items-center flex-col justify-center font-light text-gray-500">
          <h2 className="font-semibold text-xl">Scroll to next image!</h2>
          <p className="mx-auto block w-[60%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            nostrum ullam, officiis vitae reprehenderit odit ad quo fugiat
            assumenda esse, officia omnis repellendus laudantium suscipit
            exercitationem laborum. Optio, porro corporis?
          </p>
        </div>
        <ImageThree />
        <div className="w-full p-8  flex items-center flex-col justify-center font-light text-gray-500">
          <h2 className="font-semibold text-xl">How was it?!</h2>
          <div>
            <a
              target="_blank"
              href="https://github.com/erfunit"
              className="bg-purple-600 rounded-full hover:bg-purple-700 transition-all text-white my-5 flex flex-row justify-center gap-x-3 items-center px-6 py-3"
            >
              <FaGithub size={30} className="text-white" /> follow me on github!
            </a>
          </div>
        </div>
        <ImageFour />
      </div>
    </div>
  );
};

export default App;
