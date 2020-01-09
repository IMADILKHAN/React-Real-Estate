import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {};
		this.loopListings = this.loopListings.bind(this);
	}
	loopListings() {
		var { listingsData } = this.props;
		if (listingsData === undefined || listingsData.length === 0) {
			return 'Sorry No Matching Listings';
		}
		return listingsData.map((listing, index) => {
			if (this.props.globalState.view == 'box') {
				// this is for box view
				return (
					<div className="col-md-3" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url("${listing.image}") no-repeat center`
								}}
							>
								<span className="address">{listing.address}</span>
								<div className="details">
									<div className="col-md-3">
										<div className="user-img"> </div>
									</div>
									<div className="col-md-9">
										<div className="user-details">
											<span className="user-name">Rachel Zane</span>
											<span className="post-date">21/11/2019</span>
										</div>
										<div className="listing-details">
											<div className="floor-space">
												{' '}
												<i className="far fa-square"></i>
												<span> {listing.floorSpace}ft&sup2;</span>
											</div>
											<div className="bedrooms">
												<i className="fas fa-bed"></i>
												<span>{listing.rooms}bedrooms</span>
											</div>
										</div>
										<div className="view-btn">
											{' '}
											<i className="fas fa-eye"></i> View Lisintg
										</div>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="price">
									{' '}
									<i className="fas fa-dollar-sign"></i>
									{listing.price}
								</span>
								<span className="location">
									<i className="fas fa-map-marked-alt"></i> {listing.city},
									{listing.state}
								</span>
							</div>
						</div>
					</div>
				);
			} else {
				// this is for list View
				return (
					<div className="col-md-12 col-lg-6" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url("${listing.image}") no-repeat center`
								}}
							>
								<span className="address">{listing.address}</span>
								<div className="details">
									<div className="col-md-3">
										<div className="user-img"> </div>
									</div>
									<div className="col-md-9">
										<div className="user-details">
											<span className="user-name">Rachel Zane</span>
											<span className="post-date">21/11/2019</span>
										</div>
										<div className="listing-details">
											<div className="floor-space">
												{' '}
												<i className="far fa-square"></i>
												<span> {listing.floorSpace}ft&sup2;</span>
											</div>
											<div className="bedrooms">
												<i className="fas fa-bed"></i>
												<span>{listing.rooms}bedrooms</span>
											</div>
										</div>
										<div className="view-btn">
											{' '}
											<i className="fas fa-eye"></i> View Lisintg
										</div>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="price">
									{' '}
									<i className="fas fa-dollar-sign"></i>
									{listing.price}
								</span>
								<span className="location">
									<i className="fas fa-map-marked-alt"></i> {listing.city},
									{listing.state}
								</span>
							</div>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		return (
			<section id="listings">
				<section className="search-area">
					<input type="text" name="search" onChange={this.props.change} />
					<i className="fas fa-search-location"></i>
				</section>

				<section className="sortby-area">
					<div className="results">
						{this.props.globalState.filteredData.length}results found
					</div>
					<div className="sort-options">
						<select
							name="sortby"
							className="sortby"
							onChange={this.props.change}
						>
							<option value="price-dsc">Low to High</option>
							<option value="price-asc">High to Low</option>
						</select>

						<div className="view">
							<i
								className="fas fa-list"
								onClick={this.props.changeView.bind(null, 'list')}
							></i>
							<i
								className="fas fa-th-large"
								onClick={this.props.changeView.bind(null, 'box')}
							></i>
						</div>
					</div>
				</section>

				<section className="listings-results">
					<div className="row">{this.loopListings()}</div>
				</section>
			</section>
		);
	}
}
