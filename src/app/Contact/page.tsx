import Footer from "../components/Footer";
import Header from "../components/Header";
import "./contact.css";
import Image from "next/image";

// icon
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

// Images
import arrow from "../images/arrow.png";

export default function page() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-hero">
          <div className="contact-text"> 
          <span>CONTACT US</span>
          <h2>Get in touch today! </h2>
          <p>We know how large objects will act, but things on a small scale</p>

          <h6>Phone : +451 215 215 </h6>
          <h6>Fax : +451 215 215 </h6>
          <div className="con-social">
            <BsTwitter className="tr-twitter tr-btn" />
            <FaFacebookSquare className="tr-facebook tr-btn" />
            <FaInstagram className="tr-instagram tr-btn" />
            <FaLinkedin className="tr-linkedin tr-btn" />
          </div>
          </div>

          <div className="cont-image">
            
          </div>
        </div>

        <div className="visit-office">
          <span>VISIT OUR OFFICE</span>
          <h2>We help small businesses with big ideas</h2>

          <div className="visit-cont">
            <div className="v-card-same">
              <IoCallOutline className="v-c-icon" />
              <span>georgia.young@example.com</span>
              <span>georgia.young@ple.com</span>
              <p className="v-c-para">Get Support</p>
              <button className="v-c-btn">Submit Request</button>
            </div>

            <div className="v-card-diff">
              <FaLocationDot className="v-c-icon" />
              <span>georgia.young@example.com</span>
              <span>georgia.young@ple.com</span>
              <p className="v-c-para">Get Support</p>
              <button className="v-c-btn">Submit Request</button>
            </div>

            <div className="v-card-same">
              <MdEmail className="v-c-icon" />
              <span>georgia.young@example.com</span>
              <span>georgia.young@ple.com</span>
              <p className="v-c-para">Get Support</p>
              <button className="v-c-btn">Submit Request</button>
            </div>
          </div>
        </div>

        <div className="talk">
          <Image src={arrow} alt="arrow" className="talk-image"></Image>
          <span>WE CANT WAIT TO MEET YOU</span>
          <h2>Let’s Talk</h2>
          <button>Try it free now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
