const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
              {/* social */}
              <div
                className="social-links"
              >
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tanya-agrawal-4093081b5/">
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tanyaagrawal.1652/">
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
              <div
                className="copyright-text"
              >
                © 2025 Tanya Agrawal. All Rights Reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
              <div
                className="copyright-text"
              >
                Deployed on <strong>vercel</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
