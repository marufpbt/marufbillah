import React from 'react';
import './Services.css';
import '../../../node_modules/animate.css';

const Services = () => {
	return (
		<section id="services-area" className="py-70" style={{ background: '#101010' }}>
			<div className="container">
				<div className="row pb-5 ">
					<div className="container">
						<div className="work-top">
							<div className="col-lg-12 text-center">
								<h2 className="title text-white" style={{ fontFamily: 'Poppins,sans-serif;' }}>My Awesome Service</h2>
								<p className="lead text-light">Some of my main services are listed below. I provide different kind of services.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row text-center pt-5 pb-0 pb-lg-5 mb-35">

					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0 ">
						<div className="icon-wrapper wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-laptop"></i>
							</div>
							<h3 className="title text-white">WEB DESIGN</h3>
							<p className="lead">Qualified web designs and attractive effects which catches visitor's Eye.</p>
							<span className="number">1</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInUp animate__fast animate__delay-1s ">
							<div className="laptop-icon">
								<i className="fas fa-exchange-alt"></i>
							</div>
							<h3 className="title text-white">WEB DEVELOPMENT</h3>
							<p className="lead">Clean and fresh issue free code to make your website dynamic perfectly.</p>
							<span className="number">2</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInRight animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-th-large"></i>
							</div>
							<h3 className="title text-white">WORDPRESS</h3>
							<p className="lead">Wordpress, Magento, E-Commerce, Prestashop Theme Development & Customization.</p>
							<span className="number">3</span>
						</div>
					</div>
				</div>
				<div className="row text-center pt-0 pt-md-3 pt-lg-5  ">

					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInRight animate__fast animate__delay-1s ">
							<div className="laptop-icon">
								<i className="fas fa-edit"></i>
							</div>
							<h3 className="title text-white">RESPONSIVE DESIGN</h3>
							<p className="lead">Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc</p>
							<span className="number">4</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInUp animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-window-restore"></i>
							</div>
							<h3 className="title text-white">WEB RESEARCH</h3>
							<p className="lead">Admin Support, Microsoft Word, Excel, Powerpoint Slide, Internet marketing, Cpa marketing, Data mining etc etc.</p>
							<span className="number">5</span>
						</div>
					</div>
					<div className="col-12  col-md-4  mt-5 mt-md-0 pt-4 pt-md-0">
						<div className="icon-wrapper wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s">
							<div className="laptop-icon">
								<i className="fas fa-search"></i>
							</div>
							<h3 className="title text-white">SEO</h3>
							<p className="lead">Search Engine Optimization to make website high ranked and bring expected traffics on websites.</p>
							<span className="number">6</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
