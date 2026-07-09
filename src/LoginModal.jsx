import React, { useState } from 'react';

export default function LoginModal({ onClose }) {
  const [phone, setPhone] = useState('');
  const [authMethod, setAuthMethod] = useState('phone');

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[446px] h-[579px] bg-white rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] pt-[40px] pb-[40px] px-[32px] relative flex flex-col justify-between box-border">
        <button
          onClick={onClose}
          className="absolute top-[24px] right-[24px] text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="Close"
        >
          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-[20px] select-none">
            <svg className="w-10 h-10 mr-2 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 13.5C10 16.5 8 25 12.5 31.5C15 35 20 35.5 23 33C17.5 34 13.5 31 12.5 25.5C11.5 19.5 14 14.5 17 13.5Z"
                fill="#e28626"
              />
              <path
                d="M20 20C17.5 23 15.5 28.5 16 32.5C16.2 34 17.5 34.5 18.5 34.5C21 34.5 22.5 28.5 23.5 24.5C24 22.5 23 20.5 20 20Z"
                fill="#0c3d59"
              />
              <circle cx="20.5" cy="15.5" r="3.5" fill="#0c3d59" />
              <path d="M20.5 9.5L25 12L20.5 14.5L16 12L20.5 9.5Z" fill="#0c3d59" />
              <path d="M17.5 12.8V15.5" stroke="#0c3d59" strokeWidth="1" />
              <path
                d="M16 32C19.5 31 23.5 25 25.5 18.5C26 16.5 26.5 13.5 26.5 13.5C26.5 13.5 25.2 16.5 23.5 20.5C21.5 25 18.5 29.5 16 32Z"
                fill="#0c3d59"
              />
              <path
                d="M28 10C28 10.8 28.7 11.5 29.5 11.5C28.7 11.5 28 12.2 28 13C28 12.2 27.3 11.5 26.5 11.5C27.3 11.5 28 10.8 28 10Z"
                fill="#e28626"
              />
            </svg>
            <span className="text-[26px] tracking-tight font-sans text-[#0c3d59]">
              <span className="font-normal">Degree</span>
              <span className="font-bold">FYD</span>
            </span>
          </div>

          <h2 className="text-[18px] font-semibold text-[#1a1a1a] text-center mb-[24px]">
            Sign in to get started
          </h2>

          <div className="flex justify-center items-center gap-[24px] mb-[20px]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="authMethod"
                checked={authMethod === 'phone'}
                onChange={() => {
                  setAuthMethod('phone');
                  setPhone('');
                }}
                className="sr-only"
              />
              <div className={`w-[16px] h-[16px] rounded-full border flex items-center justify-center ${authMethod === 'phone' ? 'border-[#0c3d59]' : 'border-gray-300'}`}>
                {authMethod === 'phone' && <div className="w-[8px] h-[8px] rounded-full bg-[#0c3d59]" />}
              </div>
              <span className={`text-[14px] ${authMethod === 'phone' ? 'font-medium text-[#0c3d59]' : 'text-[#6b7280]'}`}>Phone</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                name="authMethod"
                checked={authMethod === 'email'}
                onChange={() => {
                  setAuthMethod('email');
                  setPhone('');
                }}
                className="sr-only"
              />
              <div className={`w-[16px] h-[16px] rounded-full border flex items-center justify-center ${authMethod === 'email' ? 'border-[#0c3d59]' : 'border-gray-300'}`}>
                {authMethod === 'email' && <div className="w-[8px] h-[8px] rounded-full bg-[#0c3d59]" />}
              </div>
              <span className={`text-[14px] ${authMethod === 'email' ? 'font-medium text-[#0c3d59]' : 'text-[#6b7280]'}`}>Email</span>
            </label>
          </div>

          {authMethod === 'phone' ? (
            <div className="flex items-center w-full h-[48px] border border-[#e5e7eb] rounded-[8px] mb-[24px] focus-within:border-[#0c3d59] transition-colors">
              <div className="flex items-center gap-2 px-[12px] h-full border-r border-[#e5e7eb] select-none bg-gray-50 rounded-l-[8px]">
                <span className="flex flex-col justify-between w-5 h-3.5 border border-gray-100 overflow-hidden rounded-[1px] flex-shrink-0">
                  <span className="h-[33%] bg-[#ff9933]"></span>
                  <span className="h-[33%] bg-white flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-blue-900"></span>
                  </span>
                  <span className="h-[33%] bg-[#128807]"></span>
                </span>
                <span className="text-[14px] font-medium text-gray-700">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-full pl-[12px] pr-3 text-[14px] outline-none rounded-r-[8px] text-gray-800 placeholder-gray-400"
              />
            </div>
          ) : (
            <div className="flex items-center w-full h-[48px] border border-[#e5e7eb] rounded-[8px] mb-[24px] focus-within:border-[#0c3d59] transition-colors">
              <input
                type="email"
                placeholder="Enter email address"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-full px-[16px] text-[14px] outline-none rounded-[8px] text-gray-800 placeholder-gray-400"
              />
            </div>
          )}

          <button className="w-full h-[48px] bg-[#0c3d59] hover:bg-[#082c40] text-white rounded-[8px] font-semibold text-[15px] transition-colors mb-[16px]">
            Send OTP
          </button>

          <div className="text-center text-[14px] mb-[28px] select-none">
            <span className="text-[#6b7280]">New to Degreefyd...? </span>
            <span className="text-[#2563eb] font-semibold hover:underline cursor-pointer">Sign up</span>
          </div>
        </div>

        <div className="flex justify-between items-start border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="w-[36px] h-[36px] rounded-full bg-[#fff2e8] flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-[11px] text-[#4b5563] leading-tight font-medium">Sign up With Degreefyd</span>
          </div>

          <div className="w-[1px] h-[40px] bg-gray-200 self-center"></div>

          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="w-[36px] h-[36px] rounded-full bg-[#fff2e8] flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <span className="text-[11px] text-[#4b5563] leading-tight font-medium">Access to our tools & insights</span>
          </div>

          <div className="w-[1px] h-[40px] bg-gray-200 self-center"></div>

          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="w-[36px] h-[36px] rounded-full bg-[#fff2e8] flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-[11px] text-[#4b5563] leading-tight font-medium">Get free Career Counselling</span>
          </div>
        </div>
      </div>
    </div>
  );
}
