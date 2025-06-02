
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Index.jsx';
import Dashboard from './Pages/Dashboard/Index.jsx';
import Sidebar from './Components/Sidebar/Index.jsx';

function App() {
    return (
       
            <BrowserRouter>
            <Header/>
           
            <div className='main d-flex'>
                
                <div className='sidebarwrapper'>
                    <Sidebar/>
                </div>
                <div className='content'>
                    
                </div>
            </div>
            
            <Routes>
                <Route path="/" exact={true} element={<Dashboard/>}/>
                <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
                
            </Routes>
        
            </BrowserRouter>
            
            
            
        
    )

}

export default App;
