import React, { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ value, options, onChange, style }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
      
        onChange(option); 
        setIsOpen(false); 
    };

    const borderColor = style && style.borderColor ? style.borderColor : '#f4f4f4'; // Use default border color if not provided

    return (
        <div 
            className={`custom-dropdown ${isOpen ? 'open' : ''}`} 
            style={style} 
        >
            <div 
                className={`dropdown-header ${isOpen ? 'open' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                style={{ borderColor }}
            >
                {value || "Select an option"} 
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;

