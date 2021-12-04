import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';
import BurgerIcon from '@mui/icons-material/CalendarViewDay';

export default class blog5 extends Component {
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
                        <Link to="/blog1"><button>Blog 1</button></Link>
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
                    <h2 className="Blogheading">Close Reading on Algorithmic Injustices Towards a Relational Ethic</h2>
                    <br />
                    <p className="blogtxt">
                        This paper presented by Abeba Birhane and Fred Cummins engages with ethical injustices found when interacting with algorithms and automated systems. These tools that are used in everyday life rely on these algorithms and mass collected data from users to function and work. But by the way that these tools function and how they are coded at a base level, they perpetuate biases and injustices of historical colonial power struggles and function in a way of oppression of the vulnerable in a societal structure. These systems as stated in the paper, affect and impact the most vulnerable and powerless that are found at the lowest part of a societies social structure (Birhane and Cummins, 2019).
                    </p>
                    <br />
                    <p className="blogtxt">
                        The main problem that is outlined in the paper presented is that these machine learning systems attempt to predict behaviours by using historical data and learning from it by discerning patterns. These systems however not only pick up on facts but also pick up on shallow and untrue generalized stereotypes that are broadly based on social and historical racist practices. As this is what the algorithms look for it is the marginalized groups of people at the bottom of the social hierarchy that is mostly and heavily affected and suffer the consequences of unfair profiling. (Birhane and Cummins, 2019.). In many areas of today’s social life, these profiling and decision-making algorithms are used daily, this perpetuates racial and social profiling and associates innocent citizens of a lower class with stereotypical views and behaviours which leads to “unfair and discriminatory outcomes” (Birhane and Cummins, 2019.). As discussed in the paper, some solutions to this problem are to instead mask it with a solution that makes it seem like the problem is solved instead of solving the problem.
                    </p>
                    <br />
                    <p className="blogtxt">
                        The paper further outlines 4 steps that can be taken to better these systems and instead create a system of “Relational Ethics” (Birhane and cummins, 2019.). These are “Centering the disproportionally impacted”, “Prioritization of understanding over prediction”, “Algorithms as more than tools that create and sustains certain social order”, “Bias, fairness, and justice are moving targets” (Birhane and cummins, 2019). These 4 steps that must be taken to ensure fairness in this systemic and algorithmic profiling highlights the mindset that must be adopted by people if these systems are to be used. A mindset that centralizes understanding of these prejudices and biases instead of using them to marginalize and categorize people into a group that is stereotypical and racialized.
                    </p>
                    <br />
                    <p className="blogtxt">
                        This highlights the need for a decolonial praxis even more because even on an algorithmic level people that are disadvantaged from the historical colonial past relations are still affected by stereotypical views and mistruths. As stated by the website CCCBLAB, these processes aren’t a result of explicit programming but rather a result of “complex mathematical operations carried out automatically that look for patterns in an ocean of digitized data” (CCCBLAB, 2017) this shows that these systems are not designed to be unjust, but they rather pick up on the unjust historical practices that have formed patterns in our human history. This is a big issue for marginalized groups of people that are not algorithmically discriminated against because of untruly and unfairly drawn conclusions. This highlights the fact that machines and lines of code are unable to process human emotion and put forward an understanding of situations that could have other possible outcomes. Therefore, they should not be at all used to determine a person’s fate because they cannot understand and process a whole spectrum of possibilities and human emotion. In some cases, yes, patterns can offer great insight into behavior and can be used to predict possible outcomes, but the keyword here is ‘predict’ and the implication of this word means that it has a possibility of being true or not. Therefore, these prediction and profiling systems should not be used in any way to make life changing decisions. Another bias of these systems is that they only realize and identify patterns in digital data that they are fed. This is a big problem because they miss a lot of data that should be used in the decision process because it cannot be digitalized and fed into the algorithm such as human emotion.
                    </p>
                    <br />
                    <section className="blogrefb">
                        <h3 class="references">
                            References</h3>
                        <p class="blogtxt">
                            Casacuberta, D. (2017). Algorithmic Injustice. CCCBLAB. Available at:
                            https://lab.cccb.org/en/algorithmic-injustice/ (accessed:
                            07/11/2021).
                            <br />
                            Birhane, A. Cummins, F. (2019). Algorithmic Injustices: Towards a Relational Ethics. Cornell University. Ireland
                        </p>
                    </section>
                </article>
                <div className="BlogNavigation">
                    <Link to="/blog4"><button>Previous Blog</button></Link>
                    <Link to="/blogs"><button>Back</button></Link>
                    <Link to="/blog6"><button>Next Blog</button></Link>
                </div>
            </div >
        )
    }
}
