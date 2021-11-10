import React, { Component } from 'react';
import '../pimpmypagestyling/internetart.css';
import IAimg from '../images/fiberoptic.jpg';
import { Link } from 'react-router-dom';

export default class internetart extends Component {
    render() {
        return (
            <div className="internetartpg" style={{ backgroundImage: `url(${IAimg})` }}>
                <h1 className="IAheading">Internet Art Homepage</h1>

                <section>
                    <h2 className="BlogheadingIA">My Final Internet Artwork description and proposal for assignment 2 and exam</h2>
                    <br />
                    <p className="blogtxtIA">
                        I would like to focus my internet artwork project on animation and colour changing and altering of SVG images. I have previously been experimenting with colour changes and transitions in my experiments. So The work will be programmed and animated in the way that it
                        changes colour of the SVG image on user interaction. i further plan to use interactivity to change and alter the
                        colours and sizing of the work itself. This will aid in helping me connunicate the meaning of my work in a more effective way. My thinking behind the work is that i want it to interrogate global inequalities and visions of the global north and south that have been set up by historical discourses of colonialism.
                        These colours and animations will be displayed on an world map SVG image, this can be seen in my Internet Art World page.
                    </p>
                    <p className="blogtxtIA"> I would like this work
                        to engage with concepts of decoloniality and the inequalities between the historical colonial powers and
                        the colonized. the focus i would like this to take is on how the global north and south are viewed in a
                        completely different lights just because of their positioning in the world and because of the historical past
                        relations of the north and south. i plan on achieving this by
                        creating an internet artwork that functions as a historical map and has three buttons. the buttons will be
                        labelled global north, global south and decolonial praxis. currently only one of the buttons has been implimented with its functionality, but for the exam submission the other two buttons will be implimented. when the north button is pressed a the map will change colour and the northern hemisphere of the map will be illuminated. This will have bright and high contrasting colours compared to the southern hemishphere which will have dulled down colours. when
                        the second button labelled south is pressed the northern hemishphere will light up in high contrasting colours once again and the south will once again will be very monotone. when the third decolonial praxis button is pressed the southern hemisphere will change from monotone colours to colours of higher contrast. this will show that through an adopted decolonial praxis the global south can flourish and no longer live in the shadow of the global north.  i wish to do this to interrogate the ideas and falsified views that the global population
                        has that the
                        global north is somehow better and more efficient than the global south is. this interogates the ideas
                        of inequality between the global north and south, with a focus on Africa and how the global
                        north takes advantage of these inequalities to put themselves in a better light than the global south.
                        this links to the concepts that have been engaged with in the course such as decolonisation, design
                        jusitice and critical code studies.
                    </p>
                    <p className="blogtxtIA">
                        i wish to style this artwork in two different ways. the background will be of a changing colour
                        consistant throughout the whole artwork. where the styling differs is the different buttons and what
                        will be created when the user interacts with them. when the user interacts with the north button on the
                        artwork a colour that will be bright and eye catching for the viewer will illuminate the nothern part of the map while the south colour goes more monotone. when the south button is
                        interacted with the northern hemisphere will light up again and the southern hemishpere will have less muted monotone colours but still a noticable difference to the north.
                        When the decolonial praxis button is pressed the south will instead light up with greater luminosity that is equal to that of the north.
                    </p>
                </section>
                <article className="txtcont">
                    <p className="IAtxt"> My final Internet Artwork Idea.</p>
                    <div className="internetartbutton">
                        <Link to="/IAFinal"><button>The World Internet Artwork</button></Link>
                    </div>
                </article>
            </div>
        )
    }
}
