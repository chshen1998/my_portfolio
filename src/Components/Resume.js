import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="career">

      <div className="row work">   
        <br/>
        <br/>
        <br/>
         <div className="three columns header-col">
            <h1><span>Career</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
   </section>
    );
  }
}

export default Resume;
