import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Cards from "./component/Cards";
import Footer from "./component/Footer";

const cardNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function BootstrapComponent() {
  return (
    <>
      <h1>Bootstrap Component</h1>
      <Navbar />
      <header data-bs-theme="dark">
        <div className="collapse text-bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-body-secondary">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Header />
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cardNums.map((item) => {
                return (
                  <div className="col" key={item}>
                    <Cards />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BootstrapComponent;
