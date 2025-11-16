import React, { useState } from "react";
import ImgCat from "./data/images";
import './App.css'

export default function Gallery() {
  const [modal, setModal] = useState({ open: false, src: "", name: "" });

  const openModal = (src, name, desc) => {
    setModal({ open: true, src, name, desc });
  };

  const closeModal = () => {
    setModal({ open: false, src: "", name: "" });
  };

  return (
    <div className="p-6 space-y-10">
      {/*Image Grid-1  */}
      {Object.keys(ImgCat).map((SHANE_WEBER) => (
        <div key={SHANE_WEBER} className="">
          <div className="flex justify-between items-center flex-wrap py-4">
            <h1 className="text-5xl font-bold capitalize">{SHANE_WEBER}</h1>
            <h1 className="sm:pt-3">
              effect 01: straight linear paths, smooth easing, clean timing, minimal rotation.
            </h1>
          </div>
          {/* Image Grid -1 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8  gap-4">
            {ImgCat[SHANE_WEBER].map((item) => (
              <div key={item.id} className="flex flex-col items-end">
                <img
                  src={item.src}
                  alt={item.name}
                  style={{ height: "230px", width: "180px", }}
                  className="cursor-pointer hover:scale-105 transition-transform hover:opacity-65"
                  onClick={() => openModal(item.src, item.name, item.desc)}
                />
                <p className="text-sm font-bold mt-2 text-right">{item.name}</p>
              </div>
             ))}
            </div>
          </div>
        ))}

        
     {/* Modal */}
{modal.open && (
  <div
    className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50"
    onClick={closeModal}
  >
      <div
        className=" bg-white rounded-xl shadow-xl flex w-[80%] h-[80%] overflow-hidden animate-smoothExpand"
        onClick={(e) => e.stopPropagation()}
      >

      {/* LEFT — IMAGE */}
      <div className="w-2/3  flex justify-center items-center">
        <img
          src={modal.src}
          className="max-h-full object-contain"
        />
      </div>

      {/* RIGHT — INFO */}
      <div className="w-1/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{modal.name}</h2>
          <p className="text-sm text-gray-600">{modal.desc}</p>
        </div>

        <button
          className="text-white bg-red-600 px-4 py-2 rounded mt-6 self-end"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
