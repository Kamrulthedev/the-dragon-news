import moment from 'moment';
import { useEffect, useState } from 'react';

const MainHome = () => {

    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])


    return (
        <div>
            <h1 className="text-2xl font-bold">Dragon News Home:{news.length}</h1>
            <div className="flex items-center mt-6 ml-6">

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                <div>
                    <h1 className='font-bold'>Awlad Hossain</h1>
                    <p>{moment().format(" MMM D, YYYY")}</p>
                </div>
                
            </div>


        </div>
    );
};

export default MainHome;