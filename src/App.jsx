import React from 'react';
import LoginModal from './LoginModal.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoginModal onClose={() => console.log('Close clicked')} />
    </div>
  );
}
