import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

interface EditBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  onSave: (
    title: string,
    description: string,
    cta: string,
    image: string
  ) => void;
  onClose: () => void;
}

const EditBanner: React.FC<EditBannerProps> = ({
  title,
  description,
  cta,
  image,
  onSave,
  onClose,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImage, setNewImage] = useState(image);

  const handleSave = () => {
    onSave(newTitle, newDescription, newCta, newImage);
    onClose();
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-8 w-full max-w-lg rounded-lg shadow-lg">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Edit Banner
        </h2>
        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="CTA"
          value={newCta}
          onChange={(e) => setNewCta(e.target.value)}
        />
        <div className="flex items-center mb-4">
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Image URL"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <label className="ml-4 p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover: from-blue-500 hover: to-purple-500 cursor-pointer">
            <FontAwesomeIcon icon={faUpload} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-5 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBanner;
