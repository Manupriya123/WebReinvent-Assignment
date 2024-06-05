import React from 'react';

interface CardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, body, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{header}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">{footer}</div>
    </div>
  );
};

export default Card;
