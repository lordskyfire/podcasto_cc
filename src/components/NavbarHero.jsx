import React, { Component } from "react";
import { Link } from "gatsby";
// import UserLinks from "./UserLinks";
import Logo from "./Logo";
import MainLogo from "../../static/logos/code_chefs_main_logo.png";
import LogoTest from "./LogoTest";
import { Location } from '@reach/router';
import {ReactComponent as PodcastApple} from "../assets/podcastApple.svg";
import {ReactComponent as PodcastGoogle} from "../assets/podcastGoogle.svg";
import {ReactComponent as PodcastGooglePlayMusic} from "../assets/podcastGooglePlayMusic.svg";
import {ReactComponent as PodcastOvercast} from "../assets/podcastOvercast.svg";
import {ReactComponent as PodcastPocketcasts} from "../assets/podcastPocketcasts.svg";
import {ReactComponent as PodcastSpotify} from "../assets/podcastSpotify.svg";
import {ReactComponent as PodcastRss} from "../assets/podcastRss.svg";
import {ReactComponent as PodcastTwitter} from "../assets/podcastTwitter.svg";


const Navbar = (props) => {
  // const { config } = props;
  // const url = config.siteRss;
  // const { copyright } = config;
  // if (!copyright) {
  //   return null;
  // }
  return (
    <>
    <section className="cc-container">
      <div className="cc-logo-hero">
        {/* <img src={logo} alt="logo"/> */}
        {/* <img src={logo3svg} alt="logo"/> */}
        {/* <Logo/> */}
        <Link to={'/'}>
          <img className="main-logo" alt="Code Chefs Logo" src={MainLogo}/>
        </Link>
      </div>
      {/* <div className="cc-logo-hero">
        <LogoTest/>
      </div> */}
      <div className="cc-hero-description text-center">
        <p className="my-0 color-offgray">Hungry Web Developer Podcast</p>
      </div>
      <div className="social-links-wrapper">
        <div className="social-links">
          {/* <img src={podcastApple} alt="podcast apple"/>
          <img src={podcastGoogle} alt="podcast apple"/>
          <img src={podcastGooglePlayMusic} alt="podcast apple"/>
          <img src={podcastOvercast} alt="podcast apple"/>
          <img src={podcastPocketcasts} alt="podcast apple"/>
          <img src={podcastSpotify} alt="podcast apple"/>
          <img src={podcastRss} alt="podcast apple"/>
          <img src={podcastTwitter} alt="podcast apple"/> */}
          <a className="podcast-links" target="_blank" href="https://twitter.com/codechefsdev">
            <PodcastTwitter/>
          </a>
          <a className="podcast-links" target="_blank" href="https://podcasts.apple.com/us/podcast/code-chefs-hungry-web-developer-podcast/id1536223859">
            <PodcastApple/>
          </a>
          <a className="podcast-links" target="_blank" href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuY29kZWNoZWZzLmRldi9yc3MueG1s?sa=X&ved=0CBQQ27cFahcKEwjg4Obtj7_sAhUAAAAAHQAAAAAQAQ">
            <PodcastGoogle/>
          </a>
          {/* <a className="podcast-links" href="https://twitter.com/codechefsdev">
            <PodcastGooglePlayMusic/>
          </a> */}
          <a className="podcast-links" target="_blank" href="https://open.spotify.com/show/6DxHVg6CAOzwHnLgQClrs7">
            <PodcastSpotify/>
          </a>
          <a className="podcast-links" target="_blank" href="https://pca.st/wtu4690d">
            <PodcastPocketcasts/>
          </a>
          <a className="podcast-links" target="_blank" href="https://overcast.fm/p2403384-t859cb">
            <PodcastOvercast/>
          </a>
          <a className="podcast-links" target="_blank" href="https://codechefs.dev/rss.xml">
            <PodcastRss/>
          </a>
        </div>
      </div>

      <nav className="cc-navbar">
        <div className="cc-navitem">
          <Link to="/" activeClassName="active-link">
            Episodes
          </Link>
        </div>
        <div className="cc-navitem">
          <Link to="/about" activeClassName="active-link">About</Link>
        </div>
        <div className="cc-navitem">
          <Link to="/support" activeClassName="active-link">Support</Link>
        </div>
      </nav>
   
    </section>
    </>
  );
}

export default Navbar;
