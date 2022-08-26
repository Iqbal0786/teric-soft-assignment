import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
   
    return (
      <div id='card'>
        <img src={`${this.props.item.image}`} alt=" girl riding image" />
         <div className='card_details'>
             <div className='subHeadingOne'>
                <p>{this.props.item.title}</p>
                <p>5:12</p>
             </div>
             <div className="buttonDiv">
               <button>HEATS</button>
               <button>HIGHTLIGHTS</button>
             </div>
         </div>
      </div>
    )
  }
}
