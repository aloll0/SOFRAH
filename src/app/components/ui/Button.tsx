

const Button = ({ text }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button className="flex justify-between items-center bg-[#EB1400] hover:bg-[#BA0000] text-white font-bold py-2 px-4 cursor-pointer rounded-full">
          <i className="mr-2 bg-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </i>
            {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
