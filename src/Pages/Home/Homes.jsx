import moment from 'moment';

const Homes = ({ dragon }) => {
    const { title, thumbnail_url } = dragon;
    return (
        <div>
            <div>

            </div>
            <div
                className=" mt-8  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <p className='text-xl font-semibold'>{title}</p>
                  <img className='w-full p-6 h-96' src={thumbnail_url} alt="" />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        UI/UX Review Check
                    </h4>
                   
                </div>
                <div className="flex items-center justify-between p-6">
                    
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        January 10
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Homes;