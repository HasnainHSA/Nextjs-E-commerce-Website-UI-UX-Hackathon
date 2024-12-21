import Footer from "../components/Footer";
import Header from "../components/Header";
import "./blog.css";
import Image from "next/image";

// icons
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
      <div className="blog-page">
        <div className="bl-menu">
          <span>PRICING</span>
          <h1>Simple Pricing</h1>

          <div className="bl-menu-tx">
            <span className="bl-menu-tx-1">Home</span>
            <IoIosArrowForward />
            <span className="bl-menu-tx-2">Pricing</span>
          </div>

          <div className="pricing">
            <h2>Pricing</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>

            <div className="price-package">
              <span className="price-1">Monthly</span>
              <div className="toggle">
                <div className="circle"></div>
              </div>
              <span className="price-2">Yearly</span>
              <div className="price-off">Save 25%</div>
            </div>

            <div className="price-models">
              {/* same price model */}
              <div className="same-model">
                <h3>FREE</h3>
                <p className="price-para">Organize across all apps by hand</p>
                <div className="price-tag">
                  <div className="price-dollar">0</div>
                  <div className="price-cl">
                    <span className="dollar">$</span>
                    <span className="days">Per Month</span>
                  </div>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-li" />
                  <span>1GB Cloud storage</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-li" />
                  <span>Email and community support</span>
                </div>

                <button>Try for free</button>
              </div>
              {/* different price model */}
              <div className="diff-model">
                <h3>STANDARD</h3>
                <p className="price-para">Organize across all apps by hand</p>
                <div className="price-tag">
                  <div className="price-dollar">9.99</div>
                  <div className="price-cl">
                    <span className="dollar">$</span>
                    <span className="days">Per Month</span>
                  </div>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-li" />
                  <span>1GB Cloud storage</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-li" />
                  <span>Email and community support</span>
                </div>

                <button>Try for free</button>
              </div>
              {/* same price model */}
              <div className="same-model">
                <h3>PREMIUM</h3>
                <p className="price-para">Organize across all apps by hand</p>
                <div className="price-tag">
                  <div className="price-dollar">19.99</div>
                  <div className="price-cl">
                    <span className="dollar">$</span>
                    <span className="days">Per Month</span>
                  </div>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-gr" />
                  <span>Unlimited product updates</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-li" />
                  <span>1GB Cloud storage</span>
                </div>

                <div className="price-list">
                  <FaCircleCheck className="right-li" />
                  <span>Email and community support</span>
                </div>

                <button>Try for free</button>
              </div>
            </div>
          </div>

          <div className="ab-brands">
            <p>Trusted By Over 4000 Big Companies</p>

            <div className="companies">
              <Image src={logo1} alt="logo-1" className="logoimg"></Image>
              <Image src={logo2} alt="logo-2" className="logoimg"></Image>
              <Image src={logo3} alt="logo-3" className="logoimg"></Image>
              <Image src={logo4} alt="logo-4" className="logoimg"></Image>
              <Image src={logo5} alt="logo-5" className="logoimg"></Image>
              <Image src={logo6} alt="logo-6" className="logoimg"></Image>
            </div>
          </div>

          <div className="price-faqs">
            <h2>Pricing FAQs</h2>
            <p className="price-faq-para">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>

            <div className="faqs-cont">
              <div className="faqs-list">
                <div className="faq-col-1">
                  <div className="faq-icon">
                    {" "}
                    <IoIosArrowForward />
                  </div>
                  <div className="faq-text">
                    <h4>the quick fox jumps over the lazy dog</h4>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                </div>

                <div className="faq-col-1">
                  <div className="faq-icon">
                    {" "}
                    <IoIosArrowForward />
                  </div>
                  <div className="faq-text">
                    <h4>the quick fox jumps over the lazy dog</h4>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faqs-list">
                <div className="faq-col-1">
                  <div className="faq-icon">
                    {" "}
                    <IoIosArrowForward />
                  </div>
                  <div className="faq-text">
                    <h4>the quick fox jumps over the lazy dog</h4>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                </div>

                <div className="faq-col-1">
                  <div className="faq-icon">
                    {" "}
                    <IoIosArrowForward />
                  </div>
                  <div className="faq-text">
                    <h4>the quick fox jumps over the lazy dog</h4>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faqs-list">
                <div className="faq-col-1">
                  <div className="faq-icon">
                    {" "}
                    <IoIosArrowForward />
                  </div>
                  <div className="faq-text">
                    <h4>the quick fox jumps over the lazy dog</h4>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                </div>

                <div className="faq-col-1">
                  <div className="faq-icon">
                    {" "}
                    <IoIosArrowForward />
                  </div>
                  <div className="faq-text">
                    <h4>the quick fox jumps over the lazy dog</h4>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h6>Havent got your answer? Contact our support</h6>
          </div>

          <div className="trial">
            <h2>Start your 14 days free trial</h2>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>

            <button>Try it free now</button>

            <div className="trial-icon">
              <BsTwitter className="tr-twitter tr-btn" />
              <FaFacebookSquare className="tr-facebook tr-btn" />
              <FaInstagram  className="tr-instagram tr-btn" />
              <FaLinkedin className="tr-linkedin tr-btn" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
