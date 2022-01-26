import React from "react";
import "./Footer.css";
import footerImage from "../../../assets/Home/shape-bg.png";

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-parent'>
				<img src={footerImage} alt='error' />
			</div>
		</div>
	);
}
