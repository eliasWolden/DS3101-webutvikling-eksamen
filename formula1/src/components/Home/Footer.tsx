import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className="bg-dark text-white py-5 border-top border-black"
      role="contentinfo"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
            <section>
              <h3>About Our API</h3>
              <p>
                Explore the capabilities of our API and integrate powerful
                features into your applications.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2023 Formula 1 Special Event. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
