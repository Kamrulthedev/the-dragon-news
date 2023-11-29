
import { Link } from 'react-router-dom';

const Homes = ({ dragon }) => {
    const { title, thumbnail_url, details,_id, image_url } = dragon;
    return (
        <div>

            <div
                className="p-4 mt-8  rounded-xl bg-white bg-clip-border text-gray-700 shadow">
                <div className="m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                        <div>
                          
                        </div>
                    </div>
                    <p className='text-xl font-semibold'>{title}</p>
                    <img className='w-full p-6 h-96' src={image_url} alt="" />
                </div>

                <div className="border-b-2">
                  <div className='mb-8'>
                  {
                    details.length > 200  ? <p>{details.slice(0,200)}<Link to={`/dragon/${_id}`} className='text-blue-600 font-bold'> Read More...</Link></p> : <p>{details}</p>
                   }
                  </div>

                </div>
            </div>
        </div>
    );
};

export default Homes;