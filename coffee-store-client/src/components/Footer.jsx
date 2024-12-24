import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {

    const handleContact = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email')
        const message = form.get('message');
        const newContact = { name, email, message }
        console.log(newContact);

        fetch('https://coffee-store-server-eight-tau.vercel.app/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }



    return (
        <div>
            <footer className=" bg-base-200 text-base-content p-10 mt-20">
                <div className='footer max-w-6xl mx-auto grid justify-items-center  '>
                    <aside>
                        <img className='w-20' src="https://i.imghippo.com/files/ZoK5872EQ.png" alt="" />
                        <div className='md:flex'>
                            <div>
                                <h2 className='text-2xl font-bold text-[#331A15]'>Espresso Emporium</h2>

                                <p>
                                    Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                                <div className='flex mt-3'>
                                    <p className='text-3xl'><FaFacebook className='text-[#331A15]' /></p>
                                    <p className='text-3xl pl-4'><FaTwitter className='text-[#331A15]' /></p>
                                    <p className='text-3xl pl-4'><FaInstagram className='text-[#331A15]' /></p>
                                    <p className='text-3xl pl-4'><FaLinkedin className='text-[#331A15]' /></p>
                                </div>
                                <p className='text-2xl font-bold  text-[#331A15]'>Get in Touch</p>
                                <div className='space-y-3'>
                                    <p className='flex items-center'><FaPhoneAlt className='text-[#331A15]' /><span className='pl-2'>+88 01533 333 333</span></p>
                                    <p className='flex items-center'><IoMdMail className='text-[#331A15]' /><span className='pl-2'>info@gmail.com</span></p>
                                    <p className='flex items-center'><FaLocationDot className='text-[#331A15]' /><span className='pl-2'>72, Wall street, King Road, Dhaka</span></p>
                                </div>
                            </div>

                            <div className='md:pl-32'>
                                <h6 className=" text-2xl font-bold text-[#331A15]">Connect with Us</h6>
                                <form onSubmit={handleContact} className='space-y-4'>
                                    <input className='w-60 p-2 input-hover' type="text" name="name" placeholder='Name' id="" required />
                                    <br />
                                    <input className=' w-60 p-2 input-hover' type="email" name="email" placeholder='Email' id="" required />
                                    <br />
                                    <textarea className=' h-20 w-60 p-2 input-hover' name="message" placeholder='Message' id="" required></textarea>
                                    <br />
                                    <input type="submit" className='btn btn-outline' value="Send Message" />
                                </form>
                            </div>
                        </div>
                    </aside>



                </div>
            </footer>
        </div>
    );
};

export default Footer;