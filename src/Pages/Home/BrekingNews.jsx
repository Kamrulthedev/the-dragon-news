import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrekingNews = () => {
    return (
        <div className="flex shadow-lg mt-4 rounded-lg mb-6 h-[80px]  bg-gray-300	 ">
            <button className="btn mt-4 w-20  btn-secondary">Latest</button>
            <Marquee className="" pauseOnHover={true} speed={150}>
              <Link to={'/'}> The Dragon News on The Like a Dragon: Infinite Wealth Features the Biggest Yakuza Map Ever, 9 Times Bigger Than Kamurocho....</Link>
            </Marquee>
        </div>
    );
};

export default BrekingNews;