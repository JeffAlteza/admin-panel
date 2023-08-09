"use client"
import React, { useState, useEffect, useRef } from 'react';

const MultiSelect = ({ options, selected }) => {
  // console.log(selected);
  const [selectedOptions, setSelectedOptions] = useState([selected]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white border border-gray-400 rounded-md p-2">
      <div className="flex flex-wrap gap-1 my-1">
        {selectedOptions.map((option) => (
          <span
            key={option}
            className="border border-primary bg-primary px-2 rounded-full text-white"
          >
            {option}
          </span>
        ))}
      </div>

      <div className="relative" ref={dropdownRef}>
        <p className="text-gray-700 cursor-pointer" onClick={toggleDropdown}>
          Select multiple options:
          <svg
            className={`h-4 w-4 ml-2 inline ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </p>
        {isDropdownOpen && (
          <ul className="mt-1 absolute bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full">
            {options.map((option) => (
              <li
                key={option}
                className={`py-1 px-3 cursor-pointer hover:bg-slate-200 ${
                  selectedOptions.includes(option)
                    ? 'text-primary'
                    : 'text-gray-800'
                }`}
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox checked:bg-primary h-3 w-3 text-primary"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionToggle(option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
