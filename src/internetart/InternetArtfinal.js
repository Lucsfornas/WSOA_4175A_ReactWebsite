import React, { Component } from 'react';
import '../pimpmypagestyling/internetartfinal.css';
import svgimg from '../svgimages/OutlineAfrica.svg';
import Icon from '../internetart/worldmap'
import { Link } from 'react-router-dom';

export default class InternetArtfinal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classOn: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        this.setState(prevState => ({
            classOn: !prevState.classOn

        }));
    };

    render() {
        return (
            <div className="internetartfinalpg">
                <h1 className="heading">My Final Artwork</h1>
                <div className="svgimgst"><img src={svgimg} className={this.state.classOn ? "filter1" : "filter2"} ></img></div>
                <br />
                <button onClick={this.toggleClass} className="AFbutton">Decolonial Praxis for africa</button>

                <p className="artworktxt">The grey is how the Global north views the global south as dull and less important. The green represents how africa would thrive as a continent if it were to develop its own decolonial praxis, it would break free of the parent-child relation that it has with the global north, allowing its economy, production of knowledge and its cultural knowledge to flourish. This artwork interogates how africa is viewed before and after this decolonial praxis has taken place.</p>
                <Link to="/internetart"><button className="AFbutton">Back</button></Link>
            </div>
        )
    }
}
