import React from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { PiDresser } from "react-icons/pi";
import { MdRateReview } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <ul>
        <li><Button className='w-100'>
          <span className='icon'><MdDashboard /></span>
                Dashboard
          </Button></li>
          <li><Button onClick={{}} className='w-100'>
            <span className='icon'><IoBagAddOutline /></span>
                Upload Product
          </Button> </li>
          <li><Button className='w-100'>
          <span className='icon'><FaBoxOpen /></span>
                Orders
          </Button></li>
          <li><Button className='w-100'>
          <span className='icon'><CiDeliveryTruck /></span>
                Delivery Tracking
          </Button></li>
          <li><Button className='w-100'>
          <span className='icon'><PiDresser /></span>
                Stocks
          </Button></li>
          <li><Button className='w-100'>
          <span className='icon'><GiMoneyStack /></span>
                Expense
          </Button></li>
          <li><Button className='w-100'>
          <span className='icon'><MdRateReview /></span>
                Review & Ratings
          </Button></li>
          <li><Button className='w-100'>
          <span className='icon'><RiAdvertisementLine /></span>
                Advertisements
          </Button></li>
      </ul>
    </div>
    </>
  )
}

export default Sidebar;