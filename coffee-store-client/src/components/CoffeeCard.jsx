import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = _id => {
    console.log(_id)

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



        console.log('delete conform')

        fetch(`https://coffee-store-server-eight-tau.vercel.app/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);

            }
          })
      }
    });
  }

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl  p-4  ">
      <figure>
        <img
          src={photo}
          alt="Movie" />
      </figure>
      <div className=" md:flex justify-between items-center w-full pr-4">
        <div>
          <h2 className="card-title"> {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>

        </div>

        <div className="card-actions md:justify-end">
          <div className="md:join join-vertical">
            <Link to={`/singleCoffee/${_id}`}>
            <button className="btn bg-[#E3B577]">View</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn bg-blue-400 mt-4 mb-4">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-400 ">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;