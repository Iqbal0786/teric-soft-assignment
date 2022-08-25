import React from 'react'
import "../styles/style.css"
import Card from './Card'

export default function Home() {
  return (
    <>
     <div id='slideDiv'>

     </div>
     <div id="header_Menu">
        <ul>
            <li>BMS</li>
            <li>Mountains</li>
            <li>Road</li>
            <li>Tracks</li>
        </ul>
     </div>
      <div id='borderDiv'></div>

      <div id='HighlightDiv'>
         <div id='highlightTitle'>Highlights</div>
         <div id='displayCards'>
           <Card/>
         </div>
      </div>
    </>
  )
}
