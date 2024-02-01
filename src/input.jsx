import {
  BinanceCoin,
  BitCoin,
  BitCoinCash,
  Dash,
  DogeCoin,
  Ethereum,
  LiteCoin,
  Ripple,
  Tether,
  Tron,
} from "./icons";

const icons = {
  dogecoin: <DogeCoin />,
  binancecoin: <BinanceCoin />,
  bitcoin: <BitCoin />,
  tether: <Tether />,
  ethereum: <Ethereum />,
  litecoin: <LiteCoin />,
  ripple: <Ripple />,
  bitcoincash: <BitCoinCash />,
  dash: <Dash />,
  tron: <Tron />,
};

const Input = ({ register, name, title }) => {
  return (
    <div className="w-full flex p-1 items-center">
      <label
        className="flex w-full py-9 pl-12  gap-12 items-center-1 rounded-xl shadow-xl cursor-pointer hover:scale-105 tranform transition
        max-[590px]:flex-col max-[590px]:items-center max-[590px]:px-0 max-[590px]:py-3 max-[590px]:pt-10 max-[590px]:gap-8 max-[380px]:pt-8 max-[380px]:gap-6 max-[300px]:gap-4 max-[300px]:pt-5"
      >
        {icons[name]}
        <label
          htmlFor={name}
          className="flex items-center text-lg gap-4 font-bold text-gray-500
          max-[380px]:text-sm max-[380px]:gap-2 max-[300px]:text-xs max-[300px]:gap-1"
        >
          {title}
          <input
            type="radio"
            id={name}
            value={name}
            {...register("coin", { required: true })}
            className="w-5 h-5 
            max-[380px]:w-4 max-[380px]:h-4 max-[300px]:w-3 max-[300px]:h-3"
          />
        </label>
      </label>
    </div>
  );
};

export default Input;
