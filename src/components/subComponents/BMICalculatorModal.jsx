// BMICalculatorModal.js
import React from 'react';
import ReactDOM from 'react-dom';
import BMICalculator from './BMICalculator';

const BMICalculatorModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <BMICalculator onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default BMICalculatorModal;
