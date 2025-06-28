/*
import React, { useRef, useState } from "react";
import { LuUpload, LuUser, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="text-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {image ? (
        <div className="w-20 h-20 flex items-center justify-center flex-col gap-2">
          <img
            src={previewUrl}
            alt="profile photo"
            className="w-20 h-20 object-cover rounded-full"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="text-red-500 hover:text-red-700"
          >
            <LuTrash />
          </button>
        </div>
      ) : (
        <div className="w-20 h-20 flex flex-col items-center justify-center gap-2">
          <LuUser className="text-gray-400 text-4xl" />
          <button
            type="button"
            onClick={onChooseFile}
            className="text-blue-500 hover:text-blue-700"
          >
            <LuUpload />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;

export default ProfilePhotoSelector;
*/

/*
import React, { useRef, useState } from "react";
import { LuUpload, LuUser, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="text-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {image ? (
        <div className="w-20 h-20 flex items-center justify-center flex-col gap-2">
          <img
            src={previewUrl}
            alt="profile photo"
            className="w-20 h-20 object-cover rounded-full"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="text-red-500 hover:text-red-700"
          >
            <LuTrash />
          </button>
        </div>
      ) : (
        <div className="w-20 h-20 flex flex-col items-center justify-center gap-2">
          <LuUser className="text-gray-400 text-4xl" />
          <button
            type="button"
            onClick={onChooseFile}
            className="text-blue-500 hover:text-blue-700"
          >
            <LuUpload />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
*/

import React, { useRef, useState } from "react";
import { LuUpload, LuUser, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="text-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {image ? (
        <div className="w-24 h-24 mx-auto rounded-full relative">
          <img
            src={previewUrl}
            alt="profile photo"
            className="w-24 h-24 object-cover rounded-full border-4 border-purple-500"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -bottom-2 -right-2 bg-white border border-gray-300 rounded-full p-1 text-red-500 hover:text-red-700 shadow-sm"
          >
            <LuTrash size={16} />
          </button>
        </div>
      ) : (
        <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center relative">
          <LuUser className="text-purple-400 text-4xl" />
          <button
            type="button"
            onClick={onChooseFile}
            className="absolute bottom-0 right-0 bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full shadow-md"
          >
            <LuUpload size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
