// Page of quotes to show
import React from 'react';

// PageOne Component
var InfoPage = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
				<div className="infoCard">
				<img src="./imgs/self-image.png" alt="Avatar" />
					<div className="contains">
						<h4><b>Soojin Min</b></h4>
						<p>A junior in Informatics program at the University of Washington
						with a genuine passion for information technology.</p>
						<p>Loves hanging out with people she loves, hiking, and playing the piano.</p>
					</div>
				</div>
			</div>
		);
	}
});

export default InfoPage;
