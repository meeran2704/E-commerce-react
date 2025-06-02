import Search from "../Search/Index";
import { FaRegBell } from "react-icons/fa";


const Header=()=>{
    return (
       <>
       
       <header>
        <div className="logo">
            <span className="ml">.Cloths</span></div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-3">
                     <div className="col3  d-flex align-items-center">
                    <Search/>
                     {/* <button className="rounded-circle"><FaRegBell /></button> */}
                </div>
                
                    
                </div>

                
                <div className="col3  d-flex align-items-center">
                  
                    <div className="col7 d-flex align-items-right justify-content-right">
                    <button className="rounded-circle"><FaRegBell /></button></div>
                </div>
                
                    <div className="myAcc d-flex align-items-center ">
                        <div className="userImg">
                            <span className="rounded-circle">
                                <img src="https://www.shutterstock.com/image-photo/young-indian-asian-man-wearing-260nw-2135489165.jpg " alt="" />
                            </span>
                        
                    </div>
                </div>
            </div>
        </div>
        </header></>
    )

}
export default Header;