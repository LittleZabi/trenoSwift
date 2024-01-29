<script lang="ts">
	import Icon from '@iconify/svelte';
	import topCurve from '../assets/top-view-curve.svg';
	import topImage from '../assets/top-view-image-1.png';
	import testImage1 from '../assets/test-phone-1.png';
	import CategoryType from '../Components/Category_type.svelte';
	import ProductSlider from '../Components/Product_Slider.svelte';
	import ScrollingElements from '../Components/Scrolling_elements.svelte';
	import RenderPopularItem from '../Components/Render_popular_item.svelte';
	import RenderCats from '../Components/Render_cats.svelte';
	import RenderRcmndPrdct from '../Components/Render_rcmnd_prdct.svelte';
	import Middle from '../Components/Middle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="home-view">
	<Middle />
	<ProductSlider items={data.productList} />
	<div class="home-wrap">
		<div class="page-size category-type">
			<CategoryType catTypes={data.catTypes} />
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
				{#each data.getPopularItems as item}
					<RenderPopularItem {item} />
				{/each}
			</ScrollingElements>
		</div>
		<div class="ct-typ">
			<ScrollingElements>
				{#each data.getCategories as cats}
					<RenderCats {cats} />
				{/each}
			</ScrollingElements>
		</div>
		<div class="pt-lst">
			<ScrollingElements title={'Recommended Products for you.'}>
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
				<RenderRcmndPrdct />
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
		.custom-container {
			background: #dbffd5;
		}
		.custom-wrap {
			margin: auto;
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
		margin: 40px auto auto;
		border-radius: 6px;
	}
	.category-type {
		background: white;
		padding-top: 20px;
		margin: auto auto 20px;
	}

	.home-view {
		margin: auto;
		& .top-view {
			margin-top: -70px;
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
	@media (max-width: 1600px) {
		.home-view {
			.top-view {
				& .bg-image {
					& img {
						width: 100%;
						height: 700px;
						object-fit: cover;
					}
				}
			}
		}
	}
	@media (max-width: 992px) {
		.home-most-recent .items {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
