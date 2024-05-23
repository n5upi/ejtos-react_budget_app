import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import App from '../App';
//import '///context/App.css';
const  Currency  = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }


  return (
        <div className='alert alert-secondary' style={{width:'200px'}}>

     Currency <select onChange={(event)=>changeCurrency(event.target.value)}  style={{border: '1px solid transparent', backgroundColor:'#9ad6ad'}}>
        <option value="£">$ Dollar</option>
        <option value="$">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
      

    </div>
    
    );
};

export default Currency;