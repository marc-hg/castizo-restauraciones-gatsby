import React from "react";
import { getImagePath } from "../utils/imageUtils";

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imagePlaceholder?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  imagePlaceholder,
  children,
  onClick,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      {(imageUrl || imagePlaceholder) && (
        <div className="bg-amber-100 h-48 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={getImagePath(imageUrl)}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-amber-800">{imagePlaceholder}</span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-gray-500 mb-4">{subtitle}</p>}
        {description && <p className="text-gray-600">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
