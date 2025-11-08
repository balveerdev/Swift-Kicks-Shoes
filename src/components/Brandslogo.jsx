import React from 'react';

const Brandslogo = () => {
  return (
    <div className="w-full bg-black py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-y-6 px-4">
        {[
          "/Swift-Kicks-Shoes/images/shopping.png",
          "/Swift-Kicks-Shoes/images/ChatGPT_Image_Jun_30__2025__11_47_25_PM-removebg-preview.png",
          "/Swift-Kicks-Shoes/images/ChatGPT_Image_Jun_30__2025__11_39_45_PM-removebg-preview.png",
          "/Swift-Kicks-Shoes/images/ChatGPT_Image_Jun_30__2025__11_49_40_PM-removebg-preview.png",
          "/Swift-Kicks-Shoes/images/ChatGPT Image Jun 30, 2025, 11_44_58 PM.png",
          "/Swift-Kicks-Shoes/images/ChatGPT_Image_Jul_1__2025__10_06_04_AM-removebg-preview.png",
        ].map((src, index) => (
          <a
            key={index}
            href="#"
            className="w-1/6 max-[1200px]:w-1/3 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Brand ${index + 1}`}
              className="max-h-[60px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Brandslogo;
