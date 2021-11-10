import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';

export default class blog7 extends Component {
    render() {
        return (
            <div className="blog1pg">
                <h1 className="Blogheading">Technical Reflection Blog Posts</h1>

                <p className="blogtxt">You can use these links to quickly navigate to my different blog posts.</p>

                <div className="BlogNav">
                    <h2>Other Blog Posts:</h2>
                    <p>Close Reading Blog Posts</p>
                    <Link to="/blog1"><button>Blog 1</button></Link>
                    <Link to="/blog5"><button>Blog 5</button></Link>
                    <p>Internet Artwork Analysis Blog Posts</p>
                    <Link to="/blog2"><button>Blog 2</button></Link>
                    <Link to="/blog6"><button>Blog 6</button></Link>
                    <p>Technical Reflection Blog Posts</p>
                    <Link to="/blog3"><button>Blog 3</button></Link>
                    <p>Artistic Reflection Blog Posts</p>
                    <Link to="/blog4"><button>Blog 4</button></Link>
                    <Link to="/blog8"><button>Blog 8</button></Link>
                    <p>My Internet Art proposal from assingment 1</p>
                    <Link to="/IAprop"><button>I/A Proposal</button></Link>
                </div >

                <article className="blogcont">
                    <h2 className="Blogheading">Technical Reflection detailing the websites creation process, technical challanges, and
                        achievements for Assingment 2.</h2>
                    <br />
                    <p className="blogtxt">For my updated website for assignment 2 I have chosen to change my websites background and the structuring of the site in areas to better fit my website overall meaning and I have chosen to redeploy the website using the React.js framework to enhance its functionality and responsiveness. I have chosen to keep the navigational bar the same and consistent throughout my website because I believe it is simple and intuitive to use. This makes navigation easy from any page on the site, I believe this is important because it gives the viewers full control over their interaction with the site. I wanted the navigational bar to better give off the idea that my website deals with issues and discourses that are present worldwide, therefore, I have chosen to further add a logo to the nav bar that separates my title “The Express”, this logo sits between the two words. This can be read by users as “the world express”.  The reason I chose the PNG logo of our planet is that I wanted to give off the feeling that we as humans are one big family, what one countries population does or says affects the others and vice versa. I have also made my links more interesting and interactable by making them change colour and size slightly this lets the user know that these links can be interacted with stylistically. I have chosen to further include a footer element to my pages to better round off my website and make it look like it is ‘full’ instead of making it look like it drops off at a certain point.
                    </p>
                    <br />
                    <p className="blogtxt">I chose to redeploy my website using the React.js framework because I believe it allows for better and smoother interactions with the site and allows for quicker loading times between pages. I have done this to also challenge my skills in learning to use a new framework which is in some cases standard in the web development industry. This was a technical challenge for me to learn a new framework. For the second assignment, I wanted to add a little more complexity to the site while trying to keep the UI as simple and intuitive as possible. Therefore, I have instead opted to use background images for my main pages (homepage, internet art page, and blog page), these images aid in better contextualizing and aid in giving off the meaning that my site is about. For the homepage I wanted it to give off the idea that the site deals with concepts that are present and relevant in our modern-day societies, this is why I have used a neon image of a city to show this. This page is the first thing that viewers see of the sight, and I wanted it to be captivating and interesting. To do this I have added large welcome text and smaller text that is distinctly separated from the colourful background. This text aims to contextualize my site for the user and provide information about the website itself. The three large images that are centred on the page act as an image menu and are made to draw attention and give off ideas of what the site is about. These also act as stylized navigational elements and can be interacted with to navigate to the different pages. The first ‘blogs image’ is an image of a lightbulb, this gives off the idea that this link will transport the viewer to a page that provides insight into the website. The next image is my ‘internet art’ image and displays a technological type of look. the third image is my ‘about’ image, this provides more context about me as a creator. I wanted these elements to be interactable and when the viewer's mouse goes over them, they expand giving more information, this was done for more interesting interactivity. My idea behind this is that I want users to explore the site and find interactable sections that pop out for the user.
                    </p>
                    <br />
                    <p className="blogtxt">I have also altered my main blog page menu for this assignment. I have chosen to further include a similar image menu on this page for users to navigate to my different blogs. My idea behind this was that I wanted my navigation to be coherent throughout the site. This also makes the interaction interesting and more engaging. I have changed my background of this page to a darker image of a fist, this provides good contrast for the red and white text as well as gives off the idea of rebellion and change. Each of the images on my image menu is different according to what type of blog post it is. I have done this for simplicity and ease of navigation, this makes the material that a user is looking for easier to find and fun to engage with. each of my blog pages that contain my blogs is set out similarly and have the same design, I wanted to do this for coherence and simplicity so that none of my pages looks out of place. I have further chosen to left align my text instead of centre my text, this makes it more easily readable and makes it look like the user is reading a page from a book. The references that I have used in my blog post are located below the post. At the top of every blog page, there is a blog navigation element, I have put this here to allow easier navigation to my different blog posts. At the bottom of the page, I have included a back button to make the navigation more intuitive and easier to use.
                    </p>
                    <br />
                    <p className="blogtxt">My internet artwork page is constructed in a simple way that sees a similar structure to the rest of my website. This has a heading element and underneath this, there is a paragraph that contextualizes and informs the user about how my internet artwork functions and its meaning. Below this is a navigational element that can be used to get to my internet art experiments and my final internet artwork. My final internet artwork posed many technical challenges for me and does need further refinement before it is ready and fully functional. This makes use of an SVG image of africa, i wish to imclude the other countries of the world at a later stage. these make use of buttons to trigger functions that change the countries colours and trigger animations. These animations and colour changing functions will be used to allow user interactivity with the work, and this is how I plan to convey the meaning of the work to the users. this is where I foresee many technical challenges, not because of its difficulty to implement and program functions but because of the sheer size of the SVG and the difficulty to find the different parts of the SVG image. At the present moment, it has minimal functionality but It has the essentials that I need to convey meaning in the work, I plan on improving this for my exam and increasing the user interactivity of the work.
                    </p>
                    <p className="blogtxt">My about page is very simple in its design and aims to only provide the user context about me and contain my references for the material I have used on the site.

                    </p>
                    <br />
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
