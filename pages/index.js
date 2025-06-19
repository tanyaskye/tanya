import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div
              className="slide"
            >
              <img src="assets/images/profile.png" alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                <div
                  className="subtitle"
                >
                  Physiotherapist
                </div>
                <h2
                  className="title"
                >
                  Tanya Agrawal
                </h2>
              </div>
              <div
                className="description"
              >
                <p>
                Passionate physiotherapist with expertise in musculoskeletal & sports rehab. 
                Committed to patient care, utilizing advanced therapies &amp; empowering 
                individuals for optimal recovery and wellness.
                </p>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tanyaagrawal.1652/">
                    <i aria-hidden="true" className="fab fa-instagram" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tanya-agrawal-4093081b5/">
                    <i aria-hidden="true" className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  From <strong>Jaipur, India</strong>
                </li>
                <li>
                  Experience <strong>2+ Years</strong>
                </li>
                <li>
                Volunteer Experience <strong>3+ Years</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">5</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-smile-beam" />
                  </div>
                  <div className="num">500+</div>
                  <div className="title">
                    Happy <br />
                    Clients
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-gem" />
                  </div>
                  <div className="num">7</div>
                  <div className="title">
                    Awards <br />
                    Won
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div
                  className="text"
                >
                  <p>
                    Hello! I'm Tanya Agrawal, a Glasgow-based physiotherapist 
                    passionate about personalized care and advanced rehabilitation.
                  </p>
                  <p>
                    With a strong foundation in neuro-musculoskeletal and sports 
                    rehab, I strive to empower individuals on their journey to 
                    optimal wellness. My approach combines expertise in manual 
                    therapy, cognitive communication, and patient-centered care.
                  </p>
                  <p>
                    I'm dedicated to helping you achieve optimal wellness 
                    through tailored treatments and a holistic perspective 
                    on health. Let's work together towards a healthier, happier you!
                  </p>
                  <a
                    href="#contact-section"
                    className="btn"
                  >
                    <span>Contact Me</span>
                  </a>
                  <div
                    className="signature"
                  >
                    <img src="assets/images/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Explore my professional journey and qualifications in 
                  the field of physiotherapy. From a Master's in Advanced 
                  Physiotherapy Practices to extensive experience in 
                  musculoskeletal and sports rehabilitation, discover 
                  how I can contribute to your health and wellness needs.
                </p>
              </div>
              {/* Skills */}
              <div className="skills-items">
                <div
                  className="p-title"
                >
                  SKILLS
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Manual Therapy</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Sports Rehabilitation</div>
                  <div className="dots dots-70">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">70%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Patient Care</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Critical Thinking</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Leadership</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
              </div>
              {/* Services */}
              <div
                className="p-title"
              >
                SERVICES
              </div>
              <div className="services-items">
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-chrome" />
                    </div>
                    <div className="title">Web development</div>
                    <div className="text">
                      <p>
                        Modern and mobile-ready website that will help you reach
                        all of your marketing.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-soundcloud" />
                    </div>
                    <div className="title">Music writing</div>
                    <div className="text">
                      <p>
                        Music copying, writing, creating, transcription and
                        composition services.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-adversal" />
                    </div>
                    <div className="title">Advetising</div>
                    <div className="text">
                      <p>
                        Advertising services include television, radio, print,
                        mail, and web apps.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fas fa-gamepad" />
                    </div>
                    <div className="title">Game Development</div>
                    <div className="text">
                      <p>
                        Developing memorable and unique mobile android, ios and
                        video games.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
              </div>
              {/* History */}
              <div className="history-left">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EDUCATION
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2010 - 2012</div>
                    <div className="name">Master in Graphic</div>
                    <div className="subname">New York University</div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2006 - 2009</div>
                    <div className="name">Bachelors of FineArt</div>
                    <div className="subname">New York University</div>
                  </div>
                </div>
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    AWARDS
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2016 - awwwards</div>
                    <div className="name">Site of the Day</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2015 - designnominees</div>
                    <div className="name">Site of the Week</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EXPERIENCE
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2014 - Present</div>
                    <div className="name">Soft Tech Inc.</div>
                    <div className="subname">UI Head &amp; Manager</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2010 - 2014</div>
                    <div className="name">Kana Design Studio</div>
                    <div className="subname">UI / UX Specialist</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2009 - 2010</div>
                    <div className="name">Paperart</div>
                    <div className="subname">Graphic Designer</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
};
export default Index;
