import React, { Component } from 'react';
import './Hero.css'

const articles = [
    {
        title: "The Thing",
        summary: "stuff is here idk what to write aaaaa"
    },
    {
        title: "The Hulk",
        summary: "this page is about super heroes"
    },
    {
        title: "Spiderman",
        summary: "shoots the sticky web to fly like a spider"
    },
    {
        title: "Batman",
        summary: "man who but is also a bat"
    },
    {
        title: "Night Crawler",
        summary: "crawls but only at night"
    },
    {
        title: "Slim Shady",
        summary: "stands up but only when asked"
    },
    {
        title: "The Penguin",
        summary: "waddles, defeats batman once i think but can't be sure"
    },
    {
        title: "Superwoman",
        summary: "a woman, but doesn't fix things at your apartment"
    },
    {
        title: "Aquaman",
        summary: "kevin costner wannabe"
    },
    {
        title: "Ironing man",
        summary: "cleans your clothes makes them smooth"
    },
    {
        title: "Captain Marvel",
        summary: "not a seargeant or a colornel"
    },
]

class Hero extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info is-medium is-bold">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="../">
                                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenu" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="tabs is-right">
                                            <ul>
                                                <li className="is-active"><a>Home</a></li>
                                                <li><a href="">Examples</a></li>
                                                <li><a href="">Features</a></li>
                                                <li><a href="">Team</a></li>
                                                <li><a href="">Help</a></li>
                                            </ul>
                                            <span className="navbar-item">
                                                <a className="button is-white is-outlined" href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html">
                                                    <span className="icon">
                                                        <i className="fa fa-github"></i>
                                                    </span>
                                                    <span title="Hello from the other side">View Source</span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                The new standard in &lt;insert industry here&gt;
                            </h1>
                            <h2 className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="box cta">
                    <p className="has-text-centered">
                        <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <section className="container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-paw"></i>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Tristique senectus et netus et. </h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                        <p><a href="#">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-empire"></i>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Tempor orci dapibus ultrices in.</h4>
                                        <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                                            sed risus.</p>
                                        <p><a href="#">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-apple"></i>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4> Leo integer malesuada nunc vel risus. </h4>
                                        <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <p><a href="#">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro column is-8 is-offset-2">
                        <h2 className="title">Perfect for developers or designers!</h2><br />
                        <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
                    </div>
                    <div className="sandbox">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[3].title}</p>
                                    <p className="subtitle">{articles[3].summary}</p>
                                </article>
                            </div>
                            <div className="tile is-parent is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[4].title}</p>
                                    <p className="subtitle">{articles[4].summary}</p>
                                </article>
                            </div>
                            <div className="tile is-parent is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[2].title}</p>
                                    <p className="subtitle">{articles[2].title} 2</p>
                                    <div className="content">
                                        <p>{articles[2].summary}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-8">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child notification is-white">
                                            <p className="title">{articles[0].title}</p>
                                            <p className="subtitle">{articles[0].summary}</p>
                                        </article>
                                        <article className="tile is-child notification is-white">
                                            <p className="title">{articles[1].summary}</p>
                                            <p className="subtitle">{articles[1].summary}</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification is-white">
                                            <p className="title">Middle box</p>
                                            <p className="subtitle">Box is in the middle</p>
                                            <figure className="image is-4by3">
                                                <img src="https://picsum.photos/640/480/?random" alt="Description" />
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent is-shady">
                                    <article className="tile is-child notification is-white">
                                        <p className="title">{articles[6].title}</p>
                                        <p className="subtitle">Aligned with the right column</p>
                                        <div className="content">
                                            <p>{articles[6].summary}</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent is-shady">
                                <article className="tile is-child notification is-white">
                                    <div className="content">
                                        <p className="title">{articles[5].title}</p>
                                        <p className="subtitle">With even more content</p>
                                        <div className="content">
                                            <p>{articles[5].summary}</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[7].title}</p>
                                    <p className="subtitle">{articles[7].title} 2</p>
                                    <div className="content">
                                        <p>{articles[7].summary}</p>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent is-8 is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[8].title}</p>
                                    <p className="subtitle">With some content</p>
                                    <div className="content">
                                        <p>{articles[8].summary}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent is-8 is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[9].title}</p>
                                    <p className="subtitle">{articles[9].summary}</p>
                                    <div className="content">
                                        <p>Anything that can go wrong will go wrong</p>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent is-shady">
                                <article className="tile is-child notification is-white">
                                    <p className="title">{articles[10].title}</p>
                                    <p className="subtitle">With some content</p>
                                    <div className="content">
                                        <p>{articles[10].summary}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-3 is-offset-2">
                                <h2><strong>Category</strong></h2>
                                <ul>
                                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="#">Vestibulum errato isse</a></li>
                                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="#">Aisia caisia</a></li>
                                    <li><a href="#">Murphy's law</a></li>
                                    <li><a href="#">Flimsy Lavenrock</a></li>
                                    <li><a href="#">Maven Mousie Lavender</a></li>
                                </ul>
                            </div>
                            <div className="column is-3">
                                <h2><strong>Category</strong></h2>
                                <ul>
                                    <li><a href="#">Labore et dolore magna aliqua</a></li>
                                    <li><a href="#">Kanban airis sum eschelor</a></li>
                                    <li><a href="#">Modular modern free</a></li>
                                    <li><a href="#">The king of clubs</a></li>
                                    <li><a href="#">The Discovery Dissipation</a></li>
                                    <li><a href="#">Course Correction</a></li>
                                    <li><a href="#">Better Angels</a></li>
                                </ul>
                            </div>
                            <div className="column is-4">
                                <h2><strong>Category</strong></h2>
                                <ul>
                                    <li><a href="#">Objects in space</a></li>
                                    <li><a href="#">Playing cards with coyote</a></li>
                                    <li><a href="#">Goodbye Yellow Brick Road</a></li>
                                    <li><a href="#">The Garden of Forking Paths</a></li>
                                    <li><a href="#">Future Shock</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content has-text-centered">
                            <p>
                                <a className="icon" href="https://github.com/BulmaTemplates/bulma-templates">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                            <div className="control level-item">
                                <a href="https://github.com/BulmaTemplates/bulma-templates">
                                    <div className="tags has-addons">
                                        <span className="tag is-dark">Bulma Templates</span>
                                        <span className="tag is-info">MIT license</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Hero;