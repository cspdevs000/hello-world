import React, { Component } from 'react';
// import './Cheatsheet.css'

class Cheatsheet extends Component {
	render() {
		return (
            <div>
                   <section class="hero is-primary">
      <div className="hero-body">
        <div className="columns">
          <div className="column is-12">
            <div className="container content">
              <i className="is-large fab fa-discord"></i>
              <i className="is-large fas fa-code"></i>
              <h1 className="title">Code <em>All</em> The Things</h1>
              <h3 className="subtitle">
              Collection of code goodies for next-level dev
              </h3>
              <a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank" className="button is-primary is-large">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <aside className="is-medium menu">
          <p className="menu-label">
            categories
          </p>
          <ul className="menu-list">
            <li className="is-right"><a href="#const" className="is-active"><i className="fab fa-css3-alt"></i> CSS</a></li>
            <li><a href="#let" className="is-active"><i className="fab fa-js"></i> JS</a></li>
            <li><a href="#let" className="is-active"><i className="fab fa-html5"></i> HTML</a></li>
          </ul>
              <p className="menu-label">
                More to read...
              </p>
              <ul className="menu-list">
                <li><span className="tag is-white is-medium">Lorem</span></li>
                <li><span className="tag is-white is-medium">Ipsum</span></li>
                <li><span className="tag is-white is-medium">Dolor</span></li>
                <li><span className="tag is-white is-medium">Animi</span></li>
                <li><span className="tag is-white is-medium">Eximi</span></li>
                <li><span className="tag is-white is-medium">Nullius</span></li>
                <li><span className="tag is-white is-medium">Oxipi</span></li>
                <li><span className="tag is-white is-medium">Vultus</span></li>
                <li><span className="tag is-white is-medium">Voluptatis</span></li>
                <li><span className="tag is-white is-medium">Exomarphis</span></li>
                <li><span className="tag is-white is-medium">Finimi</span></li>
                <li><span className="tag is-white is-medium">Aenigma</span></li>
                <li><span className="tag is-white is-medium">Arkham</span></li>
                <li><span className="tag is-white is-medium">Blue</span></li>
                <li><span className="tag is-white is-medium">Medium</span></li>
              </ul>
            </aside>
          </div>
          <div className="column is-9">
            <div className="content is-medium">
          <h3 className="title is-3">Snippets ¯\_(ツ)_/¯</h3>
              <div className="box">
                <h4 id="const" className="title is-3">const</h4>
                <article className="message is-primary">
                  <span className="icon has-text-primary">
                  <i className="fab fa-js"></i>
                  </span>
                  <div className="message-body">
                    Block-scoped. Cannot be re-assigned. Not immutable.
                  </div>
                </article>
              <pre><code className="language-javascript">const test = 'test';</code></pre>
            </div>
            <div className="box">
              <h4 id="let" className="title is-3">let</h4>
              <article className="message is-primary">
                <span className="icon has-text-primary">
                  <i className="fas fa-info-circle"></i>
                </span>
                <div className="message-body">
                  Block-scoped. Can be re-assigned.
                </div>
              </article>
            <pre><code className="language-javascript">let i = 0;</code></pre>
          </div>
          <h3 className="title is-3">More to Come...</h3>
          <div className="box">
            <h4 id="lorem" className="title is-4">More to come...</h4>
            <article className="message is-primary">
              <span className="icon has-text-primary">
                <i className="fas fa-info-circle"></i>
              </span>
              <div className="message-body">
                Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur instructior sit.
              </div>
            </article>
          <pre><code className="language-javascript">let i = 0;</code></pre>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
            </div>
		)
	}
}

export default Cheatsheet;