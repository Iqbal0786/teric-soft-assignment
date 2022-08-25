import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div id='card'>
        <img src="https://media.istockphoto.com/photos/young-woman-bikes-down-country-road-at-sunrise-picture-id1322928386?b=1&k=20&m=1322928386&s=170667a&w=0&h=ZSL-vizRxwe4vGBK7up4Hws81EGnPzadkn4G6Kf1B08=" alt=" girl riding image" />
         <div className='card_details'>
             <div className='subHeadingOne'>
                <p>Day 1 of BMX</p>
                <p>5:12</p>
             </div>
         </div>
      </div>
    )
  }
}
