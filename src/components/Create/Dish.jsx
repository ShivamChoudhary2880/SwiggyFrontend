import React,{useState} from 'react';
import axios from 'axios';

function Dish() {

    const [formData, setFormData] = useState({
        name: "",
        image: [],
    });

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;
        if (type === 'file') {
            setFormData((prev) => ({
                ...prev,
                image: files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('image', formData.image);

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/api/dish`,
            data
            );
            
            if (response.data.success) {
                alert('Dish created successfully!')
            } else {
                alert('failed to create Dish.')
            }
        } catch (error) {
            console.error("error create dish", error);
            alert('server errro please try again later');
        }
    }

    return (
      <div className="max-w-4xl bg-white shadow-xl border border-orange-200 runded-xl mt-10 mx-auto p-10">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">
              Create Dish
            </h1>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Dish Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Dish name"
              className="w-full  border border-gray-300 pl-3 mt-[10px]"
            />
          </div>
          <div>
            <label>Upload dish Images</label>
            <input
              type="file"
              name="image"
              accept='image/*'
              onChange={handleChange}
              placeholder="select file"
              className="mt-[20px] w-full bg-orange-50 border border-dashed border-orange-300 rounded-lg px-4 py-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-6-- hover:file:bg-orange-200 cursor-pointer"
            />
          </div>
          <div>
            <button
                type="submit"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 mt-[40px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
}
export default Dish;