import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const formSchema = z.object({
  totalMonth: z.number().int().max(12).min(1),
  coinNumber: z.number().int().min(1),
  dayNumber: z
    .number()
    .int()
    .refine((value) => value % 30 === 0 || value <= 10, {
      message: "عدد باید کوچیک تر مساوی 10 یا تعداد روزهای ماه باشد",
    }),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleInfo = (result , coin , month , days) => {
    return MySwal.fire({
      title: `(${result}) !با موفقیت انجام شد`,
      text: `با ${coin} عدد کوین و بمدت ${month} روز و برداشت در هر دوره ${days} روزه در پایان ${result} مقدار کوین خواهید داشت`,
      icon: 'success',
      iconColor:'#c14b6a',
      confirmButtonColor:"#c14b6a",
      confirmButtonText: "تایید",
      customClass: {
    confirmButton:"font-bold py-3 px-8 bg-gradient-to-tl from-red-500 to-blue-600 text-white rounded-full text-xl" 
      },
      buttonsStyling: false
    })
  }

  const onSubmit = (values) => {
    const month = values.totalMonth * 30;
    const coin = values.coinNumber;
    const days = values.dayNumber;

    const index = month / days;

    let result = coin;

    var i = 0;
    while (i < index) {
      let x = (result * 2) / 100;
      x = x * days;
      result = x + result;
      i++;
    }
    handleInfo(result , coin , month , days)
  };

  return (
    <div className="h-full flex flex-col justify-center items-center gap-10 whitespace-nowrap">
      <h1
        className="font-bold text-5xl text-white drop-shadow-2xl 
      max-[490px]:text-4xl max-[375px]:text-3xl"
      >
        INTJ Society ♟ }:-)
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[clamp(60px,100%,500px)] flex flex-col items-center px-10 py-12 rounded-3xl bg-[#ffffff89] gap-7"
      >
        <h2 className="text-gray-600 text-2xl font-semibold drop-shadow-2xl">
          Earning Calculator...
        </h2>

        <div className="w-full">
          <label
            className="text-gray-600 font-semibold p-4
          max-[370px]:text-sm max-[330px]:text-[12px]"
          >
            تعداد ماه
          </label>
          <div className="mt-2 p-[3.3px] bg-gradient-to-tl from-red-500 to-blue-600 overflow-hidden rounded-2xl w-[100%] h-[60px]">
            <input
              id="totalMonth"
              type="text"
              className="w-full h-full rounded-xl p-2 text-2xl bg-[#ffffffd8] text-gray-600 font-semibold placeholder:text-gray-400 outline-none
              max-[370px]:text-xl max-[330px]:text-lg "
              placeholder="Total month ..."
              {...register("totalMonth", { valueAsNumber: true })}
            />
          </div>
          {errors.totalMonth && (
            <div
              className="mx-2 my-[2px] font-semibold text-red-700
          max-[370px]:text-sm max-[330px]:text-[12px]"
            >
              {errors.totalMonth?.message}
            </div>
          )}
        </div>
        <div className="w-full">
          <label
            className="text-gray-600 font-semibold p-4
          max-[370px]:text-sm max-[330px]:text-[12px]"
          >
            تعداد کوین های سرمایه گذاری
          </label>
          <div className="mt-2 p-[3.3px] bg-gradient-to-tl from-red-500 to-blue-600 overflow-hidden rounded-2xl w-[100%] h-[60px]">
            <input
              id="coinNumber"
              type="string"
              className="w-full h-full rounded-xl p-2 text-2xl bg-[#ffffffd8] text-gray-600 font-semibold placeholder:text-gray-400 outline-none
              max-[370px]:text-xl max-[330px]:text-lg"
              placeholder="Coin number ..."
              {...register("coinNumber", { valueAsNumber: true })}
            />
          </div>
          {errors.coinNumber && (
            <div
              className="mx-2 my-[2px] font-semibold text-red-700
          max-[370px]:text-sm max-[330px]:text-[12px]"
            >
              {errors.coinNumber?.message}
            </div>
          )}
        </div>
        <div className="w-full">
          <label
            className="text-gray-600 font-semibold p-4
          max-[370px]:text-sm max-[330px]:text-[12px]"
          >
            {" "}
            تعداد روز هر دوره برداشت
          </label>
          <div className="mt-2 p-[3.3px] bg-gradient-to-tl from-red-500 to-blue-600 overflow-hidden rounded-2xl w-[100%] h-[60px]">
            <input
              id="totalDays"
              type="string"
              className="w-full h-full rounded-xl p-2 text-2xl bg-[#ffffffd8] text-gray-600 font-semibold placeholder:text-gray-400 outline-none
              max-[370px]:text-xl max-[330px]:text-lg"
              placeholder="Number of day's ..."
              {...register("dayNumber", { valueAsNumber: true })}
            />
          </div>
          {errors.dayNumber && (
            <div
              className="mx-2 my-[2px] font-semibold text-red-700
          max-[370px]:text-sm max-[330px]:text-[12px]"
            >
              {errors.dayNumber?.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="mt-2 bg-gradient-to-tl from-red-500 to-blue-600 font-semibold px-8 py-4 text-white text-2xl rounded-full transform scale-95 transition hover:scale-100"
        >
          see the answer!
        </button>
      </form>
    </div>
  );
};

export default App;