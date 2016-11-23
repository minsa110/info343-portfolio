import React from 'react';
import Video from './Video';
import Baby from 'babyparse';
import $ from 'jquery';
import './css/projects.css';

var ProjectsPage = React.createClass({
	getInitialState(){
		return{projects:[], currentProject:0}
	},

	// When the component mounts, get (and parse) the data. Then set the state.
	componentDidMount(){
		$.get('data/projects.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data})
		}.bind(this));
	},
	// Function to set the state of the current video
	chooseProject(id){
		this.setState({currentProject:id})
	},

	// Render a button for each video, and show the selected video
	render() {
		// Get selectedVideo
		let selectedProject = this.state.projects[this.state.currentProject];

		// Return HTML elements
		return (
			<div className="projectsPage">
				<div className="controls">
					{this.state.projects.map(function(project, i){
						if (project.title){
							return(
								<button className="button" onClick={() => this.chooseProject(i)}>{project.title}</button>
							)};
						}.bind(this))}
				</div>
				<div>
					<div className="card">
						{this.state.projects.map(function(project, i){
							if (selectedProject == project){
								return(
									<div className="contains">
										<h4><b>{selectedProject.title}</b></h4>
										<p>{selectedProject.description}</p>
										<br/>
										<h4><b>Links to...</b></h4>
										<a href={selectedProject.url}><button className="linkButton">Website</button></a>
										<a href={selectedProject.gitlink}><button className="linkButton">GitHub</button></a>
										<br/><br/><br/>
										<h4><b>A snapshot of the website</b></h4>
										<br/>
										<img src={"./imgs/" + selectedProject.img + ".png"} alt="Avatar" />
									</div>
								)};
							}.bind(this))}
					</div>
					{/* <h4><b>Learn more about the topic on YouTube</b></h4>
					{selectedProject &&
						<Video url={selectedProject.tutorial} title={selectedProject.title}/>
					} */}
				</div>
			</div>
		);
	}
});

export default ProjectsPage;
