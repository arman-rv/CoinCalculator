import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {};
  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-5xl text-white drop-shadow-2xl ">
        INTJ Society  
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[clamp(60px,100%,500px)] flex flex-col items-center px-10 py-14 rounded-3xl bg-[#ffffff89] gap-7"
      >
        <h2 className="text-gray-600 text-2xl font-semibold drop-shadow-2xl">
          Earning Calculator...
        </h2>
        <div className=" p-[3.3px] bg-gradient-to-tl from-red-500 to-blue-600 overflow-hidden rounded-2xl w-[100%] h-[60px]">
          <input
            type="text"
            className="w-full h-full rounded-xl p-2 text-2xl bg-[#ffffffd8] text-gray-600 font-semibold placeholder:text-gray-400 outline-none"
            placeholder="Total day's ..."
            {...register("totalDays")}
          />
        </div>
        <div className=" p-[3.3px] bg-gradient-to-tl from-red-500 to-blue-600 overflow-hidden rounded-2xl w-[100%] h-[60px]">
          <input
            type="text"
            className="w-full h-full rounded-xl p-2 text-2xl bg-[#ffffffd8] text-gray-600 font-semibold placeholder:text-gray-400 outline-none"
            placeholder="Coin number"
            {...register("totalDays")}
          />
        </div>
        <div className=" p-[3.3px] bg-gradient-to-tl from-red-500 to-blue-600 overflow-hidden rounded-2xl w-[100%] h-[60px]">
          <input
            type="text"
            className="w-full h-full rounded-xl p-2 text-2xl bg-[#ffffffd8] text-gray-600 font-semibold placeholder:text-gray-400 outline-none"
            placeholder="Number of day's"
            {...register("totalDays")}
          />
        </div>
        <button type="submit" className="bg-gradient-to-tl from-red-500 to-blue-600 font-semibold px-8 py-4 text-white text-2xl rounded-full transform scale-95 transition hover:scale-100">
          see the answer!
        </button>
      </form>
    </div>
  );
};

export default App;
