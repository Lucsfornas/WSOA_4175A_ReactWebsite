import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BurgerIcon from '@mui/icons-material/CalendarViewDay';

export default class blog2 extends Component {
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
                <h1 className="Blogheading">Internet Artwork Analysis Blog Posts</h1>

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
                        <Link to="/blog6"><button>Blog 6</button></Link>
                        <p>Technical Reflection Blog Posts</p>
                        <Link to="/blog3"><button>Blog 3</button></Link>
                        <Link to="/blog7"><button>Blog 7</button></Link>
                        <Link to="/blog9"><button>Blog 9</button></Link>
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
                    <h2 className="Blogheading">Analysis of the internet artwork 'Vote-Auction' by Lizvlx and Hans Bernard</h2>
                    <br />
                    <p className="blogtxt">For my internet artwork analysis, I will be analyzing the internet artwork ‘vote-auction’ from 2000 –
                        2006 from the studio UBERMORGEN created by Lizvlx and Hans Bernard. I will make use of the personal
                        analytical framework described on the website Victoria state government (victoria state government,
                        2021) to aid in my analysis of the
                        work in conjunction with the theoretical concept of decoloniality engaged within this course. This
                        personal analytical framework details how “students consider how the artists or viewers personal
                        feelings, thinking and experiences impact the creation and the interpretation of the artworks.”
                        (victoria state government, 2021). I
                        will be approaching the analysis of this artwork from the lens of decoloniality described in the paper
                        by Mignolo on decoloniality concepts (Mignolo, 2018).
                    </p>
                    <br />
                    <p className="blogtxt">This internet artwork is known as “VOTE-AUCTION” (NET ART ANTOLOGY. 2006) the artwork was created in
                        2000 and functioned as a
                        website “online auction platform that claimed to allow Americans to sell their votes online”(NET ART
                        ANTOLOGY. 2006). This
                        project was not a marketplace but rather an “intervention into a political discourse” (NET ART ANTOLOGY.
                        2006) which gained
                        massive media attention at the time. The most important and interesting fact that this artwork brought
                        to light were questions about morality under a capitalist regime, which interrogated the relationship
                        between leadership and money. This is the meaning behind the work and what the artists attempt to show.
                    </p>
                    <br />
                    <p className="blogtxt">I believe that this work is very interesting because it highlights the need for decolonizing praxis to
                        take place because of the inherent flaws found in the capitalist regime. This brings to light how the
                        concepts of capitalism are flawed in the way that cash is king under this regime it has the power to do
                        anything. It is a powerful driving force behind nearly everything in capitalism. From the lens of
                        decoloniality capitalism is a concept that is instantiated and defined by the western powers of the
                        world, that is present and affects our society to this day. The uncovered meaning of this work that the
                        artist intended is that “elections are flush with corporate cash” (NET ART ANTOLOGY. 2006). This shows
                        how the cash under the
                        capitalist regime can control nearly every aspect of society and the lives of people, and If you have
                        enough of it, it can control a country. If we as the global south are to get away from this regime a
                        decolonizing praxis needs to be formed to counter capitalisms effects on our society and learn from the
                        mistakes and flaws that are seen in this capitalist society. The meaning behind this work for me is to
                        highlight the great inequalities that exist in a capitalist society, where the rules and political
                        agendas are dictated by the ones with the most funding to do so. This leaves the majority of the rest of
                        society helpless and under the control of the elite few that hold the vast majority of wealth. This
                        shows how capitalism feeds off the disadvantaged and requires inequality to function. This is a major
                        problem in a society that is said to be ‘free’. This further highlights the need for a decolonizing
                        praxis in our society so that we may not only become our society but break away from such controlling
                        concepts as everything is based on money. This will allow our society to become different and reform and
                        will further allow us to break free from a way of living that is ‘defined by the west’. this internet
                        artwork is very important in bringing to light and identifying the major issue with capitalism, that
                        people are willing to sell their freedom and choice for an economic benefit. this further shows the need
                        for ‘indigenous thinkers’ in our society.
                    </p>
                    <br />
                    <p className="blogtxt">Another importance of this work is that it brings to light the issues of capitalism so that we may be
                        aware of the effects that the colonial powers have. This allows us to actively question our capitalist
                        inherited society and what does and doesn’t work for the people. With these flaws now brought to light,
                        it is up to indigenous thinkers to create different modes of thinking. To challenge and change the
                        concepts present in the society that we find ourselves in if we are to ever break away from the colonial
                        powers and thrive as our society independent from the wests control. As Diana McCarthy stated in her
                        article “vote auction 3.0: Digital deja vu” (McCarthy, 2021), the work “not only played into but off of
                        the deeply
                        held fears and values of the population. Their votes could be auctioned off to the highest bidder – or
                        they could cash in on not voting” (McCarthy, 2021). This shows the flaws in the capitalist system in
                        2000 that are
                        still present to this day. The unfair rigging of elections. Only now in the current day and age, we have
                        the new age of technology to worry about, where hackers and computer coders have the power to change
                        people’s views just by showing people things that support capitalism rather than expose it. as Diana
                        states in her article “like all great works of art, it can be read through a contemporary lens (or on a
                        screen) as less of a historical artefact and more of an avant-garde indicator of things to
                        come”(McCarthy, 2021). This
                        shows how the issues present in 2000 are still present today, which further highlights the need for a
                        decolonizing praxis to take place.
                    </p>
                    <br />
                    <section className="blogrefb">
                        <h3 class="references">
                            References</h3>
                        <p class="blogtxt">
                            McCarthy, D. (2018) vote auction 3.0: digital deja vu. Available at:
                            https://rhizome.org/editorial/2018/nov/06/vote-auction-news-fake/ Accessed 03 october 2021.
                            <br />
                            Mignolo, W D. Walsh, C E. (2018) On Decoloniality:Concepts, Analytics, Praxis. Durham: Duke
                            University
                            <br />
                            Victoria state government. (2021). introducing the analytical frameworks. Available at:
                            https://www.education.vic.gov.au/school/teachers/teachingresources/discipline/english/literacy/Pages/introducing-the-analytical-frameworks.aspx
                            Accessed on 03 october 2021.
                            <br />
                            NET ART ANTOLOGY. (2006) Vote-Auction. Available at: https://anthology.rhizome.org/vote-auction
                            Accessed on:03 october 2021.
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/blog1"><button>Previous Blog</button></Link>
                    <Link to="/blogs"><button>Back</button></Link>
                    <Link to="/blog3"><button>Next Blog</button></Link>
                </div>
            </div >
        )
    }
}
