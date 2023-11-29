import moment from 'moment';

const Homes = ({ dragon }) => {
    const {title, img} = dragon;
    return (
        <div>
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
            <div>
            <h1>{title}</h1>
           
            </div>
        </div>
    );
};

export default Homes;