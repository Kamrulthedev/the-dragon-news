import { AiTwotoneAccountBook } from "react-icons/ai";
import moment from 'moment';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const LeftSideNav = () => {

    const [categorie, setCategorie] = useState([]);


    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategorie(data))
    },[])


    return (
        <div>
             <h1 className="text-2xl font-bold">All Caterogy</h1>
            
             <div className="space-y-10 mt-8">
                {
                    categorie.map(category => <Link
                        to={`/category/${category.id}`}
                        className="block ml-12 text-xl font-semibold text-gray-400"
                     key={category.id}>
                        {category.name}
                        
                        </Link>)
                }
             </div>
             <div className="mt-6">
                <img src={img1} alt="" />
                <p className="mb-4 font-semibold">Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</p>
                <div className="flex justify-between">
                <p className="font-bold">Sports</p>
                    <p className="flex items-center text-gray-400">
                      <AiTwotoneAccountBook></AiTwotoneAccountBook>
                      <p>{moment().format(" MMM D, YYYY")}</p>
                    </p>
                </div>
             </div>
             <div className="mt-6">
                <img src={img2} alt="" />
                <p className="mb-4 font-semibold">Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</p>
                <div className="flex justify-between">
                <p className="font-bold">Sports</p>
                <p className="flex items-center text-gray-400">
                      <AiTwotoneAccountBook></AiTwotoneAccountBook>
                      <p>{moment().format(" MMM D, YYYY")}</p>
                    </p>
                </div>
             </div>
             <div className="mt-6">
                <img src={img3} alt="" />
                <p className="mb-4 font-semibold">Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</p>
                <div className="flex justify-between">
                    <p className="font-bold">Sports</p>
                    <p className="flex items-center text-gray-400">
                      <AiTwotoneAccountBook></AiTwotoneAccountBook>
                      <p>{moment().format(" MMM D, YYYY")}</p>
                    </p>
                </div>
             </div>
        </div>
    );
};

export default LeftSideNav;