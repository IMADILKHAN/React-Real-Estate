import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Listings from './Listings.js';
import Filter from './Filter.js';
import listingsData from './data/listingsData.js';
class App extends Component {
	constructor() {
		super();
		this.state = {
			listingsData,
			min_price: 0,
			max_price: 100000000,
			city: 'ALL',
			homeType: 'ALL',
			bedrooms: 0,
			min_space: 0,
			max_space: 100000,
			Swiming_Pool: false,
			Air_Conditioner: false,
			GYM: false,
			Club_House: false,
			sortby: 'price-dsc',
			filteredData: listingsData,
			view: 'list',
			populateFormsData: ' ',
			search: ''
		};
		this.change = this.change.bind(this);
		this.filteredData = this.filteredData.bind(this);
		this.populateForms = this.populateForms.bind(this);
		this.changeView = this.changeView.bind(this);
	}
	componentWillMount() {
		var listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price;
		});

		this.setState({
			listingsData
		});
	}

	changeView(viewName) {
		this.setState({
			view: viewName
		});
	}

	change(event) {
		var name = event.target.name;
		var value =
			event.target.type === 'Checkbox'
				? event.taget.checked
				: event.target.value;
		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
				this.filteredData();
			}
		);
	}
	filteredData() {
		var newData = this.state.listingsData.filter(item => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.floorSpace >= this.state.min_space &&
				item.floorSpace <= this.state.max_space &&
				item.rooms >= this.state.bedrooms
			);
		});

		if (this.state.city !== 'ALL') {
			newData = newData.filter(item => {
				return item.city === this.state.city;
			});
		}

		if (this.state.homeType !== 'ALL') {
			newData = newData.filter(item => {
				return item.homeType === this.state.homeType;
			});
		}

		if (this.state.sortby == 'price-dsc') {
			newData = newData.sort((a, b) => {
				return a.price - b.price;
			});
		}

		if (this.state.sortby == 'price-asc') {
			newData = newData.sort((a, b) => {
				return b.price - a.price;
			});
		}
		if (this.state.search !== '') {
			newData = newData.filter(item => {
				var city = item.city.toLowerCase();
				var searchText = this.state.search.toLowerCase();
				var n = city.match(searchText);

				if (n !== null) {
					return true;
				}
			});
		}

		if (this.state.Air_Conditioner !== false) {
			newData = newData.filter(item => {
				var SP = 'Swiming_Pool';
				var n = extras.match(SP);

				return (item.extras.SP = this.state.SP);
			});
		}

		this.setState({
			filteredData: newData
		});
	}
	populateForms() {
		// for City
		var cities = this.state.listingsData.map(item => {
			return item.city;
		});
		cities = new Set(cities);
		cities = [...cities];
		cities = cities.sort();
		// for house homeType
		var homeType = this.state.listingsData.map(item => {
			return item.homeType;
		});
		homeType = new Set(homeType);
		homeType = [...homeType];
		homeType = homeType.sort();
		// for bedrooms
		var bedrooms = this.state.listingsData.map(item => {
			return item.rooms;
		});
		bedrooms = new Set(bedrooms);
		bedrooms = [...bedrooms];
		bedrooms = bedrooms.sort();
		this.setState({
			populateFormsData: {
				homeType,
				bedrooms,
				cities
			}
		});
	}

	render() {
		return (
			<div>
				<Header />
				<section id="content-area">
					<Filter
						change={this.change}
						globalState={this.state}
						populateAction={this.populateForms}
					/>
					<Listings
						listingsData={this.state.filteredData}
						change={this.change}
						globalState={this.state}
						changeView={this.changeView}
					/>
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
