import Slider from "react-slick";
import $ from "jquery";
import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

import AllProduct from '../../../styles/Product.module.scss';


const PageAllProduct = () => {

	const sliderRef = useRef();
	const [index,setIndex] = useState(0)
	const beforeChange = (prev,next) => {
		setTimeout(()=>{
			let element = $('.slick-active')
			// let element = document.getElementsByClassName('slick-active')
			if(element) {
				// $('.lifeStyle').addClass('animate__animated animate__fadeInLeft')
				$('.productCenterImg').addClass('animate__animated animate__zoomIn')
				$('.prdTitle').addClass('animate__animated animate__zoomIn')
				$('.prdDesc').addClass('animate__animated animate__fadeInRight')
			}
			setIndex(next);
		},1000)
	};
	const afterChange = (index) => {
		setTimeout(()=>{
			let element = $('.slick-active')
			if(element) {
				// $('.lifeStyle').removeClass('animate__animated animate__fadeInLeft')
				$('.productCenterImg').removeClass('animate__animated animate__zoomIn')
				$('.prdTitle').removeClass('animate__animated animate__zoomIn')
				$('.prdDesc').removeClass('animate__animated animate__fadeInRight')
			}
		},1000)
	};


	// $('.sliderRef').on('init', function(event, slick){
	// 	var dots = $( '.slick-dots li' );
	// 	console.log( 'SRANZAN VEE' );
	// 	dots.each( function( k, v){
	// 	  $(this).find( 'button' ).addClass( 'heading'+ k );
	// 	});
	// 	var items = slick.$slides;
	// 	items.each( function( k, v){
	// 		var text = $(this).find( 'h2' ).text();
	// 		$( '.heading' + k ).text(text);
	// 	});
	//   });

	

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		// fade: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		slidesToShow: 1,
		slidesToScroll: 1,
		slidesToScroll: 1,
		vertical: true,
		beforeChange,
		afterChange,
		appendDots: dots => {
			return (
			  <div>
				<ul>
				  {dots.map((item, index) => {
					return (
					  <li key={index}>{item.props.children}</li>
					);
				  })}
				</ul>
			  </div>
			)
		},
	};

	return (
		<>
		<div className='highlightProduct'>
        <Slider  {...settings} ref={sliderRef}>
			<div data-title="title1">
			<div className="slideWrap">
				<div className="lifeStlePrd">
					<img className="lifeStyle" src="../image/hilight_prd_slider/lifeStyle-01.png" alt="" />
						<div className="single_prd">
							<img className="productCenterImg" src="../image/hilight_prd_slider/prd-01.png" alt="product"/>
						</div>
				</div>

				<div className="prdTxt">
					<h1 className="prdTitle">ইফাদ সরিষার তেল</h1>
					<p className="prdDesc">বাছাইকৃত খাঁটি সরিষায় 
					তৈরি ইফাদ সরিষার তেল, 
					ঝাঁঝালো স্বাদের সাথে 
					নিশ্চিত করে সুস্বাস্থ্যও।</p>
				</div>
			</div>
			</div>
			
			<div  data-title="title1">
			<div className="slideWrap">
				<div className="lifeStlePrd">
					<img className="lifeStyle" src="../image/hilight_prd_slider/lifeStyle-02.png" alt="" />
						<div className="single_prd">
							<img className="productCenterImg" src="../image/hilight_prd_slider/prd-02.png" alt="product"/>
						</div>
				</div>

				<div className="prdTxt">
					<h1 className="prdTitle">ইফাদ সরিষার তেল</h1>
					<p className="prdDesc">বাছাইকৃত খাঁটি সরিষায় 
					তৈরি ইফাদ সরিষার তেল, 
					ঝাঁঝালো স্বাদের সাথে 
					নিশ্চিত করে সুস্বাস্থ্যও।</p>
				</div>
			</div>
			</div>

			<div  data-title="title1">
				<div className="slideWrap">
					<div className="lifeStlePrd">
					<img className="lifeStyle" src="../image/hilight_prd_slider/lifeStyle-03.png" alt="" />
							<div className="single_prd">
								<img className="productCenterImg" src="../image/hilight_prd_slider/prd-03.png" alt="product image"/>
							</div>
					</div>

					<div className="prdTxt">
						<h1 className="prdTitle">ইফাদ সরিষার তেল</h1>
						<p className="prdDesc">বাছাইকৃত খাঁটি সরিষায় 
						তৈরি ইফাদ সরিষার তেল, 
						ঝাঁঝালো স্বাদের সাথে 
						নিশ্চিত করে সুস্বাস্থ্যও।</p>
					</div>
				</div>
			</div>

			<div  data-title="title1">
				<div className="slideWrap">
					<div className="lifeStlePrd">
					<img className="lifeStyle" src="../image/hilight_prd_slider/lifeStyle-04.png" alt="" />
							<div className="single_prd">
								<img className="productCenterImg" src="../image/hilight_prd_slider/prd-01.png" alt="product image"/>
							</div>
					</div>

					<div className="prdTxt">
						<h1 className="prdTitle">ইফাদ সরিষার তেল</h1>
						<p className="prdDesc">বাছাইকৃত খাঁটি সরিষায় 
						তৈরি ইফাদ সরিষার তেল, 
						ঝাঁঝালো স্বাদের সাথে 
						নিশ্চিত করে সুস্বাস্থ্যও।</p>
					</div>
				</div>
			</div>

			<div  data-title="title1">
				<div className="slideWrap">
					<div className="lifeStlePrd">
					<img className="lifeStyle" src="../image/hilight_prd_slider/lifeStyle-02.png" alt="" />
						<div className="single_prd">
							<img className="productCenterImg" src="../image/hilight_prd_slider/prd-03.png" alt="product image"/>
						</div>
					</div>
					<div className="prdTxt">
						<h1 className="prdTitle">ইফাদ সরিষার তেল</h1>
						<p className="prdDesc">বাছাইকৃত খাঁটি সরিষায় 
						তৈরি ইফাদ সরিষার তেল, 
						ঝাঁঝালো স্বাদের সাথে 
						নিশ্চিত করে সুস্বাস্থ্যও।</p>
					</div>
				</div>
			</div>
        </Slider>
      </div>
		</>
	);
};

export default PageAllProduct;
