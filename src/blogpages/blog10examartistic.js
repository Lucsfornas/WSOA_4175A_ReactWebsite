import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';
import BurgerIcon from '@mui/icons-material/CalendarViewDay';

export default class blog8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openblogLinks: false

        };
        this.toggleblognav = this.toggleblognav.bind(this);
    }


    toggleblognav() {
        this.setState(prevState => ({
            openblogLinks: !prevState.openblogLinks
        }));
    }
    render() {
        return (
            <div className="blog1pg">
                <h1 className="Blogheading">Artistic Reflection Blog Posts</h1>

                <p className="blogtxt">Toggle the burger menu to access other links</p>

                <div className="blognavdropdown">

                    <div className="blognavbutton">
                        <button onClick={this.toggleblognav}><BurgerIcon /></button>
                    </div>

                    <div className="BlogNav" id={this.state.openblogLinks ? "opened" : "closed"}>
                        <h2>Other Blog Posts:</h2>
                        <p>Close Reading Blog Posts</p>
                        <Link to="/blog1"><button>Blog 1</button></Link>
                        <Link to="/blog5"><button>Blog 5</button></Link>
                        <p>Internet Artwork Analysis Blog Posts</p>
                        <Link to="/blog2"><button>Blog 2</button></Link>
                        <Link to="/blog6"><button>Blog 6</button></Link>
                        <p>Technical Reflection Blog Posts</p>
                        <Link to="/blog3"><button>Blog 3</button></Link>
                        <Link to="/blog7"><button>Blog 7</button></Link>
                        <Link to="/blog9"><button>Blog 9</button></Link>
                        <p>Artistic Reflection Blog Posts</p>
                        <Link to="/blog4"><button>Blog 4</button></Link>
                        <Link to="/blog8"><button>Blog 8</button></Link>
                        <p>My Internet Art proposal and descriptions from assignments 1 and 2</p>
                        <Link to="/IAprop"><button>I/A Proposal</button></Link>
                        <Link to="/IAdesc"><button>I/A Description</button></Link>
                    </div >
                </div>

                <article className="blogcont">
                    <h2 className="Blogheading">Exam Artistic Reflection on my creative process and vision for the site.</h2>
                    <br />
                    <p className="blogtxt">
                        This reflection aims to provide understanding and insight into my website’s aesthetic creation. My goal for this website was to provide an aesthetic experience for the users that closely resembles a cyberpunk thematic. Because my site deals with discourses of technology and colonialism, I felt as if it was an appropriate thematic to use. Cyberpunk places emphasis on technology. Originating in Japanese culture it was first used as an awareness of technology and its possible dangers but in this context, it is used as a stand-in and representation as technology. This has been appropriated by western culture as a cool and aesthetic technological style. In this case, it is used in an African context. I believe that the aesthetic is shown through the glowing neon colour sets that are present throughout the site. I have used these colours to align with this specific style, the neon reds, greens, pinks provide a nice contrast against the darker black backgrounds used.  I have used colours as a tool for visual communication. Everything on the site that is clickable or interactable is coloured in neon green. The most notable use of this green can be seen on the navigational bar at the top of every page. when the user moves the mouse over these green buttons the button transitions and changes, Becoming larger and transitioning into a neon pink type of colour. I believe that this draws attention to it and visually communicates intractability to the user. the bar is styled with the website’s logo on the left and the navigational links on the right. The website further makes use of a footer that is styled in the colour black with white textual elements and white social media icons. This simplistic footer aims to round the webpage off.
                    </p>
                    <br />
                    <p className="blogtxt">
                        In the case of the 3 main pages, I have made use of colourful neon backgrounds. These are present on the homepage, the blogs page and the internet artwork page. each of these backgrounds visually communicates the technological aesthetic to the user and what each section is about. The main homepage has a neon stylistic image of a city, this contextualizes and sets the theme for the whole website. this shows the cyberpunk type of aesthetic that I was going for. The blog's homepage is an image of a fist with a dark background. This communicates a feeling and message of change and rebellion to the user. The internet artwork page is an image of colourful neon blue fibre optic cables. This gives a technological thematic feeling to the user. All pages on the site are cohesively styled with the same thematic. This thematic is designed with the main headings in neon red and the textual elements providing further context and information in white. Each of these textual elements present on all pages has a darkened background with a slight opacity, this was done to separate the textual elements of the page from the busy backgrounds.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The blog pages that contain the blog posts have a solid darker purple-blue background. The blog pages have neon red headings that stand out on the dark backgrounds, these draw the users attention when contrasted against the darker background. The white text of the main body of the blog post is contrasted against the dark backgrounds of the blog posts which allows for an easier reading experience.  This enables enhanced readability through contrasted text for users. this is inclusive of all users; this includes readers with colour blindness and the font used is a dyslexic friendly font. These blog pages have a burger menu that is coloured in green at the top of the page, once the user's mouse moves over it will transition to a neon pink which communicates interactability. This menu allows the user to toggle on and off a collapsible menu that contains navigation buttons to the other blog posts. In the case that the blog posts use external materials, each blog post has a reference section at the bottom of the post. This is surrounded by a neon green dashed border to draw user attention. At the very bottom of the blog pages, there is a smaller blog navigation bar with buttons. This allows users to navigate to the previous page, next page and the option to go back to the main page with ease so that users do not need to scroll to the top of the page to access the navigational links.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The main page is styled in a way that is simplistic and contextualizes the site. the page has neon red headings at the top and underneath this, a white textual element contextualizes the page. below is an image menu that visually draws attention. This is the main focal point of the page. the 3 different images on the image menu visually led the viewers to what each section is about and what the section contains.

                    </p>
                    <br />
                    <p className="blogtxt">
                        This image menu was further used on the main blog page menu. The main blog page makes use of different images to visually communicate what each blog post is about. the sections that have similar images visually group them. This image menu is arranged in a grid layout that covers the page. when the user's mouse moves over these image blocks the link to the blog appears in green and can be clicked to access the blog. The blocks also have a darkening opacity that transitions in which makes the text prominent and readable. This page is further consistent with my cyberpunk stylistic choices and uses the same neon red for the headings. Intractability is further communicated through the neon green text which appears when the user drags the mouse over the image menu. The different images on the image menu aim to visually communicate what each blog is about. The artistic reflections have a colourful image, this communicates the post deals with design and colour choices and thematics. The technical blog posts have an image of a circuit board, this aims to give the idea that these blog posts are about the inner technical workings of the website. The close reading blog posts have an image of hands holding a globe of the world, this communicates to the viewer that the concepts dealt with in these posts are applicable and present on a global scale. The internet artwork analysis blog pages have an image of fiberoptic cables, this communicates that the post deals with technology and artwork that isn’t in the physical form but rather on the online space because that is what fibre optic cables are used for, to provide fast internet connection.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The internet artwork page has a layout that is similar to the blog pages except it differs where the colourful background of the fibre optic cables is used on this page as a background. This page has neon red headings with white text below that aims to contextualize the internet artwork. These textual elements have darkened backgrounds to better separate the writing from the colourful and busy background. Below this writing is a button that takes the user to the internet artwork page. the actual internet artwork has a similar background to the block pages. This is a dark purple-blue background that creates a pleasant contrast when viewing the image of Africa. The internet artwork image of Africa is a light grey at first and when the buttons below the work have been interacted with the artwork of Africa transitions into a bright neon green colour. This aims to communicate the growth of the continent of Africa through the colour of neon green. This green colour is associated with growth and nature and further associated with the stylistics that is used in the cyberpunk type of art style. This fits into the website’s cyberpunk aesthetic. These contrasting colours make the internet artwork stand out and draw the user’s attention to the work itself which is the main focal point of the page.
                    </p>
                    <br />
                    <p className="blogtxt">
                        One of my most important goals for this website and its aesthetic design is to be inclusive of everyone and not be biased in any way to people that come from different backgrounds and have different disabilities, I would like anyone, and everyone interested in internet art and my engaged with concepts such as decoloniality to engage with my work. I believe that this is reflected in the work that I have presented for my exam. This has been achieved through a trial and error process to provide the users with the most interesting engagement with the site. I have also chosen instead of using two fonts to rather use one that is consistent throughout the whole site, this font was sourced from google fronts and is dyslexia friendly. this allows better and easier reading and communication that is inclusive of everyone. The high contrasting colours provide an easily distinguishable text for people that are colour blind. These design elements are consistent throughout the site.
                    </p>
                    <section className="blogrefb">
                        <h3 className="references">
                            References</h3>
                        <p className="blogtxt">
                            N/A
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/blog9"><button>Previous Blog</button></Link>
                    <Link to="/blogs"><button>Back</button></Link>
                </div>
            </div >
        )
    }
}
