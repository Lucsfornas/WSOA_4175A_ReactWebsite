import React, { Component } from 'react';
import '../pimpmypagestyling/aboutpg.css';

export default class about extends Component {
    render() {
        return (
            <div className="aboutpg">
                <h1 className="heading4">About Me</h1>
                <p className="txt4">Hi, I am Luca Fornasari, a fourth year (honors) Digital Arts Student studying at the
                    University of
                    Witwaterstrand. This is my Project website for fourth year Interactive Media, WSOA4175A. This project is
                    focused on art on internet art.
                    This form of art looks at the browser as the medium of the artwork while the code is comparable to the
                    classical paintbrush.</p>
                <p className="txt4">References used for images on the homepage:</p>
                <p className="txt4">Blogs img:https://unsplash.com/photos/7e2pe9wjL9M
                    <br />
                    Internet art img:https://unsplash.com/photos/8bghKxNU1j0
                    <br />
                    About img: https://unsplash.com/photos/5Ne6mMQtIdo
                    <br />
                    PNG images pen:
                    https://www.clipartmax.com/middle/m2i8m2A0G6Z5d3m2_fountain-pen-quill-logo-bic-feather-ink-pen-logo/
                    <br />
                    Homepage, internet art image, blogs image: https://unsplash.com/
                    <br />
                    The internet art SVG was sourced here:https://freesvg.org/outline-map-of-africa-vector-image
                </p>
            </div>
        )
    }
}
