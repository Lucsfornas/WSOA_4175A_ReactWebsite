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
                        <Link to="/blog9"><button>Blog 9</button></Link>
                        <p>Artistic Reflection Blog Posts</p>
                        <Link to="/blog4"><button>Blog 4</button></Link>
                        <Link to="/blog8"><button>Blog 8</button></Link>
                        <p>My Internet Art proposal and descriptions from assignments 1 and 2</p>
                        <Link to="/IAprop"><button>I/A Proposal</button></Link>
                        <Link to="/IAdesc"><button>I/A Description</button></Link>
                    </div >
                </div>

                <article className="blogcont">
                    <h2 className="Blogheading">Exam Artistic Reflection on my creative process and vision for the site.</h2>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <br />
                    <p className="blogtxt">

                    </p>
                    <section className="blogrefb">
                        <h3 className="references">
                            References</h3>
                        <p className="blogtxt">
                            N/A
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/blog9"><button>Previous Blog</button></Link>
                    <Link to="/blogs"><button>Back</button></Link>
                </div>
            </div >
        )
    }
}
