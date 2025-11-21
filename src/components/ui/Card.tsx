import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    return (
        <div className={`bg-white p-6 rounded-xl border border-gray-100 ${hover ? 'hover:shadow-lg hover:-translate-y-1' : 'shadow-sm'} transition-all duration-300 ${className}`}>
            {children}
        </div>
    );
};
