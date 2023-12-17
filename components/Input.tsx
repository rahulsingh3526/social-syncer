import React from "react";
interface InputProps {
  id: string;
  value: string;
  onChange: any;
  label: string;
  type?: string;
  position?: string;
}
const input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
  position,
}) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className={`block rounded-md px-5 pt-4 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer ${position}`}
        placeholder=""
      />
      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3
        scale-75 top-3 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default input;
