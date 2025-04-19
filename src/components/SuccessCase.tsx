import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PlaceholderImage from "./PlaceholderImage";
import { getImagePath } from "../utils/imageUtils";

interface SuccessCaseProps {
  title: string;
  initialState: string;
  clientNeeds: string;
  techniques: string[];
  materials: string[];
  results: string;
  beforeImage?: string;
  afterImage?: string;
}

const SuccessCase: React.FC<SuccessCaseProps> = ({
  title,
  initialState,
  clientNeeds,
  techniques,
  materials,
  results,
  beforeImage,
  afterImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        handleSliderChange(e.clientX, sliderRef.current);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && sliderRef.current && e.touches[0]) {
        e.preventDefault(); // Prevent scrolling while dragging
        handleSliderChange(e.touches[0].clientX, sliderRef.current);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
      document.addEventListener("touchcancel", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [isDragging]);

  const startDragging = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const renderComparisonSlider = (containerHeight: number) => {
    if (!beforeImage || !afterImage) {
      return <PlaceholderImage height={containerHeight} text={title} />;
    }

    return (
      <div className="relative w-full h-full" ref={sliderRef}>
        {/* After image - fixed in background */}
        <div className="absolute inset-0">
          <img
            src={getImagePath(afterImage)}
            alt="Después"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            Después
          </div>
        </div>

        {/* Before image - clipped based on slider position */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={getImagePath(beforeImage)}
            alt="Antes"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            Antes
          </div>
        </div>

        {/* Slider control */}
        <div
          className="absolute inset-y-0 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={startDragging}
          onTouchStart={startDragging}
          onClick={(e) => e.stopPropagation()} // Prevent opening modal when clicking the slider
        >
          <div className="absolute inset-y-0 -ml-1 w-2 bg-white"></div>
          <div className="absolute top-1/2 -ml-4 -mt-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="text-xs font-bold">⇄</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative h-64 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {renderComparisonSlider(256)}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Ver Detalles
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative h-96 mb-8">
                {renderComparisonSlider(384)}
              </div>

              {/* Project Overview */}
              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-amber-800">
                  Descripción del Proyecto
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-amber-700">Estado Inicial</h4>
                    <p className="mt-1">{initialState}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-700">
                      Necesidades del Cliente
                    </h4>
                    <p className="mt-1">{clientNeeds}</p>
                  </div>
                </div>
              </div>

              {/* Two-column section for techniques and materials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Techniques */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 border-b pb-2">
                    Técnicas Utilizadas
                  </h3>
                  <ul className="space-y-2">
                    {techniques.map((technique, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 border-b pb-2">
                    Materiales Empleados
                  </h3>
                  <ul className="space-y-2">
                    {materials.map((material, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-3 text-green-800">
                  Resultados
                </h3>
                <p className="text-green-900">{results}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessCase;
