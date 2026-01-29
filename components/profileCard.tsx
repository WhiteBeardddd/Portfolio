import React from "react";

const Card = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* OUTER CIRCLE */}
      <div className="relative w-[420px] h-[420px] rounded-full border-2 border-dashed border-gray-400/50 flex items-center justify-center">

        {/* TOP LEFT */}
        <Icon style="left-[70px] top-[10px]" img="/images/cisco.png" />

        {/* TOP RIGHT */}
        <Icon style="right-[70px] top-[10px]" img="/images/linux.png" />

        {/* LEFT */}
        <Icon style="left-[-25px] top-[170px]" img="/images/wireshark_logo.png" />

        {/* RIGHT */}
        <Icon style="right-[-25px] top-[170px]" img="/images/C.png" />

        {/* BOTTOM LEFT */}
        <Icon style="left-[20px] bottom-[50px]" img="/images/java.svg" />

        {/* BOTTOM RIGHT */}
        <Icon style="right-[20px] bottom-[50px]" img="/images/Kali-dragon-icon.svg.png" />

        {/* BOTTOM CENTER */}
        <Icon style="left-1/2 -translate-x-1/2 bottom-[-30px]" img="/images/py.png" />

        {/* CENTER PROFILE */}
        <button className="absolute inset-0 m-auto w-[220px] h-[220px] p-1 border-2 rounded-full hover:border-gray-400/50 transition-all duration-500">
          <div className="w-full h-full rounded-full bg-white p-2 flex items-center justify-center hover:scale-95 transition-all">
            <img
              src="/images/charles.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

const Icon = ({ img, style }: { img: string; style: string }) => (
  <button
    className={`absolute ${style} rounded-full border border-gray-400/50 p-[2px] hover:scale-95 active:scale-95 transition-all duration-300`}
  >
    <span className="block w-[42px] h-[42px] rounded-full bg-white p-1">
      <img src={img} alt="" className="w-full h-full object-contain rounded-full" />
    </span>
  </button>
);

export default Card;
