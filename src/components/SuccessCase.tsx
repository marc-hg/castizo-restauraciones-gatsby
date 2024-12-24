import React, { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

interface SuccessCaseProps {
  title: string;
  era: string;
  initialState: string;
  clientNeeds: string;
  techniques: string[];
  materials: string[];
  timeInvested: string;
  challenges: string[];
  results: string;
  clientQuote?: string;
  beforeImage?: string;
  afterImage?: string;
}

const SuccessCase: React.FC<SuccessCaseProps> = ({
  title,
  era,
  initialState,
  clientNeeds,
  techniques,
  materials,
  timeInvested,
  challenges,
  results,
  clientQuote,
  beforeImage,
  afterImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative h-64 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {beforeImage && afterImage ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0">
                <img
                  src={afterImage}
                  alt="Después"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
              >
                <img
                  src={beforeImage}
                  alt="Antes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-y-0"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    handleSliderChange(e as any);
                  }
                }}
              >
                <div className="absolute inset-y-0 -ml-1 w-2 bg-white"></div>
                <div className="absolute top-1/2 -ml-4 -mt-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-xs font-bold">⇄</span>
                </div>
              </div>
            </div>
          ) : (
            <PlaceholderImage height={256} text={title} />
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{era}</p>
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
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative h-96 mb-6">
                {beforeImage && afterImage ? (
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0">
                      <img
                        src={afterImage}
                        alt="Después"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div
                      className="absolute inset-0"
                      style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
                    >
                      <img
                        src={beforeImage}
                        alt="Antes"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div
                      className="absolute inset-y-0"
                      style={{ left: `${sliderPosition}%` }}
                      onMouseDown={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          handleSliderChange(e as any);
                        }
                      }}
                    >
                      <div className="absolute inset-y-0 -ml-1 w-2 bg-white"></div>
                      <div className="absolute top-1/2 -ml-4 -mt-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-xs font-bold">⇄</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <PlaceholderImage height={384} text={title} />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Detalles del Proyecto</h3>
                  <ul className="space-y-2">
                    <li><span className="font-semibold">Era:</span> {era}</li>
                    <li><span className="font-semibold">Estado Inicial:</span> {initialState}</li>
                    <li><span className="font-semibold">Necesidades del Cliente:</span> {clientNeeds}</li>
                    <li><span className="font-semibold">Tiempo Invertido:</span> {timeInvested}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Técnicas Utilizadas</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {techniques.map((technique, index) => (
                      <li key={index}>{technique}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Materiales Empleados</h3>
                <ul className="list-disc list-inside space-y-1">
                  {materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Desafíos y Soluciones</h3>
                <ul className="list-disc list-inside space-y-1">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Resultados</h3>
                <p>{results}</p>
              </div>

              {clientQuote && (
                <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Testimonio del Cliente</h3>
                  <p className="italic">"{clientQuote}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessCase; 