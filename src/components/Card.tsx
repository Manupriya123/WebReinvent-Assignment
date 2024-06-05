import React from 'react';

interface CardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, body, footer }) => (
  <div className="border rounded shadow-md">
    <div className="border-b p-4">{header}</div>
    <div className="p-4">{body}</div>
    <div className="border-t p-4">{footer}</div>
  </div>
);

export default Card;
