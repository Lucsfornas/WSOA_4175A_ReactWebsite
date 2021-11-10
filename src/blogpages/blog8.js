import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';

export default class blog8 extends Component {
    render() {
        return (
            <div className="blog1pg">
                <h1 className="Blogheading">Artistic Reflection Blog Posts</h1>

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
                    <Link to="/blog7"><button>Blog 7</button></Link>
                    <p>Artistic Reflection Blog Posts</p>
                    <Link to="/blog4"><button>Blog 4</button></Link>
                    <p>My Internet Art proposal from assingment 1</p>
                    <Link to="/IAprop"><button>I/A Proposal</button></Link>
                </div >

                <article className="blogcont">
                    <h2 className="Blogheading">Artistic Reflection on my creative process and vision for the site and the artwork.</h2>
                    <br />
                    <p className="blogtxt"> This is my second artistic reflection for my website and internet artwork. This will detail the stylistic changes that I have made to the website as well as my reasoning behind them. My idea behind the design and vision for the site is simple. I wanted to use a simple and easy to read and understand layout. For my used colours, I wanted them to be simple and have a neon aesthetic to them, which are displayed on darker backgrounds. These neon colours draw attention to important parts and elements of the website, these are contrasted against the darker tones of the site. This is kept consistent throughout the site to communicate a sense of unity and coherence. I will explain my thinking behind my altered UI in this post and explain my choice of colouring for the internet artwork and website itself and how I wish for the website to be experienced.
                    </p>
                    <br />
                    <p className="blogtxt"> In what ways has my website changed for better user reception? Well, I enjoyed the neon effect that my website gave off in assignment one’s variant, but for assignment 2 I wanted to add more stylized complexity to better align and communicate my websites meaning. For my navigational element, I have chosen to keep the neon green which provides a nice contrast against the black background of the element. This draws the user’s attention to the navigational elements and what can be navigated to. I have also chosen to include a colourful image of the earth in my header, between the title of the website. This adds a pleasant touch of colour to the navigational bar making it more interesting and attention-grabbing. I have also used colour to communicate interactivity in the navbar. when a user hovers the mouse over the nav elements they change from the neon green colour to a neon red colour and the text expands a little. This communicates through colour and sizing to the user that these elements can be interacted with, this also makes the interaction more interesting. For my footer element, I have chosen to keep it simple and use plain white text to best contrast against the black background of the element. I have also chosen to include social media link images in the footer element, these add a bit more depth to the website by adding interesting smaller details. The footer element rounds off each of the pages and I have chosen to include a footer because in my website variant for assignment 1 my page looked like it had no end and just dropped off the screen.
                    </p>
                    <br />
                    <p className="blogtxt">For each of my pages, I have opted to instead go for stylistic backgrounds instead of plain simple single-coloured backgrounds. This allows me to better communicate the meaning of the site on individual pages stylistically and interestingly. For the homepage I have added an image background of a neon city, this had vibrant neon colours of red, pink and orange. this aligns with my stylistic goal of having a neon type of style to the site. This is contrasted against the black that I have used in the navigational bar and footer and makes the site interesting, aesthetic and attention-grabbing. I have chosen to keep the headings in a neon red to draw attention to the site and communicate what page users are on with ease. These heading elements have an added black background to them with differentiates them from the colourful background. My textual elements on the homepage have the same black background to them, this allows for differentiation and easier reading of the white text. The contrast of the white text on the black background also makes the text readable by colour blind users, I did this to be inclusive of all users. I have also made use of images as an ‘image menu’. This draws the users attention to the different pages that they can navigate to and the background images communicate to the user what each page is about visually. The blogs page menu element has an image of a lightbulb which communicates a feeling of insight, the internet artworks menu image has a picture of fibre optic cabling which communicates a feeling of technology and digitalization. The about page menu has a simpler image that visually communicates that it is the about section.
                    </p>
                    <br />
                    <p className="blogtxt">For my main blogs navigation page, I have changed the background image to one that Is darker and that displays a fist in the air. I have specifically chosen this image for two reasons, one because it communicates a feeling of rebellion and change and two because it provides contrast for the image menu that is the main element of the page. I have chosen to instead go with a more visual approach to navigation on this page and create an image menu similar to the one found on the homepage. I feel like this is a better way to make interacting and navigating through the site easier and more intuitive for users. the image menu displays what the blog post is about through a neon red title and I have chosen to include a small book image to communicate that it is written content. These different image menus also have different background images that communicate what section the work falls under, for close readings I have chosen an image of hand holding a world, this communicates that the issues discussed have reference and are apparent globally. For my internet art analysis, I have chosen to reuse the image of blue fibre optic cables, this communicates that the work deals with digital technology and artworks. My technical reflection blog posts have an image of gears, this symbolizes that the post deals with the inner workings and thinking behind the site and artwork itself. The last category is my artistic reflection image which is a flower with different bursts of colour, this communicates that the blog post has to do with the design and colouring of my website. I have made use of these images to successfully communicate to users what each blog page is about and what section the blog page falls under. For my pages that contain the blogs, I have chosen to keep those similar to the pages in assignment 1 because I enjoyed the simplicity and styling of the pages. These pages are simplistic and have a dark blue background which provides a nice contrast, making the white text and red neon headings easily readable and distinguishable. This styling is consistent for all my blog pages.
                    </p>
                    <br />
                    <p className="blogtxt">
                        For my internet artwork page, I have chosen to go with a background image of fibre optic cables that have different red, blue and pink colours. This in contrast with the black nav bar and footer gives off a neon type of look. I have included a black background to the neon red headings and white text to make them easily distinguishable from the background. This makes them easier to read for users and provides more of a contrast making it readable to people with disadvantages such as colour blindness. Below this, I have included a green box with slight transparency this box draws the users attention and contains my navigational buttons that navigate to the internet artworks.
                    </p>
                    <br />
                    <p className="blogtxt">
                        My final internet artwork page has been designed with a simple dark blue background to make the SVG image stand out. This SVG image is of a world map and has the countries of the world coloured in many different colours. For my final internet artwork, I will use buttons to change the colours of this work. These colours will communicate the meaning of the work to the user, I will use colours of high contrast to illuminate the northern hemisphere and colours that are dull for the southern hemisphere. This is meant to interrogate how the global population sees the global north and south in a completely different light. The buttons will be used so that users can interact with the works and change the colours on the map, this interactivity makes the artwork more meaningful.
                    </p>
                    <br />
                    <p className="blogtxt">
                        I also had the goal in mind when designing the site that I wanted it to be inclusive of everyone. I have used text that is easily readable and recognizable and have designed it so that there is high contrasted text. This allows people with dyslexia and colour-blindness to also easily interact with my website.
                    </p>
                    <section className="blogrefb">
                        <h3 className="references">
                            References</h3>
                        <p className="blogtxt">
                            N/A
                        </p>
                    </section>
                </article>
                <div className="BlogNav"><Link to="/blogs"><button>Back</button></Link></div>
            </div >
        )
    }
}
