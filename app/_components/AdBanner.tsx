import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface AdBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
  onExpand: () => void;
}

const AdBanner: React.FC<AdBannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onEdit,
  onExpand,
}) => {
  return (
    <div
      className="w-full relative p-4 bg-cover bg-center shadow-2xl rounded-lg overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${background})` }}
      onClick={onExpand}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
        />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 px-4">{description}</p>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 shadow-lg">
          {cta}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="absolute top-4 right-4  p-2 rounded-full transition-colors duration-300 shadow-lg"
        >
          <FontAwesomeIcon
            icon={faEdit}
            className="text-purple-500 hover:text-gray-300"
          />
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
