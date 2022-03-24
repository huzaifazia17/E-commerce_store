import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>

                        <FooterLinkTitle>About Us</FooterLinkTitle>

                        <FooterLink to="/signin">Socials</FooterLink>
                        <FooterLink to="/signin">How it Works</FooterLink>
                        <FooterLink to="/signin">Delivery Times</FooterLink>
                        <FooterLink to="/signin">Terms Of Service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>Orange</SocialLogo>

                    <WebsiteRights>Orange © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href="/"target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/"target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com"target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/"target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer