import React, { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ name, value, options, onChange, style }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange({ target: { name, value: option } });
        setIsOpen(false); // Close dropdown after selection
    };

    const borderColor = style && style.borderColor ? style.borderColor : '#f4f4f4'; // Use default border color if not provided

    return (
        <div 
            className={`custom-dropdown ${isOpen ? 'open' : ''}`} 
            style={style} // Apply style prop to the main container
        >
            <div 
                className={`dropdown-header ${isOpen ? 'open' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                style={{ borderColor }} // Apply border color dynamically
            >
                {value ? value : "Select an option"} {/* Placeholder text */}
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
