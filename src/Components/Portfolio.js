import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title}>
            <a href={projects.url} target="popup">
              <h3>{projects.title}</h3>
            </a>
            <p>{projects.category}</p>
            <div className="imageRow">
              <a href={projects.url} target="popup">
                <img alt="No preview available (Deals Together is a work in progress)" src={projectImage}/>
              </a>
                
            </div>
            <br/>
        </div>
      })
    }

    return (
      <section id="projects">

      <div className="row work">   
        <br/>
        <br/>
        <br/>
        <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {projects}
        </div>
    </div>
   </section>
    );
  }
}

export default Portfolio;
