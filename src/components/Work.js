import React, {Component} from 'react';

export default class Work extends Component {
    render(){
        return(
            <article id="work" className="wrapper style2">
                <div className="container">
                    <header>
                        <h2>Here's all the stuff he did.</h2>
                        <p>Very diverse set of interests </p>
                    </header>
                    <div className="row aln-center">
                        <div className="col-4 col-6-medium col-12-small">
                            <section className="box style1">
                                <span className="icon featured fa-film"></span>
                                <h3>American Great</h3>
                                <p>As America is undoubedly aware, I was one of the great American actors. Often referred to as my generation's Robert Redford</p>
                            </section>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <section className="box style1">
                                <span className="icon featured fa-star"></span>
                                <h3>Universally Admired</h3>
                                <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
                            </section>
                        </div>
                        <div className="col-4 col-6-medium col-12-small">
                            <section className="box style1">
                                <span className="icon featured fa-thumbs-o-up"></span>
                                <h3>Feugiat posuere</h3>
                                <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
                            </section>
                        </div>
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


