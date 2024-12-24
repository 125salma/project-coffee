import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">

            <Link to="/">
                <button className="btn border-[#331A15] text-[#331A15] mt-8">Go to Home</button>
            </Link>
            <img className="mx-auto" src="https://i.imghippo.com/files/VSY6155Jzk.gif" alt="" />
        </div>
    );
};

export default ErrorPage;