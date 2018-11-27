import React, {Component} from 'react';
import works from '../store/work-data';
export default class Work extends Component {
    render(){
        const importantWorks = works.map((element) =>
            <div className="col-4 col-6-medium col-12-small">
                <section className="box style1">
                    <span className={"icon featured " + element.icon}></span>
                    <h3>{element.heading}</h3>
                    <p>{element.description}</p>
                </section>
            </div>
        )
        return(
            <article id="work" className="wrapper style2">
                <div className="container">
                    <header>
                        <h2>Here's all the stuff I did.</h2>
                        <p>Very diverse set of interests </p>
                    </header>
                    <div className = "row aln-center">
                        {importantWorks}

                    </div>
                    <footer>
                        <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                        <a href="#portfolio" className="button large scrolly">See some of my recent work</a>
                    </footer>
                </div>
            </article>
        )
    }
}


