import React, { Component } from 'react'
import logo from '../images/globe.png';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/navbar.css';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openLinks: false

        };
        this.togglenav = this.togglenav.bind(this);
    }


    togglenav() {
        this.setState(prevState => ({
            openLinks: !prevState.openLinks
        }));
    }

    render() {
        return (
            <div className="navbar">
                <div className="leftsidenav" id={this.state.openLinks ? "open" : "close"}>
                    <h1 className="logotxt">The</h1>
                    <img src={logo} />
                    <h1 className="logotxt">Express</h1>

                    <div className="hiddenLinks">
                        <Link to='/'>Home</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/internetart'>Internet Artwork</Link>
                        <Link to='/about'>About</Link>
                    </div>
                </div>
                <div className="rightsidenav">
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/internetart'>Internet Artwork</Link>
                    <Link to='/about'>About</Link>
                    <button onClick={this.togglenav}><CalendarViewDayIcon /></button>
                </div>
            </div >
        )
    }
}
