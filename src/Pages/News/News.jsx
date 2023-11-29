import Haeder from "../../Sared/Haeder/Haeder";
import RigthSideNav from "../../Sared/RigthSideNav/RigthSideNav";



const News = () => {
    return (
        <div>

          <Haeder></Haeder>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            <h1 className="mt-6 ml-20">Dragon News</h1>
            <div className="lg:col-span-2"></div>
            <div className="">
                <RigthSideNav></RigthSideNav>
            </div>
            </div>
        </div>
    );
};

export default News;