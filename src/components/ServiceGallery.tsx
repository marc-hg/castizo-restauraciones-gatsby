import React, { useState } from "react";
import { withPrefix } from "gatsby";

export interface ServiceStep {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServiceGalleryProps {
  title: string;
  steps: ServiceStep[];
  isModal?: boolean;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  title,
  steps,
  isModal = false,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Use taller image height for the servicios page
  const imageHeight = isModal ? "h-64" : "h-96";

  return (
    <div className={isModal ? "" : "mt-8"}>
      {/* Carousel */}
      <div className="relative">
        <img
          src={withPrefix(steps[currentStep].imageUrl)}
          alt={steps[currentStep].title}
          className={`w-full ${imageHeight} object-cover rounded-lg`}
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevStep}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextStep}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">{steps[currentStep].title}</h3>
        <p className="text-gray-600">{steps[currentStep].description}</p>
      </div>

      {/* Step indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`h-2 w-2 rounded-full ${
              currentStep === index ? "bg-amber-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-gray-500 italic text-center mt-6 border-t border-gray-200 pt-4">
        Nota: Los pasos descritos son orientativos y pueden variar según las
        necesidades específicas de cada pieza y proyecto.
      </p>
    </div>
  );
};

export default ServiceGallery;
