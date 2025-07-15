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
              {/* <img src="assets/images/profile.png" alt="" /> */}
              <img src="assets/images/tanya_profile.png" alt="" />
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
                      <i aria-hidden="true" className="fa fa-dumbbell" />
                    </div>
                    <div className="title">Musculoskeletal Rehabilitation</div>
                    <div className="text">
                      <p>
                        Restore mobility, reduce pain, and improve 
                        function through personalized treatment plans 
                        tailored to your specific needs.
                      </p>
                    </div>
                    {/* <a href="#contact-section" className="lnk">
                      order now
                    </a> */}
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-futbol" />
                    </div>
                    <div className="title">Post-Surgical Rehabilitation</div>
                    <div className="text">
                      <p>
                        Regain strength and mobility after surgery with a 
                        comprehensive rehabilitation program designed to 
                        facilitate optimal recovery.
                      </p>
                    </div>
                    {/* <a href="#contact-section" className="lnk">
                      order now
                    </a> */}
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-stethoscope" />
                    </div>
                    <div className="title">Pain Management</div>
                    <div className="text">
                      <p>
                        Alleviate chronic pain and discomfort through 
                        targeted therapies and techniques, empowering you 
                        to live a pain-free life.
                      </p>
                    </div>
                    {/* <a href="#contact-section" className="lnk">
                      order now
                    </a> */}
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-heart" />
                    </div>
                    <div className="title">Preventive Care and Wellness</div>
                    <div className="text">
                      <p>
                        Enhance your overall well-being and prevent future 
                        injuries with customized exercise programs and 
                        lifestyle recommendations.
                      </p>
                    </div>
                    {/* <a href="#contact-section" className="lnk">
                      order now
                    </a> */}
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-brain" />
                    </div>
                    <div className="title">Mental Rehabilitation</div>
                    <div className="text">
                      <p>
                        Rehabilitation with the aim to develop the 
                        emotional, social, physical and intellectual 
                        skills to live, learn and work in the community 
                        with complete independency.
                      </p>
                    </div>
                    {/* <a href="#contact-section" className="lnk">
                      order now
                    </a> */}
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fa fa-hand-holding-heart" />
                    </div>
                    <div className="title">Pelvic floor Rehabilitation</div>
                    <div className="text">
                      <p>
                        Rehab of pelvic floor instabilities and 
                        dis-functions with the aim to enhance functionality 
                        in women's activities of daily living.
                      </p>
                    </div>
                    {/* <a href="#contact-section" className="lnk">
                      order now
                    </a> */}
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
                    <div className="date">Sept'23 - Nov'24</div>
                    <div className="name">Masters in Advance Physiotherapy Practice</div>
                    <div className="subname">Glasgow Caledonian University
                      <br></br>
                      <br></br>
                      <strong>Research Project: </strong>Effects of combining Transverse Abdominis and pelvic floor muscles training in comparison to Pelvic floor exercises alone in post-partum women with stress
urinary incontinence
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">Aug’17 - June’22</div>
                    <div className="name">Bachelors in Physiotherapy</div>
                    <div className="subname">Mahatma Gandhi University of Medical Sciences and Technology
                      <br></br>
                      <br></br>
                      <strong>Case Studies: </strong>Pediatric and Geriatric mental health rehabilitation, ACL rehabilitations, Neuro-rehabilitation, Cardio-Thoracic rehabilitation 
                    </div>
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
                    <div className="date">21 Mar'21</div>
                    <div className="name">PNF Approaches</div>
                    <div className="text">
                      <p>
                        Movement Science Academy
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">24 Oct'22</div>
                    <div className="name">IASTM Technique</div>
                    <div className="text">
                      <p>
                        Proakt Physio Pvt Ltd
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">5 Jan'20</div>
                    <div className="name">Cupping Therapy</div>
                    <div className="text">
                      <p>
                        Rehealth Education
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
                    <div className="date">Sept'24 - Dec'24</div>
                    <div className="name">BSC Football Club - Glasgow</div>
                    <div className="subname">Sport Physiotherapist - Volunteer</div>
                    <div className="text">
                      <p>
                        Provided care with expertise in musculoskeletal & sports rehab. Committed to patient care, utilizing advanced therapies & empowering individuals for optimal recovery and wellness.
                        <br></br>
                        Website: bscglasgow.co.uk
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">June'22 - Sept'23</div>
                    <div className="name">BTN Physio Hub Centre</div>
                    <div className="subname">Consultant Physical Therapist</div>
                    <div className="text">
                      <p>
                        Provided expert care for a broad spectrum of conditions, encompassing musculoskeletal disorders, pediatric cases, neurological challenges, cardiorespiratory rehabilitation, geriatric care, and sports rehabilitation. Delivered prompt and effective interventions while adhering to established time frames.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">June'22 - August'23</div>
                    <div className="name">The PhysioRehab Clinic</div>
                    <div className="subname">Consultant Physical Therapis</div>
                    <div className="text">
                      <p>
                        Expanded expertise to focus on musculoskeletal and sports rehab, implementing efficient, high-impact interventions without compromising quality. Achieved 85% rise in patient recovery rates, demonstrating approach effectiveness.
                        <br></br>
                        Website: thephysiorehab.in
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
