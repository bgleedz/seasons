import SeasonDisplay from '../SeasonDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';

describe("Check DOM", (() => {
	it ("for icon-right", () => {
		const anchorDiv = document.createElement("div");
		ReactDOM.render(<SeasonDisplay />, anchorDiv);
		const iconRight = anchorDiv.querySelector(".icon-right");
		expect(iconRight).toBeTruthy();
	});

	it ("for icon-left", () => {
		const anchorDiv = document.createElement("div");
		ReactDOM.render(<SeasonDisplay />, anchorDiv);
		const iconLeft = anchorDiv.querySelector(".icon-left");
		expect(iconLeft).toBeTruthy();
	});
}))
