
import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

import paris_2024 from '../../resources/images/logos/paris_2024.png';
import milano_2026 from '../../resources/images/logos/milano_2026.jpg';
import LA_2028 from '../../resources/images/logos/LA_2028.png';
//import brisbane_2032 from '../../resources/images/logos/brisbane_2032.jpg';

class Pricing extends Component{
    state={
        prices:[paris_2024, milano_2026, LA_2028],
        positions:['Paris','Milano Cortina','Los Angels'],
        desc:[
            '2024 Summer Olympics', '2026 Winter Olympics', '2028 Summer Olympics'
        ],
        linkto:['https://olympics.com/ioc/paris-2024','https://olympics.com/ioc/milano-cortina-2026','https://la28.org/'],
        delay:[500,500,500,500,500,500]

    }

    showBoxes = () =>(
        this.state.prices.map((_box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className = "pricing_item">
                    <div className = "pricing_inner_wrapper">
                        <div className = "pricing_title">
                            <img src= {this.state.prices[i]} alt=""
                            style={{width:"100%",
                             height: "7.5rem",
                             textAlign: "center"}}/>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className = "pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className = "pricing_buttons">
                            <MyButton
                                text = "Learn More"
                                bck = "#ffa800"
                                color = "#ffffff"
                                link = {this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render(){
        return(
            <div className = "bck_black">
                <div className = "center_wrapper pricing_section">
                    <h2>Upcoming Games</h2>
                    <p>Click to learn more about where it takes place</p>
                    <div className = "pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;