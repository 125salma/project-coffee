import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from "react-icons/ri";


const ContactUser = () => {
    const loadedcontacts = useLoaderData()
    const [contacts, setContacts] = useState(loadedcontacts)
    console.log(contacts)


    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-eight-tau.vercel.app/contact/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = contacts.filter(use => use._id !== _id);
                        setContacts(remaining)
                    })
            }
        });



    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Request Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            contacts.map(contact =>
                                <tr key={contact._id}>
                                    <th>1</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>

                                    <td>
                                        <button onClick={() => handleDelete(contact._id)} className="btn"><RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactUser;