// components/VideoModal.js
import React from "react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center`}
    >
      <div className="relative max-w-lg mx-auto p-4 bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl cursor-pointer"
        >
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title="Video Modal"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
