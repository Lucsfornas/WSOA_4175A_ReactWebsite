import React, { Component } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../pimpmypagestyling/footer.css';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="copyright"><p>&copy; 2021 Fornasari AKA Mr.Worldwide</p></div>

                <div className="socialmediatings">
                    <FacebookIcon />
                    <InstagramIcon />
                    <PinterestIcon />
                    <WhatsAppIcon />
                </div>
                <h1>footer my g</h1>
            </div>
        )
    }
}
