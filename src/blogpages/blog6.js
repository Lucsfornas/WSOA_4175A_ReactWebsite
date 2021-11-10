import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pimpmypagestyling/blogpagestyle.css';

export default class blog6 extends Component {
    render() {
        return (
            <div className="blog1pg">
                <h1 className="Blogheading">Internet Artwork Analysis Blog Posts</h1>

                <p className="blogtxt">You can use these links to quickly navigate to my different blog posts.</p>

                <div className="BlogNav">
                    <h2>Other Blog Posts:</h2>
                    <p>Close Reading Blog Posts</p>
                    <Link to="/blog1"><button>Blog 1</button></Link>
                    <Link to="/blog5"><button>Blog 5</button></Link>
                    <p>Internet Artwork Analysis Blog Posts</p>
                    <Link to="/blog2"><button>Blog 2</button></Link>
                    <p>Technical Reflection Blog Posts</p>
                    <Link to="/blog3"><button>Blog 3</button></Link>
                    <Link to="/blog7"><button>Blog 7</button></Link>
                    <p>Artistic Reflection Blog Posts</p>
                    <Link to="/blog4"><button>Blog 4</button></Link>
                    <Link to="/blog8"><button>Blog 8</button></Link>
                    <p>My Internet Art proposal from assingment 1</p>
                    <Link to="/IAprop"><button>I/A Proposal</button></Link>
                </div >

                <article className="blogcont">
                    <h2 className="Blogheading">Analysis of the NFT Internet Artwork CryptoPunk #9998</h2>
                    <br />
                    <p className="blogtxt">This analysis is on the internet artwork “CryptoPunk#9998” (cnet,2021), this is the most expensive Non-Fungible Token (more commonly known as an NFT) artwork that has been sold to date. In recent years, NFT’s have been moving up and rising in popularity in the financial world, this is because they are similar to the concept of trading cards. The rarer a card is the more people will pay to say that they own the card. The same concept applies to NFT’s. NFT’s come in two forms, either a single minted unique piece or a piece that is part of a collection, where the same image is minted but with different rare characteristics. These can sell for thousands of dollars or millions depending on the rarity and what people are willing to pay for it. This is all done in Cryptocurrency and online and is secured by blockchains, this proves that you own the NFT.
                    </p>
                    <br />
                    <p className="blogtxt"> This NFT is a pixelated image of a man with white hair, green eyes and a basic shaped face. There is nothing too complicated or unique about the image itself, but the rarity of the image is what gives it value. It is part of a collection of 10 000 minted images of the same image, more specifically number #9998 of the minted works. This work sold for 532 million dollars (124,457 Ethereum). The biggest catch about this artwork is that it was sold and bought by the same person using different Crypto Wallets. Why would someone want to do this?? Buy your own artwork at a ridiculous price…. It is speculated that it was to add a great amount of value to the works to make it more appealing and bring it to the attention of the Crypto Buyers’ market. (cnet, 2021).
                    </p>
                    <br />
                    <p className="blogtxt">This artwork I believe stands as a statement about the capitalist system and highlights a few issues and factors about a capitalist market and the way capitalism functions. Firstly, the artwork has no physical material value, it is completely digital and relies on the value that people associate with it. this is like all artworks where the value is derived by how much someone is willing to pay for it. but this highlights and stands as a statement of the capitalist market. It shows how people in this capitalist market are willing to buy something with no material value because others want it, and they want to be able to say that they own it. This highlights the competitive nature of capitalism which is just one big contest to show who has the most money and who can buy these expensive items. It shows the falsity of the and the need to ‘show off’ in such a market, to appear like you are better than everyone else. This is how the capitalist system functions. The rich spend wealth on ridiculous non-physical objects just because they can. I believe that this digital artwork shows the falsity and shallow nature of competitive capitalism. This is because after the person sold the NFT to himself the price and value of all NFT’s in the collection went up in value. This shows that just because someone bought it for such a large amount it is now worth more to other people just to show off how much wealth some people have. This shows how a capitalist society social structure is based on how wealthy you are, highlighting further the factor that ‘cash is king’ in a capitalist society. This further shows that anything with meaning or value in such a society has a monetary value to it. In such a society, small tricks can be used such as buying your own artwork to drive up the price, this highlights faults in the system. This highlights the need for decolonial discourses for countries that have previously been colonized because it would be impossible to compete with these countries that the structure benefits. I believe that this NFT allows for great social commentary on the capitalist system and how it functions.
                    </p>
                    <br />
                    <p className="blogtxt">By analyzing this artwork and the capitalist market that it circulates in, it further highlights the need for Decoloniality. Not to completely disregard the capitalist system because much can be learnt from its successes and failures, but rater decolonial thinking that focuses on previously colonized countries to further develop their own concepts and ideas. Showing the need for “Pluriversal and interversal decoloniality” (Mignolo. Walsh,2018) This will create a society that is non-reliant on the global north of the globe and instead creates a better society for the previously colonized countries.
                    </p>
                    <br />
                    <section className="blogrefb">
                        <h3 class="references">
                            References</h3>
                        <p class="blogtxt">
                            Van Boom, D. (2021). This CryptoPunk NFT just sold for $530 million. Kind of. Available at:
                            https://www.cnet.com/news/this-cryptopunk-nft-just-sold-for-530-million-kind-of/ (accessed:
                            07/11/2021).
                            <br />
                            Mignolo, W D. Walsh, C E. (2018) On Decoloniality:Concepts, Analytics, Praxis. Durham: Duke
                            University
                            Press.
                        </p>
                    </section>
                </article>
                <div className="BlogNav"><Link to="/blogs"><button>Back</button></Link></div>
            </div >
        )
    }
}
