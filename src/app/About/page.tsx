import Footer from "../components/Footer";
import Header from "../components/Header";
import "./about.css";
import Image from "next/image";
// icons
import { IoPlay } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";

// brands logo
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.png";

export default function page() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="ab-hero">
          <div className="ab-he-text">
            <span>ABOUT COMPANY</span>
            <h1>ABOUT US</h1>
            <p>
              We know how large objects will act, but things on a small scale
            </p>
            <button>Get Quote Now</button>
          </div>
          <div className="ab-he-image"></div>
        </div>

        <div className="problem">
          <h4 className="p-head">Problems trying</h4>
          <div className="p-s-text">
            <div className="p-s-1">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </div>
            <div className="p-s-2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </div>
          </div>
        </div>

        <div className="ab-figures">
          <div className="fig">
            <h2>15K</h2>
            <span>Happy Customers</span>
          </div>

          <div className="fig">
            <h2>150K</h2>
            <span>Monthly Visitors</span>
          </div>

          <div className="fig">
            <h2>15</h2>
            <span>Countries Worldwide</span>
          </div>

          <div className="fig">
            <h2>100+</h2>
            <span>Top Partners</span>
          </div>
        </div>

        <div className="ab-video">
          <div className="ab-img">
            <div className="ab-play">
              <IoPlay />
            </div>
          </div>
        </div>

        <div className="ab-team">
          <h2>Meet Our Team</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <div className="team-card-cont">
            <div className="team-card">
              <div className="t-c-img-1"></div>
              <div className="t-c-text">
                <h4>Username</h4>
                <p>Professional</p>
                <div className="t-c-icons">
                  <IoLogoFacebook />
                  <FaInstagram />
                  <IoLogoTwitter />
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="t-c-img-2"></div>
              <div className="t-c-text">
                <h4>Username</h4>
                <p>Professional</p>
                <div className="t-c-icons">
                  <IoLogoFacebook />
                  <FaInstagram />
                  <IoLogoTwitter />
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="t-c-img-3"></div>
              <div className="t-c-text">
                <h4>Username</h4>
                <p>Professional</p>
                <div className="t-c-icons">
                  <IoLogoFacebook />
                  <FaInstagram />
                  <IoLogoTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ab-brands">
          <h2>Big Companies Are Here</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          <div className="companies">
            <Image src={logo1} alt="logo-1" className="logoimg"></Image>
            <Image src={logo2} alt="logo-2" className="logoimg"></Image>
            <Image src={logo3} alt="logo-3" className="logoimg"></Image>
            <Image src={logo4} alt="logo-4" className="logoimg"></Image>
            <Image src={logo5} alt="logo-5" className="logoimg"></Image>
            <Image src={logo6} alt="logo-6" className="logoimg"></Image>
          </div>
        </div>
      </div>

      <div className="work">
        <div className="works-text">
          <div className="work-t-inner">
          <span>WORK WITH US</span>
          <h1>Now Lets grow Yours</h1>
          <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
          <button>Button</button>
          </div>
        </div>
        <div className="works-image"></div>
      </div>
      <Footer />
    </>
  );
}
