import React, { useState } from "react";

interface CarouselStep {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  steps: CarouselStep[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  steps,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Ver Más
        </button>
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

              {/* Carousel */}
              <div className="relative">
                <img
                  src={steps[currentStep].imageUrl}
                  alt={steps[currentStep].title}
                  className="w-full h-64 object-cover rounded-lg"
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
                <h3 className="text-xl font-bold mb-2">
                  {steps[currentStep].title}
                </h3>
                <p className="text-gray-600">
                  {steps[currentStep].description}
                </p>
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
                Nota: Los pasos descritos son orientativos y pueden variar según
                las necesidades específicas de cada pieza y proyecto.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
