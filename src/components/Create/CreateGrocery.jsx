import React from 'react'

const CreateGrocery = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-4xl shadow-xl bg-white border border-green-500 rounded-xl mt-10 mx-auto p-10">
        <div>
          <h1 className="text-4xl font-bold text-green-500 text-center">
            Create Grocery item
          </h1>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Grocery Name
          </label>
          <input
            type="text"
            placeholder="Enter grocery name"
            className="w-full border border-gray-300 pl-3 mt-3 py-2 rounded-lg"
          />
        </div>
        <div className='mb-6'>
        <label>Upload Grocery image</label>
        <input type="file"
            accept='image/*'
            className='mt-3 w-full bg-green-50 border border-dashed border-green-300 rounded-lg px-4 py-2 text-gray-700
            file:mr-4 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100
            file:text-green-600 hover:file:bg-green-200 cursor-pointer'
        />
              </div>
              <div>
                  <button
                      type='button'
                      className='cursor-pointer bg-green-500  hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 mt-3 w-full'
                  >
                      Submit
                  </button>
              </div>
      </div>
    </div>
  );
}

export default CreateGrocery
