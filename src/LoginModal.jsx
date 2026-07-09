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
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9583 0.625L0.625 13.9583M0.625 0.625L13.9583 13.9583" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-[20px] select-none">
            <svg className="w-10 h-10 mr-2 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 13.5C10 16.5 8 25 12.5 31.5C15 35 20 35.5 23 33C17.5 34 13.5 31 12.5 25.5C11.5 19.5 14 14.5 17 13.5Z"
                fill="#ED923D"
              />
              <path
                d="M20 20C17.5 23 15.5 28.5 16 32.5C16.2 34 17.5 34.5 18.5 34.5C21 34.5 22.5 28.5 23.5 24.5C24 22.5 23 20.5 20 20Z"
                fill="#0D3B59"
              />
              <circle cx="20.5" cy="15.5" r="3.5" fill="#0D3B59" />
              <path d="M20.5 9.5L25 12L20.5 14.5L16 12L20.5 9.5Z" fill="#0D3B59" />
              <path d="M17.5 12.8V15.5" stroke="#0D3B59" strokeWidth="1" />
              <path
                d="M16 32C19.5 31 23.5 25 25.5 18.5C26 16.5 26.5 13.5 26.5 13.5C26.5 13.5 25.2 16.5 23.5 20.5C21.5 25 18.5 29.5 16 32Z"
                fill="#0D3B59"
              />
              <path
                d="M28 10C28 10.8 28.7 11.5 29.5 11.5C28.7 11.5 28 12.2 28 13C28 12.2 27.3 11.5 26.5 11.5C27.3 11.5 28 10.8 28 10Z"
                fill="#ED923D"
              />
            </svg>
            <span className="text-[26px] tracking-tight font-sans text-[#0D3B59]">
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
              <div className={`w-[16px] h-[16px] rounded-full border flex items-center justify-center ${authMethod === 'phone' ? 'border-[#0D3B59]' : 'border-gray-300'}`}>
                {authMethod === 'phone' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#0D3B59"/>
                  </svg>
                )}
              </div>
              <span className={`text-[14px] ${authMethod === 'phone' ? 'font-medium text-[#0D3B59]' : 'text-[#6b7280]'}`}>Phone</span>
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
              <div className={`w-[16px] h-[16px] rounded-full border flex items-center justify-center ${authMethod === 'email' ? 'border-[#0D3B59]' : 'border-gray-300'}`}>
                {authMethod === 'email' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#0D3B59"/>
                  </svg>
                )}
              </div>
              <span className={`text-[14px] ${authMethod === 'email' ? 'font-medium text-[#0D3B59]' : 'text-[#6b7280]'}`}>Email</span>
            </label>
          </div>

          {authMethod === 'phone' ? (
            <div className="flex items-center w-full h-[48px] border border-[#e5e7eb] rounded-[8px] mb-[24px] focus-within:border-[#0D3B59] transition-colors">
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
            <div className="flex items-center w-full h-[48px] border border-[#e5e7eb] rounded-[8px] mb-[24px] focus-within:border-[#0D3B59] transition-colors">
              <input
                type="email"
                placeholder="Enter email address"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-full px-[16px] text-[14px] outline-none rounded-[8px] text-gray-800 placeholder-gray-400"
              />
            </div>
          )}

          <button className="w-full h-[48px] bg-[#0D3B59] hover:bg-[#092c42] text-white rounded-[8px] font-semibold text-[15px] transition-colors mb-[16px]">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                <path d="M17.5926 22.3333V19.963C17.5926 18.7056 17.0931 17.4998 16.2041 16.6108C15.315 15.7217 14.1092 15.2222 12.8519 15.2222H5.74074C4.48342 15.2222 3.27759 15.7217 2.38853 16.6108C1.49947 17.4998 1 18.7056 1 19.963V22.3333M14.037 5.74074C14.037 8.35898 11.9145 10.4815 9.2963 10.4815C6.67806 10.4815 4.55556 8.35898 4.55556 5.74074C4.55556 3.1225 6.67806 1 9.2963 1C11.9145 1 14.037 3.1225 14.037 5.74074Z" stroke="#ED923D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[11px] text-[#4b5563] leading-tight font-medium">Sign up With Degreefyd</span>
          </div>

          <div className="w-[1px] h-[40px] bg-gray-200 self-center"></div>

          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="w-[36px] h-[36px] rounded-full bg-[#fff2e8] flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.1349 5.8309C13.9292 6.04073 13.814 6.32284 13.814 6.61666C13.814 6.91048 13.9292 7.19259 14.1349 7.40242L15.9309 9.19844C16.1407 9.40412 16.4229 9.51932 16.7167 9.51932C17.0105 9.51932 17.2926 9.40412 17.5024 9.19844L21.7343 4.96656C22.2988 6.21389 22.4697 7.60361 22.2242 8.95053C21.9788 10.2974 21.3288 11.5376 20.3607 12.5057C19.3926 13.4738 18.1524 14.1238 16.8055 14.3693C15.4586 14.6147 14.0689 14.4438 12.8216 13.8793L5.06498 21.6359C4.61842 22.0825 4.01275 22.3333 3.38121 22.3333C2.74968 22.3333 2.144 22.0825 1.69744 21.6359C1.25088 21.1893 1 20.5837 1 19.9521C1 19.3206 1.25088 18.7149 1.69744 18.2684L9.45401 10.5118C8.88957 9.26446 8.71867 7.87473 8.96408 6.52782C9.20949 5.1809 9.85956 3.94076 10.8277 2.97266C11.7958 2.00457 13.0359 1.3545 14.3828 1.10909C15.7297 0.863679 17.1194 1.03458 18.3668 1.59902L14.1349 5.8309Z" stroke="#ED923D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[11px] text-[#4b5563] leading-tight font-medium">Access to our tools & insights</span>
          </div>

          <div className="w-[1px] h-[40px] bg-gray-200 self-center"></div>

          <div className="flex flex-col items-center text-center max-w-[100px] flex-1">
            <div className="w-[36px] h-[36px] rounded-full bg-[#fff2e8] flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.7735 1C15.9544 1.2298 17.9915 2.1971 19.548 3.74192C21.1045 5.28674 22.0871 7.31656 22.3333 9.49567M13.7735 5.27994C14.8258 5.48745 15.7915 6.00649 16.5451 6.76969C17.2988 7.53289 17.8056 8.50501 17.9999 9.55987M22.28 16.9643V20.1742C22.2812 20.4722 22.2201 20.7672 22.1008 21.0402C21.9814 21.3132 21.8063 21.5583 21.5867 21.7598C21.3671 21.9612 21.1079 22.1146 20.8256 22.2101C20.5433 22.3056 20.2442 22.341 19.9474 22.3142C16.6549 21.9564 13.4922 20.8313 10.7134 19.0293C8.12818 17.3866 5.93632 15.1947 4.29354 12.6094C2.48524 9.81806 1.3599 6.63998 1.00868 3.33267C0.981946 3.03678 1.01711 2.73857 1.11194 2.45702C1.20677 2.17547 1.35918 1.91675 1.55948 1.69733C1.75977 1.47791 2.00356 1.3026 2.27532 1.18256C2.54708 1.06252 2.84086 1.00038 3.13795 1.0001H6.34791C6.86718 0.994993 7.37059 1.17888 7.76431 1.51748C8.15803 1.85608 8.4152 2.32629 8.48787 2.84048C8.62336 3.86773 8.87462 4.87636 9.23686 5.84713C9.38082 6.2301 9.41198 6.64632 9.32664 7.04646C9.24131 7.44659 9.04305 7.81388 8.75537 8.1048L7.39649 9.46368C8.91967 12.1424 11.1376 14.3604 13.8164 15.8836L15.1753 14.5247C15.4662 14.237 15.8335 14.0388 16.2336 13.9534C16.6338 13.8681 17.05 13.8993 17.4329 14.0432C18.4037 14.4055 19.4123 14.6567 20.4396 14.7922C20.9594 14.8655 21.434 15.1273 21.7734 15.5278C22.1127 15.9283 22.293 16.4395 22.28 16.9643Z" stroke="#ED923D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[11px] text-[#4b5563] leading-tight font-medium">Get free Career Counselling</span>
          </div>
        </div>
      </div>
    </div>
  );
}
