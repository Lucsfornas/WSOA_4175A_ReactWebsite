import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';

export default class IAproposal extends Component {
    render() {
        return (
            <div className="blog1pg">
                <h1 className="Blogheading">Internet Artwork Proposal</h1>

                <p className="blogtxt">You can use these links to quickly navigate to my different blog posts.</p>

                <div className="BlogNav">
                    <h2>Other Blog Posts:</h2>
                    <p>Close Reading Blog Posts</p>
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
                </div >

                <article className="blogcont">
                    <h2 className="Blogheading">My initial Artwork description and proposal from assignment 1</h2>
                    <br />
                    <p className="blogtxt">I would like to focus my internet artwork project on animation in the 3d space of the website. i have
                        already began experimenting with animating a loading circle type of object which i plan on bringing into
                        a 3d caracel type of enviroment. the work will also be programmed and animated in the way that it
                        changes colour on user interaction. i further plan to use interactivity to change and alter the shapes,
                        colours and sizing of the work itself. my thinking behind the work is that i want it to always be in
                        motion and react in a way that is not expected by the user when it is interacted with. i plan on
                        randomizing the effects and translations that happen to the work when it is clicked on. so that the user
                        does not know how it will look next. for example when the glowing circle that moves (in my first
                        experiment) is clicked on it could change into a glowing square, or triangle etc. and the 3d carosel
                        effect could randomly change its orientation to vertical, horizontal or vertical.
                    </p>
                    <br />
                    <p className="blogtxt">I would like this work
                        to engage with concepts of decoloniality and the inequalities between the historical colonial powers and
                        the colonized. the focus i would like this to take is on how the global north and south are viewed in a
                        completely different light just because of their positioning in the world and because of the past
                        relations of the north and south. i plan on achieving this by
                        creating an internet artwork that functions in a 3D space that has two buttons. the buttons will be
                        labelled north and south. when the north button is pressed a randomized 3 dimentional animated object
                        that changes colour will be generated, this object will have bright and high contrasting colours. when
                        the second button labelled south is pressed another 3 dimentional animated object that changes colour
                        will be generated, however this object will not have bright colours and will instead be very monotone
                        and will not function in the way the other 'north' object functions. instead it will have slower
                        animations. i wish to do this to interrogate the ideas and falsified views that the global population
                        has that the
                        global north is somehow better and more efficient than the global south is. this interogates the ideas
                        of inequality between the global north and south, with a focus on Southern africa and how the global
                        north takes advantage of these inequalities to put themselves in a better light than the global south.
                        this links to the concepts that have been engaged with in the course such as decolonisation, design
                        jusitice and critical code studies.
                    </p>
                    <br />
                    <p className="blogtxt">i wish to style this artwork in two different ways. the background will be of a changing colour
                        consistant throughout the whole artwork. where the styling differs is the different buttons and what
                        will be created when the user interacts with them. when the user interacts with the north button on the
                        artwork a stylized shape will be spawned, this shape will constantly change colours through CSS
                        animation. these colours will be bright and eye catching for the viewer. when the south button is
                        interacted with a different shape will be spawned but instead this shape will have muted monotone
                        colours that are animated and always changing. these shapes will transform and translate in a 3d space
                        on the screen.
                    </p>
                    <br />
                    <p className="blogtxt">the materials that i have used are all linked and referenced on my internet art experimental
                        page. the only technical challanges that i forsee in the future are two things. the first being
                        the coding of the randomized shapes that will be created when a button is pressed. and the second is the
                        animations of the translations and transformations of the works in the 3d space. i will have to do more
                        research how to use the 3d space correctly and how to code randomisation into the artwork itself.
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

            </div>
        )
    }
}
