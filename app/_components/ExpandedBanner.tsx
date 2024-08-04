import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

interface ExpandedBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onClose: () => void;
  onEdit: () => void;
}

const ExpandedBanner: React.FC<ExpandedBannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onClose,
  onEdit,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative p-8 bg-cover bg-center shadow-lg rounded-lg max-w-xl w-full mx-4"
        style={{ backgroundImage: `url(${background})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-700 mb-2">{title}</h2>
          <p className="text-lg text-gray-600 mb-4 px-4">{description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 shadow-lg">
            {cta}
          </button>
          <button
            onClick={onClose}
            className="absolute top-4 left-4  p-2 rounded-full transition-colors duration-300 shadow-lg"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-purple-500 text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedBanner;
