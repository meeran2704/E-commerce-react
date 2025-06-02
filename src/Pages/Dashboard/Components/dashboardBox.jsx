import { Button } from '@mui/material';
import {useEffect} from 'react'

const DashboardBox = () => {
  return (
    <Button className='dashboardBox' style={{
        backgroundImage:'linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]}}'}}>

            <div className='d-flex w-100'>
               
                   
                
            </div>
        </Button>
  )
}

export default DashboardBox;