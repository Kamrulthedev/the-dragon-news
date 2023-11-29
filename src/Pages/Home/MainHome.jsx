
import { useEffect, useState } from 'react';
import Homes from './Homes';

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
           
                <div>
                    {
                        news.map(dragon =><Homes key={news.id} dragon={dragon}></Homes>)
                    }
                </div>
            


        </div>
    );
};

export default MainHome;