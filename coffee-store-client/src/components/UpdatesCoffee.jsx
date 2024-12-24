import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatesCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const quantity = form.get('quantity');
        const supplier = form.get('supplier');
        const taste = form.get('taste');
        const category = form.get('category');
        const details = form.get('details');
        const photo = form.get('photo')
        const UpdatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(UpdatedCoffee)


        //send data to the server
        fetch(`https://coffee-store-server-eight-tau.vercel.app/coffee/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>


            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className=" md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form supplier row */}
                <div className=" md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form category and details row */}
                <div className=" md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form photo url row */}
                <div className="">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>

                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C]" />
            </form>

        </div>
    );
};

export default UpdatesCoffee;