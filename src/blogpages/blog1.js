
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css'
import BurgerIcon from '@mui/icons-material/CalendarViewDay';

export default class blog1 extends Component {

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
                <h1 className="Blogheading">Close Reading Blog Post</h1>

                <p className="blogtxt">Toggle the burger menu to access other links</p>

                <div className="blognavdropdown">

                    <div className="blognavbutton">
                        <button onClick={this.toggleblognav}><BurgerIcon /></button>
                    </div>

                    <div className="BlogNav" id={this.state.openblogLinks ? "opened" : "closed"}>
                        <h2>Other Blog Posts:</h2>
                        <p>Close Reading Blog Posts</p>
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
                        <Link to="/blog10"><button>Blog 10</button></Link>
                        <p>My Internet Art proposal and descriptions from assignments 1 and 2</p>
                        <Link to="/IAprop"><button>I/A Proposal</button></Link>
                        <Link to="/IAdesc"><button>I/A Description</button></Link>

                    </div >
                </div>

                <article className="blogcont">
                    <h2 className="Blogheading">Close Reading on Decoloniality Concepts, Analytics, Praxis.</h2>
                    <br />
                    <p className="blogtxt">In this book’s introduction section, the arguments posed are interesting and engaging opening the
                        reader's eyes to the forces at play behind colonialism, this paper focuses on the colonial powers and
                        the effects that this colonization has had on colonized countries and territories. This further
                        interrogates the subject of decolonization and highlights why such a concept of breaking away from the
                        parent-child relationship that the powers of the world have on the colonized territories. I believe that
                        this resistance to the colonial powers is essential if the colonized territories are to move forward and
                        thrive, I say this because it enables different modes and ways of thinking in an “Indigenous thinkers”
                        way, opening new doors to reclaiming their own identities so that they do not always have to live in the
                        shadow of the colonial powers.
                    </p>
                    <br />
                    <p className="blogtxt">The paper refers to a concept of “Vincularidad” (Mignolo. Walsh, 2018) which is “the awareness of the
                        integral relation and interdependence amongst all living organisms” (Mignolo. Walsh, 2018) or as a
                        shortened concept, “relation and interdependence” (Mignolo. Walsh, 2018). I believe that this highlights
                        one of the most important tools in decolonization practices arsenal, the awareness of the effects of the
                        colonial powers. If indigenous thinkers are tuned into how the colonial powers have affected the
                        indigenous ways of thinking these ways can better be resisted and most importantly reformed into new
                        ways of personalized thinking for the territory. This is known as the “western geopolitics of
                        knowledge.” (Mignolo. Walsh, 2018). These are the ways that the colonized have been conditioned to think
                        in and more importantly produce knowledge. If these methods are reformed with the indigenous goals and
                        imperatives at their centre it will open up the doors to new ways of producing and consuming knowledge.
                        Leading to more content and knowledge produced of local subjects, concepts, and history. This
                        acknowledgement of the effects of the colonial power on the colonized is arguably for me the most
                        important step in forming a decolonization praxis because once these problems can be seen and
                        acknowledged they can actively be changed and reformed.
                    </p>
                    <br />
                    <p className="blogtxt">This child-parent relation between the colonial powers and the colonized is inherently racist and
                        functions on inequality, this inequality is seen in the capitalist way of functioning and governing a
                        country which is an inherently western way of running a country, this is a phenomenon that is present in
                        most if not all colonized territories. As ruth Gilmore states in a YouTube interview, “we cannot undo
                        racism without undoing capitalism” (antipodeonline 2020) she states this because the capitalist system
                        was built and functions on inequality. If these western concepts are challenged and changed the
                        colonized territories will no longer be in the shadow of the west and can instead rise. As Achille
                        Mbembe states in his paper, “the terms of the competition are defined by the west” (Mbembe 2016) this
                        highlights the importance of decolonization, if the colonized keep playing by the wests rules, they will
                        surely come out second best because the system is angled against them.
                    </p>
                    <br />
                    <p className="blogtxt">Decoloniality in this paper does not at all mean that the colonial ways of thinking and producing
                        knowledge will be disregarded, it instead focuses on creating “pluriversal and interversal
                        decoloniality” (Mignolo. Walsh, 2018) this shows that the western ideologies and ways of thinking aren’t
                        disregarded but it rather forms a part of a broader form of thinking with a focus on the colonized
                        territories concepts and ideas.
                    </p>
                    <br />
                    <section className="blogrefb">
                        <h3 class="references">
                            References</h3>
                        <p class="blogtxt">
                            Geographies of Racial Capitalism with Ruth Wilson Gilmore – An Antipode Foundation film -
                            Antipodeonline
                            (2020), Youtube, 1 June 2020, Viewed 25 August 2021, Available at:
                            https://www.youtube.com/watch?v=2CS627aKrJI.
                            <br />
                            MBEMBE, A. J. 2016. Decolonising the university: New directions. Arts & Humanities in Higher
                            Education.
                            15(1). 29-45.
                            <br />
                            Mignolo, W D. Walsh, C E. (2018) On Decoloniality:Concepts, Analytics, Praxis. Durham: Duke
                            University
                            Press.
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/blogs"><button>Back</button></Link>
                    <Link to="/blog2"><button>Next Blog</button></Link>
                </div>
            </div >
        )
    }
}
