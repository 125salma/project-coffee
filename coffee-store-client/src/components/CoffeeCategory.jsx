import Marquee from "react-fast-marquee";


const CoffeeCategory = () => {
    return (
        <div className=" text-center bg-[#ECEAE3] mb-20">
            <Marquee pauseOnHover={true} speed={100}>
                <div className="border ml-4 w-60">
                    <img src="https://i.imghippo.com/files/xsEm1980Rqk.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold">Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="border ml-4 w-60">
                    <img src="https://i.imghippo.com/files/pcPA9802Ghc.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold">High Quality</h2>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="border ml-4 w-60">
                    <img src="https://i.imghippo.com/files/eYa5779cg.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold">Pure Grades</h2>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="border  ml-4 w-60">
                    <img src="https://i.imghippo.com/files/MVys5923TJY.png" className="mx-auto" alt="" />
                    <h2 className="text-2xl font-bold">Proper Roasting</h2>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </Marquee>


        </div>
    );
};

export default CoffeeCategory;