import React, {Component} from 'react';
import movies from '../store/port-data';
export default class Portfolio extends Component {
    render(){
        const movied = movies.map((element) =>
            <div className="col-4 col-6-medium col-12-small">
                <article className="box style2">
                    <a href={element.link} className="image featured"><img src={element.pic} alt="" width='348px' height='243px'  /></a>
                    <h3><a href="#">{element.title}</a></h3>
                    <p>{element.description}</p>
                </article>
            </div>
        )
        return(
            <article id="portfolio" className="wrapper style3">
                <div className="container">
                    <header>
                        <h2>Here’s some stuff I made recently.</h2>
                        <p>I was working on some pretty exciting Advante Garde projects before my untimely death</p>
                    </header>

                    <div className="row">
                        {movied}
                    </div>
                    <footer>
                        <p>Just a small sampling of my crazy portfolio</p>
                        <a href="#contact" className="button large scrolly">Get in touch with me</a>
                    </footer>
                </div>
            </article>
        )
    }
}