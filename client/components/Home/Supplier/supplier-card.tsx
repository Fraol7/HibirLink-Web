// components/InfoCard.tsx
import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, buttonText, buttonUrl }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-3xl overflow-hidden border border-blue-200 p-8 text-left">
      <h3 className="text-xl font-bold mb-2 text-[#2D3D64]">{title}</h3>
      <p className="text-[#02376A] mb-4 text-md">{description}</p>
      <a href={buttonUrl} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600">
        {buttonText}
      </a>
    </div>
  );
};

export default InfoCard;
