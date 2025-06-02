import { GiLargeDress } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { GiShirt } from "react-icons/gi";
import { GiDiscGolfBag } from "react-icons/gi";

const Dashboard = () => {
  return (
    <>
    <div className="right-content w-100">
        <div className="row dashboardboxwrapperRow">
          <div className='col-md-8'>
        <div className="dashboardboxwrapper d-flex">
              <div className='dashboardbox color={"green"}'>Mens
                 <span className="number">500</span>
                <span className="icon"><PiShirtFoldedFill/></span>
              </div>

               <div className='dashboardbox color={"green"}'>Womens
                <span className="number">700</span>
                <span className="icon"><GiLargeDress /></span>
               </div>
               <div className='dashboardbox color={"green"}'> Kids
                 <span className="number">250</span>
                <span className="icon"><GiShirt/></span>
               </div>
                <div className='dashboardbox color={"green"}'>Accessories
                   <span className="number">500</span>
                <span className="icon"><GiDiscGolfBag /></span></div>
             </div>
        </div>
        <div className='col-md-4'>
          <div className='box'></div>
        </div>
        </div>
      
    </div>
        
        </>
  )
}

export default Dashboard;