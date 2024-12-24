
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'
import CoffeePicture from './components/CoffeePicture';
import Banner from './components/Banner/Banner';
import CoffeeCategory from './components/CoffeeCategory';
import { FaCoffee } from "react-icons/fa";
import TheoremText from './components/TheoremText';


function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <div>
        <TheoremText></TheoremText>
        <Banner></Banner>
        <CoffeeCategory></CoffeeCategory>
        <div>
          <div >
            <p className='text-center'>--- Sip & Savor --- {coffees.length}</p>
            <h3 className='text-4xl text-[#331A15] text-center font-bold'>Our Popular Products</h3>
            <div className=' justify-items-center text-center	mt-4'>
              <Link to="/addCoffee"><button className='bg-[#D2B48C] p-4 btn text-white border border-[#331A15]'>Add Coffee <FaCoffee className='text-[#331A15]' />
              </button></Link>

            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6 mt-8 mb-20'>
            {
              coffees.map(coffee =>
                <CoffeeCard key={coffee._id}
                  coffees={coffees}
                  setCoffees={setCoffees}
                  coffee={coffee}></CoffeeCard>)
            }
          </div>
        </div>

        <div className='mb-20 '>
          <CoffeePicture></CoffeePicture>

        </div>
      </div>
    </>
  )
}

export default App
