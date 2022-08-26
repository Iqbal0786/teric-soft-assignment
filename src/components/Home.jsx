import React, { useEffect } from 'react'
import "../styles/style.css"
import Card from './Card'
import {useDispatch,useSelector} from "react-redux"
import { get_bmx, get_mountains, get_roads, get_tracks } from '../Redux/ActionConstant';

export default function Home() {
      const dispatch= useDispatch();
      const  data= useSelector((store)=>store.Reducers)
      console.log(data)

      useEffect(()=>{
         dispatch(get_bmx())
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
            <li onClick={()=>{dispatch(get_bmx())}}>BMS</li>
            <li onClick={()=>{dispatch(get_mountains())}}>Mountains</li>
            <li onClick={()=>{dispatch(get_roads())}}>Road</li>
            <li onClick={()=>{dispatch(get_tracks())}}>Tracks</li>
        </ul>
     </div>
      <div id='borderDiv'></div>

      <div id='HighlightDiv'>
         <div id='highlightTitle'>Highlights</div>
         <div id='displayCards'>
         { 
         data.filterData.map((item)=>{
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
