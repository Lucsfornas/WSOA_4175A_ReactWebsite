import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';
import BurgerIcon from '@mui/icons-material/CalendarViewDay';

export default class blog4 extends Component {
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
                        <Link to="/blog8"><button>Blog 8</button></Link>
                        <Link to="/blog10"><button>Blog 10</button></Link>
                        <p>My Internet Art proposal and descriptions from assignments 1 and 2</p>
                        <Link to="/IAprop"><button>I/A Proposal</button></Link>
                        <Link to="/IAdesc"><button>I/A Description</button></Link>
                    </div >
                </div>

                <article className="blogcont">

                    <h2 className="Blogheading">Artistic Reflection on my creative process and vision for the site and the artwork.</h2>
                    <br />
                    <p className="blogtxt"> This is my artistic reflection for my website as a whole and my proposed internet artwork. My idea
                        behind my websites design and the way the site functions in simple. I wanted to create a site that was
                        easy to navigate but at the same time has an element of simplistic neon aesthetic, these neon colours
                        used draw attention to important elements that are contrasted against the dark tones of the site. This
                        is a design that I wish to keep consistent throughout the websites design process to communicate a sense
                        of unity and coherence from the site. I will explain my thinking and process in creating the UI and UX
                        later in this blog post. for my internet artwork itself I have chosen to take on the task of creating an
                        interactive and adaptive artwork that functions in a 3D space, that is able to both rotate and transform
                        itself on the users input.
                    </p>
                    <br />
                    <p className="blogtxt"> So how does my website reflect these simplistic goals and neon design aesthetics?
                        In the blog post from medium.com (linked below in references) it details ‘7 RULES FOR CREATING VISUALLY
                        AESTHETIC UI’. It details the ‘rules’ of UI design, I have stuck to some of these rules in some areas of
                        my site, but in some cases I disagree with the design principles and have opted to use my own thoughts
                        and ideas to better communicate what my site is about. As every artist knows no design principle is
                        wholly applicable to everyone’s work. So, we don’t break the rules, we just bend them to better fit our
                        end design goals and objectives. In my process of creation, stuck to what the post details as
                        “minimalism is must, maximize your white space” (Trikha, 2018). I have chosen a minimalist approach in
                        constructing
                        and structuring my site but instead of having generous amounts of white space I have instead chosen to
                        use a dark blue colour for contrast, I have chosen this because it is easy on the users eyes. My
                        different elements are generously spaced-out. The headings, images and text are all framed in their own
                        way. For my heading elements I have chosen a simplistic bold text coloured in royal red colour, this
                        fits very well with the dark blue background and provides a strong noticeable contrast that draws
                        attention to the heading, that is consistent throughout the pages on the site. This makes the headings
                        stand out and draws the viewers’ attention towards it, the chosen font is dyslexia friendly,
                        minimalistic and easy to read making it easy on the viewers eyes. I have chosen specifically to
                        encompass my longer textual elements in a lighter green boarder with a slight opacity which adds
                        contrast and draws attention to the elements. This provides the readers a good contrast against the
                        background of the site, this design choice allows for better communication to the readers in the way
                        that it isolates the different elements and posts. I have used this light neon green throughout the site
                        to communicate areas of importance and draw the users attention to them.
                    </p>
                    <br />
                    <p className="blogtxt">I have specifically chosen the colour of white as the colour of my text because it provides the greatest
                        contrast in relation to the darker blue background, this makes the text easily distinguishable from the
                        rest of the site. The header of my site is also coloured differently to the rest of the site in a light
                        purple. This stands out from the background of the site which visually separates the nav bar from the
                        rest of the site. The navigational elements located in the header are coloured in a luminescent green
                        and stylized in a decorative font to draw the user’s attention to the navigational options that they
                        have. When my website is viewed in the mobile view mode the navigational elements collapse into an
                        expandable menu. This is further in line with my overall concept of minimalism for the site and doesn’t
                        overwhelm the user of the site. Is aligns with the second design concept of “micro interactions are
                        good” (Trikha, 2018) detailed in the design guide. These micro interactions come in the form of a hidden
                        menu.
                    </p>
                    <br />
                    <p className="blogtxt">
                        For this site I have chosen to include 4 different pages. A home page; this contextualizes the website
                        and overall project through a short introductory paragraph. I have also created an ‘image menu’ that
                        acts as the main focal point of the site, this is the element that draws the users attention the most.
                        This is what the blogs post refers to as “create a single focus point for each screen” (Trikha, 2018).
                        From this
                        image menu the whole site can be navigated to. My second page is my Blog page I have decided to include
                        a blog post menu that allows for easy navigation to my different blog posts. These blog posts can also
                        be scrolled to by the user giving them the option of how to navigate. Each of these blog posts located
                        on this page are isolated by their own lighter blue border and background, this further separates each
                        post. My next page is my internet art page, this page contextualizes my internet artwork and provides a
                        description of what I wish to achieve through doing it. This page has the links seen as buttons on the
                        page. This takes the user to my different pages that contain my experimentations with CSS code in the 3D
                        space. My next page is the About me page, this page contains information about myself as a fourth-year
                        digital arts student, more information about what the project is about and the different references for
                        the images and sources that I have used on the website.
                    </p>
                    <br />
                    <p className="blogtxt">
                        One of my most important goals for this website is to be inclusive of everyone and not be biased in any
                        way to people that come from different backgrounds and have different disabilities, I would like anyone,
                        and everyone interested in internet art and my engaged with concepts such as decoloniality to engage
                        with my work. This is however a work in progress and as I learn more the website will change and alter
                        according to what I have learnt. I have also chosen to use two fonts from google fronts that are
                        dyslexia friendly, this allows better communication that is inclusive of everyone and makes reading
                        easier on the website itself. These design elements are consistent throughout the site.
                    </p>
                    <br />
                    <section className="blogrefb">
                        <h3 className="references">
                            References</h3>
                        <p className="blogtxt">
                            Trikha, R. (2018). 7 Rules for creating visually aesthetic UI. Available at:
                            https://medium.com/nyc-design/7-rules-for-creating-visually-aesthetic-ui-6ac0fe8856f (accessed:
                            01/10/2021).
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/blog3"><button>Previous Blog</button></Link>
                    <Link to="/blogs"><button>Back</button></Link>
                    <Link to="/blog5"><button>Next Blog</button></Link>
                </div>
            </div >
        )
    }
}
