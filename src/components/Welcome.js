import React, {Component} from 'react';


export default class Welcome extends Component {
    render(){
        return(
            <article id="top" className="wrapper style1">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-5-large col-12-medium">
                            <span className="image fit"><img src="images/Title.png" alt="" /></span>
                        </div>
                        <div className="col-8 col-7-large col-12-medium">
                            <header>
                                <h1>Hi. I'm <strong>Paul Walker</strong>.</h1>
                            </header>
                            <p>And this is <strong>My Site</strong>, a free, awesome site to check out some of the great American movies which I was fortunate enough to a part of</p>
                            <a href="#work" className="button large scrolly">Learn about what I do</a>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}