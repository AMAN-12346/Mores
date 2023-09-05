const SecondaryInput = ({ name }) => {
  return (
    <div className="flex mt-4">
       <label className="rounded-full w-6 h-6 border border-gray-300 flex items-center justify-center cursor-pointer">
      <input type="checkbox" className="hidden" />
      <span className="rounded-full w-6 h-6 border border-gray-300 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M17.1409 5.15268C16.4061 3.59525 15.2424 2.28744 13.7764 1.36986C11.7373 0.0971999 9.32211 -0.307098 6.98071 0.23431C4.6393 0.772201 2.64594 2.19252 1.37329 4.23158C0.0971145 6.27065 -0.307182 8.68237 0.234224 11.0273C0.77563 13.3687 2.19594 15.3621 4.23149 16.6347C5.66586 17.5312 7.31118 18.0058 8.99516 18.0058H9.10415C10.7811 17.9847 12.4123 17.4996 13.8256 16.6066C14.237 16.3464 14.3565 15.805 14.0963 15.3937C13.8362 14.9824 13.2948 14.8628 12.8834 15.123C11.7479 15.8437 10.4331 16.2339 9.08305 16.2515C7.6979 16.2691 6.34438 15.8859 5.16313 15.1511C3.52133 14.1246 2.37876 12.5214 1.94633 10.6371C1.51391 8.75268 1.83735 6.81205 2.86391 5.17025C4.98032 1.7847 9.45922 0.751107 12.8448 2.86752C14.026 3.6058 14.9612 4.65697 15.5518 5.90854C16.1284 7.12846 16.3534 8.48198 16.2022 9.81792C16.1495 10.2996 16.494 10.7355 16.9791 10.7882C17.4608 10.841 17.8967 10.4964 17.9495 10.0113C18.1358 8.34838 17.8545 6.66791 17.1409 5.15268Z"
            fill="#C4C4C4"
          />
        </svg>
      </span>
      </label>
      <p className="ml-2 text-SearchResultText">{name}</p>
    </div>
  );
};

export default SecondaryInput;
