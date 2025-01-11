import React from 'react';

interface HeroProps {
  title: string;
  imageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-blue-600 text-white relative min-h-full max-h-full max-w-full min-w-full flex flex-col justify-center items-center ">
      <div className="flex-shrink-0 min-w-full max-w-full min-h-96 ">
        <img
          src={imageUrl}
          alt="Hero Banner"
          className="min-w-full object-cover  shadow-md"
        />
      </div>
      <h1 className="text-8xl font-bold absolute ">{title}</h1>
    </div>
  );
};
