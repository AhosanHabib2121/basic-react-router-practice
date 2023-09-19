import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className =" border-2 border-lime-700 mx-10">
                <h2 className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda id excepturi totam numquam adipisci repudiandae quidem culpa quaerat praesentium expedita, doloremque sapiente ex, vel velit odio maxime voluptas consequatur sit!</h2> 
            </div>
            <div className='mx-10 mt-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;