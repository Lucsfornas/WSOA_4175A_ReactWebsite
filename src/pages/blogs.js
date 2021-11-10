import React, { Component } from 'react';
import '../pimpmypagestyling/blogs.css';
import blogbackgroundimg from '../images/fist4change.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import globeimg from '../images/globeIcon.jpg';
import techimg from '../images/gears.jpg';
import artimg from '../images/colours.jpg';
import internetartimg1 from '../images/internetartimg.jpg';
import IAim from '../images/fiberoptic.jpg';


export default class blogs extends Component {
    render() {
        return (
            <div className="BlogsPg" style={{ backgroundImage: `url(${blogbackgroundimg})` }}>
                <h1 className="heading">Blog Posts Homepage</h1>
                <p className="txt">This is my navigational blog page that contains the different links to my blog posts.
                    These blog posts engage with the theory that is presented in the course as well as my own analysises,
                    technical and artistic reflections on my
                    works.</p>

                <article>
                    <div className="containerwrap1">
                        <div className="plat-wrap1">

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${globeimg})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Close Reading 1</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog1'>Blog Post 1</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${internetartimg1})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Internet Art Analysis 1</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog2'>Blog Post 2</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${techimg})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Technical Reflection 1</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog3'>Blog Post 3</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${artimg})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Artistic Reflection 1</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog4'>Blog Post 4</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${globeimg})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Close Reading 2</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog5'>Blog Post 5</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${internetartimg1})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Internet Art Analysis 2</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog6'>Blog Post 6</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${techimg})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Technical Reflection 2</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog7'>Blog Post 7</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${artimg})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Artistic Reflection 2</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/blog8'>Blog Post 8</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="itemwrap1">
                                <div className="LP-background1" style={{ backgroundImage: `url(${IAim})` }}>
                                </div>
                                <div className="imgtxtwrapper1">
                                    <h3 className="desc">Internet artwork proposal from assignment 1</h3>
                                    <div className="logowrap1">
                                        <MenuBookIcon />
                                    </div>
                                    <div className="subtitle1">
                                        <Link to='/IAprop'>Internet Art proposal</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
