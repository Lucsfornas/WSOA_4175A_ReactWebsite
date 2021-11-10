import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class blog3 extends Component {
    render() {
        return (
            <div className="blog1pg">
                <h1 className="Blogheading">Technical Reflection Blog Posts</h1>

                <p className="bogtxt">You can use these links to quickly navigate to my different blog posts.</p>

                <div className="BlogNav">
                    <h2>Other Blog Posts:</h2>
                    <p>Close Reading Blog Posts</p>
                    <Link to="/blog1"><button>Blog 1</button></Link>
                    <Link to="/blog5"><button>Blog 5</button></Link>
                    <p>Internet Artwork Analysis Blog Posts</p>
                    <Link to="/blog2"><button>Blog 2</button></Link>
                    <Link to="/blog6"><button>Blog 6</button></Link>
                    <p>Technical Reflection Blog Posts</p>
                    <Link to="/blog7"><button>Blog 7</button></Link>
                    <p>Artistic Reflection Blog Posts</p>
                    <Link to="/blog4"><button>Blog 4</button></Link>
                    <Link to="/blog8"><button>Blog 8</button></Link>
                    <p>My Internet Art proposal from assingment 1</p>
                    <Link to="/IAprop"><button>I/A Proposal</button></Link>
                </div >

                <article className="blogcont">
                    <h2 className="Blogheading">Technical Reflection detailing creation process, technical challanges, and
                        achievements.</h2>
                    <br />
                    <p className="blogtxt">For my websites construction I chose to keep the structuring and the elements used cohesive and similar
                        throughout the site. This aligns with the goal of having a good user interface (UI) that is simple and
                        intuitive to use. My basic page structuring for all pages seen on the site is simple and aims not to
                        overwhelm the users of the site. I make use of a header element located at the top of my page which
                        contains my websites logo and nav elements, these are important tools that the users will need to easily
                        navigate throughout the site. This navigational menu when viewed in mobile view collapses into a burger
                        menu which can be clicked to reveal the navigational elements that can be used, this gives the viewer
                        more space to view the site as a whole and keeps the screen space neat and uncluttered with information.
                        This navigational menu and logo is consistent throughout the pages on the site. The styling of this menu
                        had originally posed quite a technical challenge for me as when I was trying to style the menu the
                        elements kept being shifted around in normal view and in the mobile view. I was able to overcome this
                        problem by shifting the elements around with the height and width components and by adding a slight
                        padding to the elements.
                    </p>
                    <br />
                    <p className="blogtxt">The websites homepage makes use of an image menu that I have made so that navigating the site is easier
                        and more aesthetic for the users. I have created this by layering and styling div elements over each
                        other, while the last div element contains a navigation link to the different pages of the site. One div
                        element was used to be a container for by background images while the others that were overlayed over
                        this contain a smaller image that represents the different pages, i.e. The quill pen represents my blog
                        page. I wanted to implement interactivity on this menu because it is the element that draws the user’s
                        attention the most. I achieved this by using custom JavaScript code to make this image menu more
                        interactable, once the user moves the mouse over the image it will darken, and the navigational link
                        will pop up which is originally hidden. I once again encountered a styling problem in this area because
                        the navigational text elements would overlap over each other. I overcame this problem by giving the icon
                        image container element a position relative attribute so that it could be moved around and custom styled
                        and a slight margin to separate the images and contain the text so that it would not overflow to the
                        other div elements.
                    </p>
                    <br />
                    <p className="blogtxt"> The main blog page is designed in the way that it is simplistic and easy to find what material the user
                        wishes to engage with. I have made use of heading elements and button elements which are encompassed
                        within a div element to create a menu for the users to navigate to my different blog posts. I used a div
                        element to make the styling of this menu easier and to use a green background to encompass the menu in a
                        box shape. The heading elements provide a description of the blog post while the button elements are
                        used for interactable navigation to the different blog pages. I had encountered no problems creating
                        this menu. My blog pages that contain my different blogs are structured in the way that they have a main
                        heading at the top of the page which lets the user know what page they are on. This is followed by a
                        similar navigational element that is seen on the main blog page, this allows for easy navigation to the
                        other blog posts. What follows is the actual blog post with a heading that details the concept or topic
                        the blog post is about which is underlined and then below is the actual blog post and below that the
                        references to the material used in the blog post. This blog heading, body and references are encompassed
                        in an article element. At first the blog post looked like it was randomly placed on the page, to fix
                        this I had added a slight background opacity to the article element to give it some structure and
                        placement on the site. I then further decided to encompass the references part of the blog post in a
                        dotted border to separate the references from the rest of the blog element further giving the blog post
                        some structure. below the blog post article element, I have added a ‘back’ button element which allows
                        the user to return to the main blog homepage after reading the blog, I did this for ease of use and
                        navigation for the user. The structuring and elements used are consistently used in all of my blog post
                        pages.
                    </p>
                    <br />
                    <p className="blogtxt">My internet artwork page is constructed in a similar way to my blog post navigation page. The page
                        contains a heading element which lets the users know what page they are on this is followed by a
                        paragraph element which contains a short description which contextualizes my internet artwork, its goals
                        and how I wish it to function. This is then followed by a similar div menu seen in my blog post main
                        page that contains a paragraph element and button element. This lets the users know where the button
                        navigates to and the button takes the users to my internet artwork experimentation page. my internet
                        artwork experiment page contains a very minimalistic use of structure and design because I wish to use
                        this page as an experimental playground for my internet artwork. However, the page still contains a
                        heading element and a short description underneath which contextualizes my ideas and what I wish to do
                        with the artwork and my references of others work that I have used in the experimentations. The
                        following elements are my experimentations with CSS code that I want my artwork to have. Each of these
                        experiments is encompassed in a section element, this aligns with correct semantic markup. This page can
                        further be navigated away from with the back button found at the bottom of the page. similar to the one
                        found on my blog post page. I have done this to be consistent in my design throughout all my pages.
                    </p>
                    <br />
                    <p className="blogtxt">
                        My about page is very simple in its design. This pages goal is to provide the viewer with information
                        about myself and to contain my references of others work that I have used on the site.
                    </p>
                    <section className="blogrefb">
                        <h3 class="references">
                            References</h3>
                        <p class="blogtxt">
                            N/A
                        </p>
                    </section>
                </article>
                <div className="BlogNav"><Link to="/blogs"><button>Back</button></Link></div>
            </div >
        )
    }
}
