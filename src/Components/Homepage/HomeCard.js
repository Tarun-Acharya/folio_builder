import React, { Component } from 'react';
import Title from './Title';
import Aboutme from './Aboutme';
import picture from "../../TestFiles/picture.jpeg";
import './HomeCard.css';
class HomeCard extends Component {
    state = { 
         details:[{pic: picture, name: "Virat", role: "Cricketer"}]
     } 
    render() { 
        return (
            <div className='Card'>
                <Title details={this.state.details}/>  
                <Aboutme/>
            </div>
            

        );
    }
}
 
export default HomeCard;