import React, { Component } from 'react';
import '../pimpmypagestyling/internetart.css';
import IAimg from '../images/fiberoptic1use.jpg';
import { Link } from 'react-router-dom';

export default class internetart extends Component {
    render() {
        return (
            <div className="internetartpg" style={{ backgroundImage: `url(${IAimg})` }}>
                <h1 className="IAheading">Internet Art Homepage</h1>

                <section>
                    <div className="IAtxtcont">
                        <h2 className="BlogheadingIA">My Final Internet Artwork Description, Rationale and Reflection</h2>
                        <br />
                        <p className="miniheading">Description</p>
                        <p className="blogtxtIA">
                            This piece of self-made internet artwork is an image of the continent of Africa. It has two buttons that the user can interact with that alters the physical appearance of the work itself. The buttons are labelled “Technology out of Africa” and “Technology into Africa”.  The artwork starts out as a bland and grey in colour SVG image of Africa. This makes it look uninteresting and mediocre. This is what the technology into Africa button looks like. This is made to symbolize the technology that is imported into Africa from external countries that it relies upon for the technology. However, once the technology out of Africa button is interacted with the artwork drastically changes in colour. It will slowly transition to radiating a colourful and brilliant neon green glow. Once this button is pressed, arrows appear which face inwards going towards Africa. This symbolizes how if Africa were to become technologically un-reliant on the continents external to itself and start producing its own technological products and consumables it would drastically both how the global north views Africa and how valuable Africa is. This would allow Africa to thrive as a continent.
                        </p>
                        <p className="miniheading">Rationale</p>
                        <p className="blogtxtIA"> This internet artwork image of the continent of Africa has many meanings that deal with the topics of technology, colonialism and how the world views africa. At first this is made to look mediocre and bland; this is shown by the uninteresting grey colour. This is what happens when the “technology into africa” button is pressed. This shows how the imports and dependencies on other countries for technology affects south africa. This is essentially techno-colonialism. Because we consume foreign technology and foreign content. This grey colour symbolizes how africa at the current moment in time is dependent and effected by the views of the colonisers and the global north. They are looked down upon and live in the shadow of the global north. This view of the African continent is due to decades of colonial activity and exploitation that has been imposed upon africa. This has led the global north to both think that they are better than the global south and believe that only their views matter. A current example of this is the way that the US, UK, and EU have restricted travel to south africa, in the light of the discovery of the omnicron variant of the covid-19 virus that was discovered by south africa. This was possible because of South Africa’s technological advancement which has allowed more in-depth study and investigation of the covid-19 virus. This barring of travel was done even though the variant was present in the population of these global northern societies before it was in South Africa. This shows how africa falls victim to the historical and stereotypical views of being less important than the global north. This brings me to my most pivotal meaning of my work. The power of technological advancement. when the “technology out of africa” button is pressed the continent lights up, in a brilliant neon green colour. This colour was used to symbolize the intense growth and view change that africa would go through if it were to become producers of technology and be at the global forefront of technological advancement. This would not only change the way that the global north views Africa, but it would further uplift the continent by creating jobs, and new areas of employment. This is what the arrows that appear on the sides of the image of Africa symbolize. The fact that technology has the power to challenge and change the discourses of centuries of colonialism through upliftment. This would not only place a higher global importance and attention on the continent as a whole, but also create an environment where africa focuses on itself instead of the global north. This is the meaning behind the whole artwork. this focus on technology fits in with the theme of the site. This cyberpunk type of theme takes a focus on technology and its idolization, and the power that is has.
                        </p>
                        <p className="miniheading">Reflection</p>
                        <p className="blogtxtIA">
                            This internet artwork has many areas where it both succeeds and has its shortcomings. I believe the areas where I believe this artwork succeeds outweigh the areas where it comes short. I believe that the functioning of this internet artwork where it transitions into different colours and the arrows appear and disappear on button click is a success to the artwork as a whole. this is essentially the backbone in creating the meaning behind the artwork. without this functioning and interaction of the user with the buttons the artwork would just be a displayed image, but the fact that it is altered through this interaction is a great success. this artwork is also a success in its design. The design aligns with what I wanted for the whole site aesthetically, this is to give off a cyberpunk type of aesthetic and feel. I believe that in keeping the artwork simple and not overcomplicating it by adding many more features and colour transitions it adds to the works meaning and doesn’t distract from the intended meaning. I believe this is a success and enhances the meaning of the works. I further believe that this artwork has shortcomings that could be improved upon with further development. I believe that this artwork has very deep meanings that are shown through very simplistic implementations, this is a goof thing but where it encounters a shortcoming is that this work cannot be fully understood without the description and rationale to support it. this artwork also falls short in areas such as the context of what happens to the world around it, a fix to this would be to implement a map of the world and then show how Africa changes compared to the world map. This could provide an easier way to understand the meaning behind it in a more visual way.</p>
                    </div>
                </section>
                <article className="txtcontIA">
                    <p className="IAtxt"> My final Internet Artwork Idea.</p>
                    <div className="internetartbutton">
                        <Link to="/IAFinal"><button>Africa Internet Artwork</button></Link>
                    </div>
                    <br />
                    <br />
                </article>
            </div>
        )
    }
}
