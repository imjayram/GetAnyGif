import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
     <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg absolute w-11/12 text-center mt-[40px] text-2xl font-bold ">RANDOM GIFS</h1>
       <br />
       <br />
       <br />
       <br />
      <div classname='flex flex-col w-full items-center'>
        <Random/>
        <Tag/>
      </div>
     </div>
  );
}
