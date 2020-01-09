import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {};
		this.cities = this.cities.bind(this);
		this.homeType = this.homeType.bind(this);
		this.bedrooms = this.bedrooms.bind(this);
	}
	componentWillMount() {
		this.props.populateAction();
	}
	cities() {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			var { cities } = this.props.globalState.populateFormsData;
			return cities.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	homeType() {
		if (this.props.globalState.populateFormsData.homeType != undefined) {
			var { homeType } = this.props.globalState.populateFormsData;
			return homeType.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	bedrooms() {
		if (this.props.globalState.populateFormsData.bedrooms != undefined) {
			var { bedrooms } = this.props.globalState.populateFormsData;
			return bedrooms.map(item => {
				return (
					<option key={item} value={item}>
						{item}+ Bed Rooms
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filters</h4>
					<span>City:</span>
					<select
						name="city"
						className=" filters city"
						onChange={this.props.change}
					>
						<option value="ALL">ALL</option>
						{this.cities()}
					</select>

					<span>Appartment type:</span>
					<select
						name="homeType"
						className=" filters homeType"
						onChange={this.props.change}
					>
						<option value="ALL">All Types</option>
						{this.homeType()}
					</select>
					<span>No of bedrooms:</span>
					<select
						name="bedrooms"
						className=" filters bedrooms"
						onChange={this.props.change}
					>
						{this.bedrooms()}
					</select>
					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min_price"
							className="min-price"
							onChange={this.props.change}
							value={this.props.globalState.min_price}
						/>
						<input
							type="text"
							name="max_price"
							className="max-price"
							onChange={this.props.change}
							value={this.props.globalState.max_price}
						/>
					</div>

					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min_space"
							className="min_space"
							onChange={this.props.change}
							value={this.props.globalState.min_space}
						/>
						<input
							type="text"
							name="max_space"
							className="max-space"
							onChange={this.props.change}
							value={this.props.globalState.max_space}
						/>
					</div>
					<div className="filters amenities">
						<span className="title"> Amenities: </span>
						<label htmlFor="Amenities">
							Swiming Pool{' '}
							<input value="Swiming Pool" type="checkbox" name="Swiming_Pool" />{' '}
						</label>
						<label htmlFor="Amenities">
							Air Conditioner{' '}
							<input
								value="Air Conditioner"
								type="checkbox"
								name="Air_Conditioner"
							/>{' '}
						</label>
						<label htmlFor="Amenities">
							GYM <input value="GYM" type="checkbox" name="GYM" />{' '}
						</label>
						<label htmlFor="Amenities">
							Club House{' '}
							<input type="checkbox" value="Club House" name="Club_House" />{' '}
						</label>
					</div>
				</div>
			</section>
		);
	}
}
