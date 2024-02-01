import { useForm } from "react-hook-form";
import Input from "./input";
import toast, { Toaster } from "react-hot-toast";
import { getCoinData } from "./services/api/get-coin-data";

const Modal = ({ setModalCheck, setPrice }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (value) => {
    console.log(value.coin);
    const result = await getCoinData(value.coin, "usd");
    const price = result?.data[value.coin]?.usd;

    if (result?.status < 300 && typeof price === "number") {
      console.log(result?.data[value.coin]?.usd);

      toast.success("اطلاعات با موفقیت دریافت شد", {
        duration: 1200,
        style: { boxShadow: "0 1px 5px 0 #999" },
        className: "text-xl font-bold text-center",
      });
      setTimeout(() => {
        setModalCheck(false);
      }, 1700);
      setPrice(price);
    } else {
      console.log(result);
      toast.error("خطا در دریافت اطلاعات", {
        duration: 1200,
        style: { boxShadow: "0 1px 5px 0 #999" },
        className: "text-xl font-bold text-center",
      });
    }
  };

  return (
    <div className="w-[100%] h-[100%] absolute z-20 bg-gradient-to-br from-red-500 to-blue-600">
      <div className="z-50 absolute w-[100%] h-[100%] bg-[#1414148d] flex items-center justify-center gap-5 p-7 max-[380px]:p-5 max-[300px]:p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[clamp(60px,100%,600px)] bg-white rounded-xl gap-5 p-5 flex flex-col justify-center items-center"
        >
          <Toaster />
          <div
            className="flex w-full justify-around gap-3 max-[380px]:gap-2 overflow-y-scroll overflow-x-hidden  h-[370px] 
            max-[590px]:h-[325px] max-[380px]:h-[265px] max-[300px]:h-[215px]"
          >
            <div className="w-[50%] flex flex-col gap-3 max-[380px]:gap-0">
              <Input register={register} name="dogecoin" title="DOGE" />
              <Input register={register} name="binancecoin" title="BNB" />
              <Input register={register} name="ethereum" title="ETH" />
              <Input register={register} name="bitcoincash" title="BCH" />
              <Input register={register} name="dash" title="DASH" />
            </div>
            <div className="w-[50%] flex flex-col gap-3 max-[380px]:gap-0">
              <Input register={register} name="bitcoin" title="BTC" />
              <Input register={register} name="tether" title="USDT" />
              <Input register={register} name="tron" title="TRX" />
              <Input register={register} name="ripple" title="XRP" />
              <Input register={register} name="litecoin" title="LTC" />
            </div>
          </div>

          {errors.coin && (
            <div className="px-1 whitespace-normal text-center text-red-500 font-semibold text-xl mt-2 max-[300px]:text-lg max-[300px]:font-bold max-[300px]:mt-0">
              یک گزینه را انتخاب کنید
            </div>
          )}

          <button
            type="submit"
            className=" mt-[10px] bg-gradient-to-tl from-red-500 to-blue-600 font-bold px-16 py-[13px] text-white text-2xl rounded-full transform scale-95 transition hover:scale-100 shadow-2xl
          max-[300px]:px-10 max-[300px]:py-1 max-[300px]:mt-0 max-[300px]:text-xl"
          >
            {" "}
            تایید{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
