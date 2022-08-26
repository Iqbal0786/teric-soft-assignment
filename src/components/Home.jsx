import React, { useEffect, useState } from 'react'
import "../styles/style.css"
import Card from './Card'
import {useDispatch,useSelector} from "react-redux"
import { get_bmx, get_mountains, get_roads, get_tracks, is_loaded } from '../Redux/ActionConstant';

export default function Home() {
     const [isLoading,setIsLoading]=useState(true)
      const dispatch= useDispatch();
      const  data= useSelector((store)=>store.Reducers)
      console.log(data)

      useEffect(()=>{
          setTimeout(() => {
            dispatch(get_bmx())
            setIsLoading(false)
          }, 2000);
      }, [])
    
  return (
    <>
     <div id='slideDiv'>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
        <div className='iconDiv'>
        <i class="fa fa-star"></i>
        <p>Features</p>
        </div>
     </div>
     <div id="header_Menu">
        <ul>
            <li onClick={()=>{
            
              dispatch(get_bmx())}}>BMX</li>
            <li onClick={()=>{
             
              dispatch(get_mountains())
              }}>Mountains</li>
              
            <li onClick={()=>{
            
              dispatch(get_roads())}}>Road</li>
            <li onClick={()=>{
            
              dispatch(get_tracks())}}>Tracks</li>
        </ul>
     </div>
      <div id='borderDiv'></div>

      <div id='HighlightDiv'>
         <div id='highlightTitle'>Highlights</div>
         <div id='displayCards'>
         { 
      isLoading? <img src='https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif'/> :  data.filterData.map((item)=>{
            return (
             <Card item={item}/>
            )
          })
         }
           
         </div>
      </div>
    </>
  )
}
