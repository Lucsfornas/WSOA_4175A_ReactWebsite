import React, { Component } from 'react';
import '../pimpmypagestyling/aboutpg.css';

export default class about extends Component {
    render() {
        return (
            <div className="aboutpg">
                <h1 className="heading4">About Me</h1>
                <div className="txtcontainer">
                    <p className="txt4">Hi, I am Luca Fornasari, a fourth year (honors) Digital Arts Student studying at the
                        University of
                        Witwaterstrand. This is my Project website for fourth year Interactive Media, WSOA4175A. This project is
                        focused on internet art.
                        This form of art looks at the browser as the medium of the artwork while the code is comparable to the
                        classical paintbrush.</p>
                </div>
                <br />
                <div>
                    <h2 className="stlguide">Style Guide</h2>
                    <br />
                    <div className="txtcontainer">
                        <p className="txt4">The website has been designed and styled with a cyberpunk thematic in mind. This means that I have made use of bold and easily readable text throughout the site with a neon colour scheme. The whole site is styles in this way. Each of my pages have a navbar at the head of the page and a footer at the bottom. The navbar is coloured in black with neon green as the text colour. Once this text is highlighted with the mouse it changes colour to neon pink. This provides high contrast and easy readability. The left side of this navbar has my websites title and in the center of the title is a globe image. The footer of the webpages is a solid black colour similar to the header element. This has minimal writing on it which aims to provide my social accounts and my surname with the year the site was updated.
                        </p>

                        <p className="txt4">The homepage or landing page is styled in a simplistic way, this only has 2 main headings which act as a greeting and information display about who the designer is (myself) the paragraph under this contextualizes the website and its purpose. These elements all have a darkening opacity set to separate them from the busy background. The main headings are also in a neon red colour to make them stand out. The image menu that is found below this aims to direct the viewers to the 3 main sections of the site. The blogs page, the internet artwork page, and the about me page. these do this in an interesting and stylistic way. The background image chosen is of a city that has edited bright neon colours. This fits the cyberpunk aesthetic.
                        </p>

                        <p className="txt4">The blogs page is designed with a dark background image of a fist. This allows for better contrast on the site itself this makes the neon red heading and white text highly visible to the viewers. This page further makes use of an image menu similar to the one found on the home page. this uses a grid of 3 by 12 blocks to display different images that link to what the contents of the blog posts are. The overlaying book image displays that they are blog posts. The users mouse can be moved over the image to reveal the navigational link which is in green. Throughout the site anything that is in the neon green colour is interactable with and clickable. These lead to a simply designed blog page that has a solid background the actual blog text is large and in blog for easy readability and the headings are bolded for better distinction between the elements on the page. the references for each page are displayed below this in a dashed neon green box. Below this is a smaller navigational bar to go to the next page or the previous page. this was done for ease of navigation.

                        </p>

                        <p className="txt4">The internet artwork page has a colourful background of fiberoptic cables. This aligns with the cyberpunk aesthetic. The headings and main text container that contextualized the work is black with a slight transparency. This separates it and simplifies it from the overly busy background. Below this is a simple button which navigates the user to the internet artwork. The internet artwork page is similarly designed and styled to the blog pages. With a solid background that provides contrast for the overlayed svg image of africa. This has two buttons that stand out, that when interacted with change the colour of the svg image. Below these is text that aims to contextualize the artwork and provide information about it.

                        </p>

                        <p className="txt4">The final section of the website is the about me page. this page aims to provide more context about who I am. And it contains the style guide and references used for the resources on the site.</p>

                    </div>
                </div>
                <br />
                <div className="txtcontainer">
                    <p className="txt4">References used for images and resources used on the site:</p>
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
                <br />
            </div>
        )
    }
}
