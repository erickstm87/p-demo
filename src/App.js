import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Welcome,
  Work
} from './components/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav id="nav">
          <ul className="container">
            <li><a href="#top">Top</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>


      <Welcome />
			<Work />

			<article id="portfolio" className="wrapper style3">
          <div className="container">
            <header>
              <h2>Here’s some stuff I made recently.</h2>
              <p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat.</p>
            </header>
            <div className="row">
              <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                  <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                  <h3><a href="#">Magna feugiat</a></h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                  <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                  <h3><a href="#">Veroeros primis</a></h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                  <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                  <h3><a href="#">Lorem ipsum</a></h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                  <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                  <h3><a href="#">Tempus dolore</a></h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                  <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
                  <h3><a href="#">Feugiat aliquam</a></h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                  <a href="#" className="image featured"><img src="images/pic06.jpg" alt="" /></a>
                  <h3><a href="#">Sed amet ornare</a></h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
            </div>
            <footer>
              <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
              <a href="#contact" className="button large scrolly">Get in touch with me</a>
            </footer>
          </div>
        </article>

			<article id="contact" className="wrapper style4">
          <div className="container medium">
            <header>
              <h2>Have me make stuff for you.</h2>
              <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
            </header>
            <div className="row">
              <div className="col-12">
                <form method="post" action="#">
                  <div className="row">
                    <div className="col-6 col-12-small">
                      <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-small">
                      <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <input type="text" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                      <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                        <li><input type="reset" value="Clear Form" className="alt" /></li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12">
                <hr />
                <h3>Find me on ...</h3>
                <ul className="social">
                  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                  <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                  <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                  <li><a href="#" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
                  <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>

								{/* <li><a href="#" className="icon fa-rss"><span>RSS</span></a></li>
                  <li><a href="#" className="icon fa-instagram"><span>Instagram</span></a></li>
                  <li><a href="#" className="icon fa-foursquare"><span>Foursquare</span></a></li>
                  <li><a href="#" className="icon fa-skype"><span>Skype</span></a></li>
                  <li><a href="#" className="icon fa-soundcloud"><span>Soundcloud</span></a></li>
                  <li><a href="#" className="icon fa-youtube"><span>YouTube</span></a></li>
                  <li><a href="#" className="icon fa-blogger"><span>Blogger</span></a></li>
                  <li><a href="#" className="icon fa-flickr"><span>Flickr</span></a></li>
                  <li><a href="#" className="icon fa-vimeo"><span>Vimeo</span></a></li> */}

							</ul>
                <hr />
              </div>
            </div>
            <footer>
              <ul id="copyright">
                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </footer>
          </div>
        </article>

      </div>
    );
  }
}

export default App;
