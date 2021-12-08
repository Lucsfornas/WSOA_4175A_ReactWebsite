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
                        <p>Artistic Reflection Blog Posts</p>
                        <Link to="/blog4"><button>Blog 4</button></Link>
                        <Link to="/blog8"><button>Blog 8</button></Link>
                        <Link to="/blog10"><button>Blog 10</button></Link>
                        <p>My Internet Art proposal and descriptions from assignments 1 and 2</p>
                        <Link to="/IAprop"><button>I/A Proposal</button></Link>
                        <Link to="/IAdesc"><button>I/A Description</button></Link>
                    </div >
                </div>

                <article className="blogcont">
                    <h2 className="Blogheading">Exam Technical Reflection detailing the websites creation process, technical challanges, and
                        achievements.</h2>
                    <br />
                    <p className="blogtxt">
                        This blog posts aim is to review my technical competence and process for the final exam. It will detail my progress and the changes that I have made to the website’s pages and the internet artwork itself. This will further discuss how and where I have made appropriate use of semantic markup, metadata, CSS, and responsive design, and further review my use of the React.js framework.
                    </p>
                    <br />
                    <p className="blogtxt">
                        On this website, I have chosen to create four main sections to contain my work. These sections are the home page, the main blogs page, the internet artwork page, and the about me page. the blogs homepage and internet artwork page have web pages that can be navigated to from here, this was done so that my work can be kept in an orderly fashion. All pages on the site have been fitted with both a navbar which provides navigation to my other pages and a footer that rounds off the site and gives information about when and by who the page was created and the social media links. All of the pages have been deployed using the React.js framework and make use of different components for functionality. All pages make use of CSS to transform the page according to screen size. This is important because it allows people to view my site on all devices.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The navbar and footer elements have been created as components that can be plugged into all other pages where they are needed, this allows for easier workflow when coding and creating the site. the navbar makes use of reacts routing system and which makes navigation easy, this component contains the name of the website and a navigational menu. This menu contains the main links to my other pages. These can be clicked on by users to be taken to the different pages. I have made use of CSS to style this navbar and the footer. I have made use of transitional effects on the navigational links that make the text enlarge and change colour when the users mouse hovers over the links. I have done this to visually communicate that these elements are interactable. For the footer I have chosen to keep it simple as to not distract the viewers’ attention away from the main page, this contains a black and white colour scheme that was implemented using CSS. The navigational bar has been implemented in a way that it adjusts to different screen sizes. When the pixel length is below 780px the navigational links disappear and a burger menu appears. This was done to keep the navigational elements orderly when being viewed with smaller screens. This burger menu has functionality and can be clicked to reveal the navigational links which transition in from the right side of the screen. This can be toggled on and off to show and hide the navigational bar.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The home page of my site aims to contextualize the site and the projects aim and further provides the main navigation to all other pages. I have made use of h1 and h2 HTML tags for the headings as well as p tags for text. These are contained within section and article tags where applicable. I have further used CSS to style these and create a dimmed background behind the elements. This was done to separate the textual elements from the background. The main focal point of this page is the ‘image’ menu that I have created. This allows viewers to interact with the site more interestingly. This image menu was created by overlaying div’s on top of each other and styling them with CSS. I have added background images to the main div elements and used the upper div elements to display text. I have added functionality to this component so that when the user hovers over the image menu with the mouse, the image darkens, and neon green text appears. This adds a layer of interactivity for the user to engage with. the text that appears act as links to the other main pages of the site.
                    </p>
                    <br />
                    <p className="blogtxt">
                        Similarly, the main blogs page makes use of an image menu. Only instead this menu allows users to navigate to my different blogs using a stylized, interactive way. This makes interacting with the site interesting. This image menu is formatted using a grid that is 3 ‘blocks’ wide and 4 ‘blocks’ in height. This makes the image menu appear uniform and neat. This image menu has the same intractability as the one on the homepage. It darkens and text appears on the users’ mouse hover. This appearing text is used to navigate to the different sections of the site. I have further made use of h1 and p tags on this site for the page heading and explanatory text. The blog pages that contain my blog posts appear differently from the rest of the pages on the site. these pages have been built with the users' ease of navigation as a top priority. I have made use of h1 tags on these pages for the blog heading. And I have used p, section and article tags for the blog's text. This text has been left-aligned and centred to make the reading experience easier for the viewer. Below the blogs text entry is the blogs reference list, this has been included to credit sources that have been used in the text. The blog post pages have many options to choose from when it comes to navigating to other blog posts. I have created a burger menu with a toggle functionality at the top of the page underneath the main heading. This allows the user to toggle a full listing of all blog posts. This was done so that the main blog page is not overly busy and overwhelming to the user. I have further included a miniature nav bar at the bottom of the blog post pages. This allows the users to navigate with ease when they have finished reading the post. This allows users to return to the main blogs page, navigate to the next blog or navigate back to the previous blog post.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The internet artwork page makes use of h1, p, section and article tags to separate the site up. this page has the main heading and a miniature heading section which contains my internet artwork description, rationale, and reflection. These elements have a dark background behind them to separate them from the main background. Below this, I have created a button element that changes on mouse hover. This allows the users to navigate to my internet artwork. my internet artwork page makes use of simple functionality which can be toggled by interacting with buttons below the image to manipulate and change an SVG image of Africa. I have chosen to keep the functionality of this simple as to not overwhelm the viewer and keep the artwork simple yet effective. To implement this functionality, I have made use of JS functions and states. These different states transition slowly, I have made this possible using CSS code.
                        My last and final section of the site is the about page. I have made use of h1 tags on this page for main headings. For the text, I have used p tags and article tags to separate the text. This page aims to provide users with information about me, it contains my style guide, and it contains my references for the whole site.
                    </p>
                    <br />
                    <section className="blogrefb">
                        <h3 className="references">
                            References</h3>
                        <p className="blogtxt">
                            N/A
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/IAdesc"><button>Previous Blog</button></Link>
                    <Link to="/blogs"><button>Back</button></Link>
                    <Link to="/blog10"><button>Next Blog</button></Link>
                </div>
            </div >
        )
    }
}
