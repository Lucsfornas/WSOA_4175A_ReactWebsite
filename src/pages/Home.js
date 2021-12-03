import React, { Component } from 'react';
import "../pimpmypagestyling/Home.css";
import homeimg from '../images/tokyo1use.jpg';
import blogsimg from '../images/globeIcon1use.jpg';
import aboutimg from '../images/circutboard1use.jpg';
import internetartimg from '../images/internetartimg1use.jpg';
import penimg from '../images/penimgedited.png';
import aboutmepic from '../images/aboutmeimg.png';
import IA from '../images/internetartletters.png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="Home" style={{ backgroundImage: `url(${homeimg})` }}>
                <div className="headercont">
                    <h1 className="heading">Welcome to The Express!</h1>
                    <h2 className="heading2">A project website by Luca Fornasari</h2>
                    <article className="txtcont">
                        <p className="txt">This websites goal is to explore the creation of Internet Art and to create my own Internet artworks.
                            This will be done through the exploration and experimentation of the React.js framework.The theoretical blog post part of the website deals with transformation and social justice on
                            the web. The blog posts deal with important ideas such as decolonisation, design justice, and critical
                            code studies.</p>
                    </article>
                    <br />
                    <div className="containerwrap">
                        <div className="plat-wrap">

                            <div className="itemwrap">
                                <div className="LP-background" style={{ backgroundImage: `url(${blogsimg})` }}>
                                </div>
                                <div className="imgtxtwrapper">
                                    <div className="logowrap">
                                        <img src={penimg} />
                                    </div>
                                    <div className="subtitle">
                                        <Link to='blogs'>My Blog Page</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap">
                                <div className="LP-background" style={{ backgroundImage: `url(${internetartimg})` }}>
                                </div>
                                <div className="imgtxtwrapper">
                                    <div className="logowrap">
                                        <img src={IA} />
                                    </div>
                                    <div className="subtitle">
                                        <Link to='internetart'>My Internet Artwork Page</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap">
                                <div className="LP-background" style={{ backgroundImage: `url(${aboutimg})` }}>
                                </div>
                                <div className="imgtxtwrapper">
                                    <div className="logowrap">
                                        <img src={aboutmepic} />
                                    </div>
                                    <div className="subtitle">
                                        <Link to='about'>About</Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
