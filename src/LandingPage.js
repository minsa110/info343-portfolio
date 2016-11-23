import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';

var LandingPage = React.createClass({
  getInitialState(){
    return{skills:[]}
  },

  // When the component mounts, get (and parse) the data. Then set the state.
  componentDidMount(){
    $.get('data/skills.csv').then(function(data) {
      var parsed = Baby.parse(data, {header:true});
      this.setState({skills:parsed.data})
    }.bind(this));
  },
    render() {
        return(
            <div className="landing">
                This website showcases the work that I have done in my web designing career.
                The "Projects" page contains websites that I have worked on so far,
                which includes my work from University of Washington's course,
                Informatics 343. I have learned and used various web designing tools in
                this client-side web development class, including:
                <div className="skillCards">
                  {this.state.skills.map(function(s, i){
                    if(s.skill){
                      return(
                        <div className="skillCard">
                          <h4><b>{s.skill}</b></h4>
                          <p>{s.description}</p>
                        </div>
        							);}
                    }.bind(this))}
                </div>
            </div>
        )
    }
});

export default LandingPage;
