import React, { Component } from 'react';
import '../pimpmypagestyling/internetartfinal.css';
import svgimg from '../svgimages/OutlineAfrica.svg';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default class InternetArtfinal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classOn: false
        };
        this.toggleClassOn = this.toggleClassOn.bind(this);
        this.toggleClassOff = this.toggleClassOff.bind(this);
    }

    toggleClassOn() {
        this.setState(prevState => ({
            classOn: true

        }));
    };

    toggleClassOff() {
        this.setState(prevState => ({
            classOn: false

        }));
    };

    render() {
        return (
            <div className="internetartfinalpg">
                <h1 className="heading">My Final Artwork</h1>

                <div className="parentafrica">

                    <div className={this.state.classOn ? "arrowpointright" : "arrowpointrightoff"}><ArrowForwardIcon /> </div>
                    <div className="svgimgst"><img src={svgimg} className={this.state.classOn ? "filter1" : "filter2"} ></img>
                    </div>
                    <div className={this.state.classOn ? "arrowpointleft" : "arrowpointleftoff"}><ArrowBackIcon /></div>
                </div>
                <br />
                <button onClick={this.toggleClassOn} className="AFbutton">technology out of africa</button>
                <button onClick={this.toggleClassOff} className="AFbutton">technology into africa</button>

                <p className="artworktxt">The grey is how the Global north views the global south; as dull and less important. The green represents how africa would thrive as a continent if it were to develop its own technology and decolonial praxis. this would put it at the technological forefront of development allowing it to uplift itself through job creation and technology. this would break africa free of the parent-child relation that it has with the global north, allowing its economy, production of knowledge and its cultural knowledge to flourish through the power of technology. This artwork interogates how africa is viewed by the world and global north before and after this technological change and decolonial praxis has taken place.</p>
                <Link to="/internetart"><button className="AFbutton">Back</button></Link>
            </div>
        )
    }
}
