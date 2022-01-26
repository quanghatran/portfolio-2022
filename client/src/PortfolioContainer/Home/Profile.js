import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
	return (
		<div className='profile-container'>
			<div className='profile-parent'>
				<div className='profile-details'>
					<div className='colz'>
						<div className='colz-icon'>
							<a href='#'>
								<i className='fa fa-facebook-square'></i>
							</a>
							<a href='#'>
								<i className='fa fa-google-plus-square'></i>
							</a>
							<a href='#'>
								<i className='fa fa-instagram'></i>
							</a>
							<a href='#'>
								<i className='fa fa-youtube-square'></i>
							</a>
							<a href='#'>
								<i className='fa fa-twitter'></i>
							</a>
						</div>
					</div>

					<div className='profile-details-name'>
						<span className='primary-text'>
							Hello, I`m <span className='highlighted-text'>Quang Ha</span>
						</span>
					</div>

					<div className='profile-details-role'>
						<div className='primary-text'>
							<h1>
								Full Stack Developer
								{/* <Typical>
									loop={Infinity}
									steps=
									{[
										"Enthusiastic Dev",
										1000,
										"Full Stack Developer",
										1000,
										"MERN Stack Dev",
										1000,
										"Cross Platform",
										1000,
										"React/React Native Dev",
										1000,
									]}
								</Typical> */}
							</h1>
							<span className='profile-role-tagline'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</span>
						</div>
					</div>

					<div className='profile-options'>
						<button className='btn primary-btn'>Hire Me</button>
						<a href='#'>
							<button className='btn highlighted-btn'>Get Resume</button>
						</a>
					</div>
				</div>
				<div className='profile-picture'>
					<div className='profile-picture-background'></div>
				</div>
			</div>
		</div>
	);
}
