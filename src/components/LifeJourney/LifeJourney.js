import React from 'react';
import './LifeJourney.css';
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';

const LifeJourney = () => {
	const [flip, set] = useState(false)
	const { number } = useSpring({
		reset: true,
		reverse: flip,
		from: { number: 0 },
		number: 100,
		delay: 3000,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	const { number1 } = useSpring({
		reset: true,
		reverse: flip,
		from: { number1: 0 },
		number1: 245,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	const { number2 } = useSpring({
		reset: true,
		reverse: flip,
		from: { number2: 0 },
		number2: 320,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	const { number3 } = useSpring({
		reset: true,
		reverse: flip,
		from: { number3: 0 },
		number3: 600,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})
	return (
		<section id="count-area" class="py-70 text-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 pb-5">
						<h2 className="title text-white">Life's Journey</h2>
						<p className="text-light">I never sleep when i'm tired, I sleep only when i'm Done!</p>
					</div>
				</div>
				<div class="row d-none d-lg-flex">
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-handshake"></i>
								<span className="counter"><animated.div className="d-inline">{number.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>PROJECTS COMPLETED</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-heart"></i>
								<span className="counter"><animated.div className="d-inline">{number1.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>HAPPY CLIENTS</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="far fa-moon"></i>
								<span className="counter"><animated.div className="d-inline">{number2.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>SLEEPLESS NIGHTS</span>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="count-wrap">
							<div class="number-wrap">
								<i class="fas fa-trophy"></i>
								<span className="counter"><animated.div className="d-inline">{number3.to(n => n.toFixed(0))}</animated.div></span><span>+</span>
							</div>
							<span>WINNING AWARDS</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LifeJourney;
