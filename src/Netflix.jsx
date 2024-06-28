import React from 'react'
import App from './App'
import './Netflix.css'
import Data from './seriesData.json'

export default function Netflix() {
    return (
     
        <div   className='Hover mycontainer'>
    
         {

 Data.map((elem,indx)=>{

  return(
     
        
            <div className="card Hover" style={{ width:"17rem"}}>
                <img style={{height:"15rem"}} src= {elem.cardimage}  className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{elem.cardtitle}</h5>
                    <p className="card-text"> {elem.cardtext}</p>
                    <a target='_fbh' href={elem.link} className="btn btn-primary">Go to Series</a>
                </div>
            </div>
       
     
      
        )
         })
        }
         </div>
    )
}
