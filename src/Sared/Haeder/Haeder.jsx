import logo from '../../assets/logo.png';
import moment from 'moment';

const Haeder = () => {
    return (
        <div className=''>
        
       <div className='flex  justify-center mt-8'>
       <img  src={logo} alt="" />
       </div>
          <div className='text-center'>
            <p> Journalism Without Fear or Favour</p>
             <h2 className='text-xl '>{moment().format("dddd, MMMM D, YYYY")}</h2>
          </div>
        </div>
    );
};



export default Haeder;