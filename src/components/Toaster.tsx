// // components/Toaster.js
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Toaster = () => {
//   const showToast = () => {
//     toast.success("This is a sample toast notification!");
//   };

//   return (
//     <div>
//       <button
//         onClick={showToast}
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Show Toast
//       </button>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//       />
//     </div>
//   );
// };

// export default Toaster;

// components/VideoToaster.js
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ReactPlayer from "react-player";

// const VideoToaster = () => {
//   const showVideoToast = () => {
//     const videoUrl =
//       "https://res.cloudinary.com/staging-ilmoore/video/upload/v1694416092/video/Media1_sucejf.mp4";

//     toast.info(
//       <div>
//         <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
//       </div>,
//       {
//         autoClose: 10000, // Close after 10 seconds
//         closeButton: true,
//         closeOnClick: true,
//       }
//     );
//   };

//   return (
//     <div>
//       <button
//         onClick={showVideoToast}
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Show Video Toast
//       </button>
//       <ToastContainer
//         position="top-center"
//         autoClose={false}
//         closeOnClick={false}
//       />
//     </div>
//   );
// };

// export default VideoToaster;

// components/VideoToaster.js
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ReactPlayer from "react-player";

// const VideoToaster = () => {
//   const showVideoToast = () => {
//     const videoUrl = "https://www.example.com/sample-video.mp4";

//     toast.info(
//       <div>
//         <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
//       </div>,
//       {
//         autoClose: 10000, // Close after 10 seconds
//         closeButton: true,
//         closeOnClick: true,
//         position: "top-center", // Set position to top-center
//         containerId: "video-toast-container", // Add a container ID for styling
//       }
//     );
//   };

//   return (
//     <div>
//       <button
//         onClick={showVideoToast}
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Show Video Toast
//       </button>
//       <ToastContainer
//         position="top-center"
//         autoClose={false}
//         closeOnClick={false}
//         containerId="video-toast-container" // Use the same container ID
//         className="mt-10"
//       />
//     </div>
//   );
// };

// export default VideoToaster;

// components/VideoPopup.js

// import { Fragment, useRef, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// export default function Example() {
//   const [open, setOpen] = useState(true);

//   const cancelButtonRef = useRef(null);

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={setOpen}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                 <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <ExclamationTriangleIcon
//                         className="h-6 w-6 text-red-600"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-base font-semibold leading-6 text-gray-900"
//                       >
//                         Deactivate account
//                       </Dialog.Title>
//                       <div className="mt-2">
//                         <p className="text-sm text-gray-500">
//                           Are you sure you want to deactivate your account? All
//                           of your data will be permanently removed. This action
//                           cannot be undone.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                   <button
//                     type="button"
//                     className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
//                     onClick={() => setOpen(false)}
//                   >
//                     Deactivate
//                   </button>
//                   <button
//                     type="button"
//                     className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     onClick={() => setOpen(false)}
//                     ref={cancelButtonRef}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }

// pages/index.js
import React, { useState } from "react";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Video Modal Example</h1>
      <button
        onClick={openVideoModal}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Video Modal
      </button>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl="https://www.example.com/sample-video.mp4"
      />
    </div>
  );
}
