import React from "react";

function FileUpload() {
  return (
    <div>
      <div className="flex justify-center mt-8 ">
        <div className="max-w-2xl rounded-lg shadow-xl ">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-800">
              File Upload
            </label>
            <div className="flex items-center justify-center w-full cursor-pointer">
              <label className="cursor-pointer flex flex-col w-full h-32 border-4 border-blue-200 border-dashed">
                <div className="flex flex-col items-center justify-center pt-7 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-800 group-hover:text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-800 hover:text-black group-hover:text-black">
                    Attach a file
                  </p>
                </div>
                <input type="file" className="opacity-0" />
              </label>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <button className="w-full px-4 py-2 text-black bg-blue-500 rounded hover:bg-blue:900 shadow-xl">
              Add File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
