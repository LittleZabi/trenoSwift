<script>
	import Icon from '@iconify/svelte';
	import middlePhoneImage from '../assets/middle-phone.png';
</script>

<div class="middle-view">
	<div class="page-size mid-in dfc-r">
		<div class="left dfc-c">
			<h1>DISCOVER ENDLESS SHOPPING DELIGHTS</h1>
			<p>YOUR ULTIMATE ONLINE MARKETPLACE AWAITS!</p>
			<div class="dfc-r ml-btn">
				<a href="/world/new" class="btn mid-btn">
					What's New! <span class="arr">&rarr;</span>
				</a>
				<a href="/world/new" class="btn mid-btn"> What's The Future </a>
			</div>
			<h1 class="mlb2">WE ARE READY FOR THE FUTURE!</h1>
		</div>
		<div class="right">
			<div class="right-links dfc">
				<a href="world/popular" title="see most watched"><Icon icon="ion:trending-up" /></a>
				<a href="world/trends/" title="see trends"><Icon icon="bi:fire" /></a>
				<a href="world/loved" title="most loved in world"><Icon icon="tabler:heart-check" /></a>
				<a href="world/arrivals" title="see new arrivals"><Icon icon="clarity:new-solid" /></a>
				<a href="/cart" title="see your cart"><Icon icon="mdi-light:cart" /></a>
			</div>
			<svg class="svg-terror" viewBox="0 0 976 787" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_13_7)">
					<path
						d="M16.5 15L968 17L954.626 713.5C954.626 713.5 661.806 715.719 472.685 762C456.34 766 357.772 785.5 301.306 762C266.964 742.373 231.321 670.5 260.69 544.5C345.884 179 235.633 54.7914 16.5 15Z"
						fill="white"
						class="svg-path-x"
					/>
				</g>
				<g filter="url(#filter1_d_13_7)">
					<path
						d="M229.981 15L968 17.0359L957.627 726.034C957.627 726.034 730.505 728.292 583.815 775.404C571.137 779.476 494.684 799.326 450.887 775.404C424.25 755.425 396.604 682.262 419.384 554.001C485.464 181.943 399.949 55.5054 229.981 15Z"
						fill="yellow"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_13_7"
						x="0.5"
						y="4"
						width="975.5"
						height="782.391"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-4" dy="1" />
						<feGaussianBlur stdDeviation="6" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_7" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_13_7"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_d_13_7"
						x="215.981"
						y="0"
						width="752.019"
						height="787"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-8" dy="-9" />
						<feGaussianBlur stdDeviation="3" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_7" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_13_7"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
			<img src={middlePhoneImage} class="__-mid--38" alt="middle phone" />
		</div>
	</div>
</div>

<style lang="scss">
	.mid-btn {
		margin-right: 5px;
		border-radius: 28px !important;
		font-weight: 600;
		background: #000000;
		color: white;
		& .arr {
			font-size: 20px;
		}
	}
	:global(.right-links a svg) {
		width: 30px;
		height: 30px;
		cursor: pointer;
		transition: 300ms;
		&:hover {
			opacity: 0.7;
		}
	}
	.middle-view {
		& .right-links {
			margin: 179px 54px 0 0;
			z-index: 1;
			flex-direction: column;
			& a {
				margin-top: 28px;
			}
		}
		height: 800px;
		margin-top: -60px;
		background: yellow;
		overflow: hidden;
		& .right {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			position: relative;
			& svg {
				height: 790px;
				width: 976px;
				top: -14px;
				position: absolute;
				right: -47px;
				& .svg-path-x {
					fill: #d400ff25;
				}
			}
			& img.__-mid--38 {
				position: absolute;
				right: 255px;
				top: 114px;
			}
		}
		& .mid-in {
			display: flex;
			flex-wrap: nowrap;
			align-items: flex-start;
			justify-content: space-between;
			padding: 0 0px 0 40px;
			margin: auto;
		}
		& .left {
			margin-top: 150px;
			align-items: flex-start;
			& .ml-btn {
				margin: 28px 0px 10px 0;
				z-index: 1;
				& a {
					margin-right: 5px;
					width: 230px;
					height: 55px;
					border-radius: 5px;
					font-weight: 600;
					font-family: consolas;
					border: 2px solid black;
					&:nth-child(2) {
						margin-left: 20px;
						background: none;
						color: black;
						z-index: 1;
					}
					&:hover {
						background: rgb(38, 38, 38);
						color: rgb(251, 251, 251);
					}
				}
			}
			& h1 {
				width: 450px;
				font-size: 48px;
				line-height: 1.4;
				font-weight: 500;
				z-index: 1;
				&.mlb2 {
					text-align: center;
					width: 490px;
					letter-spacing: 1px;
					margin-top: 40px;
				}
			}
		}
	}
</style>
