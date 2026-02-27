import React from 'react';

export const CognitoLogo = ({ className = "w-10 h-10", pulse = false }: { className?: string; pulse?: boolean }) => (
    <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Outer C */}
        <path
            d="M 153 47 A 75 75 0 1 0 153 153"
            stroke="currentColor"
            strokeWidth="26"
            strokeLinecap="square"
        />

        {/* Left Branch */}
        <path
            d="M 70 145 L 70 95 L 90 75"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="square"
            strokeLinejoin="bevel"
        />
        <circle cx="95" cy="70" r="10" stroke="currentColor" strokeWidth="10" className={pulse ? "animate-pulse" : ""} />

        {/* Middle Branch */}
        <path
            d="M 95 145 L 95 115 L 110 100 L 125 100"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="square"
            strokeLinejoin="bevel"
        />
        <circle cx="132" cy="100" r="10" stroke="currentColor" strokeWidth="10" />

        {/* Right Branch */}
        <path
            d="M 120 145 L 120 135 L 125 130"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="square"
            strokeLinejoin="bevel"
        />
        <circle cx="132" cy="123" r="10" stroke="currentColor" strokeWidth="10" />
    </svg>
);
