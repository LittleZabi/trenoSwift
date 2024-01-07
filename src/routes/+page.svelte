<script lang="ts">
	import Icon from '@iconify/svelte';
	import topCurve from '../assets/top-view-curve.svg';
	import topImage from '../assets/top-view-image-1.png';
	import testImage from '../assets/test-image.png';
	import testImage1 from '../assets/test-phone-1.png';
	import Stars from '../Components/Stars.svelte';
	import StarFill from '../assets/star-full.svg';
	import CategoryType from '../Components/Category_type.svelte';
	import ScrollingElements from '../Components/Scrolling_elements.svelte';
	import RenderPopularItem from '../Components/Render_popular_item.svelte';
	import RenderCats from '../Components/Render_cats.svelte';
	import RenderRcmndPrdct from '../Components/Render_rcmnd_prdct.svelte';
	import type { PageData } from './$types';
	import { numberFormat } from '$lib/globals';
	export let data:PageData;
	console.log(data)
</script>

<div class="home-view">
	<div class="top-view">
		<div class="inner-view">
			<div class="bg-image">
				<img src={topCurve} alt="" />
			</div>
			<div class="mid">
				<h1>Discover Endless Shopping Delights</h1>
				<p>Your Ultimate Online Marketplace Awaits!</p>
			</div>
			<div class="right">
				<img src={topImage} alt="" />
			</div>
		</div>
	</div>
	<div class="page-size home-most-recent">
		<div class="items">
			{#each data.productList as item}
			<section>
				<div class="left">
					<img src={item.images} alt="{item.title}" />
				</div>
				<div class="right">
					<div class="label new-arrival">New Arrivals</div>
					<div class="category fs14 fw5 tt-u">PHONE - {item.cat}</div>
					<h2 class="fs22">{item.title}</h2>
					<div class="rating">
						<Stars Rating={item.rating} />
						<span class="badge">120 Reviews</span>
					</div>
					<div class="prices">
						<h4 class="txt-lt fs14">Price $512</h4>
						<h1 class="fw7">USD $249</h1>
						<h5 class="dscnt fs14 c-danger">-30% discount</h5>
					</div>
					<div class="df bdgs">
						<span class="badge fs11 dfc">
							<img src={StarFill} alt="star filled" />
							<span>{item.rating}</span>
						</span>
						<span class="badge dfc">
							<span>{numberFormat(item.views)}</span>
							<Icon class="badge-eye" icon="iconoir:eye" />
						</span>					</div>
					<button class="btn"> Add To Cart </button>
				</div>
			</section>
			{/each}
			<section>
				<div class="left">
					<img src={testImage} alt="" />
				</div>
				<div class="right">
					<div class="label new-arrival">New Arrivals</div>
					<div class="category fs14 fw5">PHONE - SAMSUNG</div>
					<h2 class="fs22">Samsung Galaxy - note 8</h2>
					<div class="rating">
						<Stars Rating={3.5} />
						<span class="badge">120 Reviews</span>
					</div>
					<div class="prices">
						<h4 class="txt-lt fs14">Price $512</h4>
						<h1 class="fw7">USD $249</h1>
						<h5 class="dscnt fs14 c-danger">-30% discount</h5>
					</div>
					<div class="df bdgs">
						<span class="badge fs11 dfc">
							<img src={StarFill} alt="star filled" />
							<span>3.5</span>
						</span>
						<span class="badge dfc">
							<span>4k</span>
							<Icon class="badge-eye" icon="iconoir:eye" />
						</span>
					</div>
					<button class="btn"> Add To Cart </button>
				</div>
			</section>
		</div>
	</div>

	<div class="home-wrap">
		<div class="page-size category-type">
			<CategoryType />
		</div>
		<div class="custom-element">
			<div class="custom-container">
				<div class="page-size custom-wrap">
					<div class="left">
						<div class="label">NEW ARRIVALS</div>
						<h1 class="hdr1">Endless Phone</h1>
						<h1 class="hdr2">Samsung</h1>
						<h1 class="hdr3">S23 Ultra</h1>
						<a href="/">
							Shop Now
							<Icon style="margin-right: -7px;" icon="prime:chevron-up" rotate={1} />
						</a>
					</div>
					<div class="right">
						<img src={testImage1} alt="test" />
					</div>
				</div>
			</div>
		</div>
		<div class="pplr-prdct">
			<ScrollingElements title={'Popular products in Apparel Internationally'}>
				<RenderPopularItem />
				<RenderPopularItem />
				<RenderPopularItem />
				<RenderPopularItem />
				<RenderPopularItem />
				<RenderPopularItem />
				<RenderPopularItem />
			</ScrollingElements>
		</div>
		<div class="ct-typ">
			<ScrollingElements>
				<RenderCats />
				<RenderCats />
				<RenderCats />
				<RenderCats />
				<RenderCats />
				<RenderCats />
				<RenderCats />
				<RenderCats />
			</ScrollingElements>
		</div>
		<div class="pt-lst">
			<ScrollingElements title={"Recommended Products for you."}>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
				<RenderRcmndPrdct/>
			</ScrollingElements>
		</div>
	</div>
</div>

<style lang="scss">
	.pt-lst {
		background: #fef4eb;
	}
	.ct-typ {
		background: #f9e6e3;
	}
	.pplr-prdct {
		background: var(--secondary-bg);
	}
	.custom-element {
		.custom-container{
			background: #dbffd5;
		}
		.custom-wrap {
			margin:auto;
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
		.custom-wrap .right img {
			margin: 20px 20px;
			width: 555px;
		}
		.custom-wrap .left {
			padding: 50px 20px 40px 50px;
		}
		.custom-wrap .left .hdr1,
		.custom-wrap .left .hdr3 {
			font-weight: 500;
			font-size: 62px;
		}
		.custom-wrap .left .hdr1 {
			margin-top: 50px;
		}
		.custom-wrap .left a {
			margin-top: 130px;
			display: block;
			width: max-content;
			min-width: 140px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 21px;
			text-transform: uppercase;
			font-weight: 600;
			border-bottom: 3px solid var(--red);
		}
		.custom-wrap .left .hdr2 {
			font-size: 107px;
			font-weight: 700;
		}
	}
	.home-wrap {
		margin: auto;
		background: var(--bg-color);
		margin-top: 40px;
		border-radius: 6px;
	}
	.category-type {
		margin: auto;
		background: white;
		padding-top: 20px;
		margin-bottom: 20px;
	}
	.home-most-recent {
		margin-top: -5px;
		.items {
			display: flex;
		}
		margin: auto;
		& section {
			margin: 0 30px;
			background: linear-gradient(92deg, white, white, #ffffff7a);
			display: flex;
			box-shadow: 5px 9px 11px rgba(0, 0, 0, 0.0901960784);
			width: max-content;
			max-width: 540px;
			min-width: 540px;
			border-radius: 16px;
			padding: 60px 30px;
			backdrop-filter: blur(30px);
			& .btn {
				margin-top: 20px;
			}
			& .bdgs {
				& img {
					margin-right: 3px;
					width: 14px;
					height: 14px;
				}
			}
			& .prices {
				display: flex;
				align-items: center;
				margin-top: 18px;
				margin-bottom: 13px;
				& .dscnt {
					margin-left: 16px;
				}
				& h1 {
					font-size: 28px;
				}
				& h4 {
					color: #b9b7b7;
					margin-right: 10px;
				}
			}
			& .rating {
				display: flex;
				margin-top: 6px;
				& span {
					margin-left: 10px;
				}
			}
			& h2 {
				margin-top: 6px;
				text-transform: capitalize;
			}
			& .category {
				margin-top: 20px;
			}
			& .right {
				margin-left: 8px;
				margin-top: 10px;
			}
			& .left {
				& img {
					width: 160px;
					max-height: 280px;
					object-fit: cover;
				}
			}
		}
	}
	.home-view {
		margin: auto;
		& .top-view {
			.bg-image {
				position: absolute;
				top: 70px;
				left: 0;
				right: 0;
				z-index: -1;
				& img {
					width: 100%;
				}
			}
			max-height: 679px;
			& .inner-view {
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				max-width: 1280px;
				margin: auto;
			}
			& .right {
				height: 100%;
				margin-top: 100px;
				text-align: right;
				& img {
					width: 90%;
				}
			}
			& .mid {
				color: white;
				& h1 {
					font-size: 52px;
					padding: 0;
					width: 445px;
					margin-top: 145px;
				}
				& p {
					font-size: 30px;
					width: 525px;
				}
			}
		}
	}
</style>
