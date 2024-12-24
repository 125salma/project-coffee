import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


const SingleCoffee = () => {
    const coffee = useLoaderData();
  

    const { name, supplier, taste, category, details, photo } = coffee
    return (
        //single coffee details
        <div className=" my-8">
            <Link to="/">
            <button className="flex items-center mb-20 bg-[#F4F3F0] p-4"><FaArrowLeftLong className="mr-2" /> Back To Home</button>
            </Link>

            <div className="flex justify-center bg-[#F4F3F0]">
                <div>
                    <img className="w-80" src={photo} alt="" />
                </div>
                <div className="self-center">
                    <p className="font-bold text-[#331A15]">Name: <span className="text-black font-bold">{name}</span> </p>
                    <p className="font-bold text-[#331A15]">Supplier: <span className="text-black font-bold">{supplier}</span></p>
                    <p className="font-bold text-[#331A15]">Taste: <span className="text-black font-bold">{taste}</span></p>
                    <p className="font-bold text-[#331A15]">Category: <span className="text-black font-bold">{category}</span></p>
                    <p className="font-bold text-[#331A15]">Details: <span className="text-black font-bold">{details}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;
