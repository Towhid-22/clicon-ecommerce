"use client"
import { Button } from '@/components/ui/button';
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const page = () => {
const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => setIsOpen(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  
  return (
  <ul>
      <li
        onClick={togglePopup}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        All Category <IoIosArrowDown className="w-4 h-4" />
      </li>

      {isOpen && (
        <li
          ref={popupRef}
          className="absolute top-20 left-20 bg-white border border-gray-300 shadow-lg p-4 rounded"
        >
          <p>This is a popup! Click outside to close it.</p>
        </li>
      )}
    </ul>


  )
}

export default page