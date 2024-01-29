<script lang="ts">
	import type { PageData } from './$types';
	import { calcDiscount, numberFormat, trimTitle } from '$lib/globals';
	import Stars from '../../../Components/Stars.svelte';
	import starFilled from '../../../assets/star-full.svg';
	import Icon from '@iconify/svelte';
	import Reviews from '../../../Components/Reviews.svelte';
	import RenderRcmndPrdct from '../../../Components/Render_rcmnd_prdct.svelte';
	import ScrollingElements from '../../../Components/Scrolling_elements.svelte';
	export let data: PageData;
	console.log(data);
	const item = data.item;
	let specsList: any = {};
	specsList = data.item?.specs_list;
	const specsListKeys = Object.keys(specsList).sort((a: any, b: any) => {
		if (typeof specsList[a] === 'string') return -1;
		if (typeof specsList[a] === 'object') {
			if (specsList[a].length > specsList[b].length) return -1;
			if (specsList[a].length < specsList[b].length) return 1;
			else return 0;
		}
		return 0;
	});
</script>

<div class="wrapper">
	<div class="top-bar">
		<div class="ih fs18 page-size">
			1 - 48 of over 3,000 results for <span class="c-danger fw6"> "Mobile phones"</span>
		</div>
		<div class="fp">
			<div class="page-size">
				<a title="Product Page" href="/product/">Product</a>
				<span class="arr">&rarr;</span>
				<a href="/departments/{item.cat.department}" title="Explore department">
					{item.cat.department}
				</a>
				<span class="arr">&rarr;</span>
				<a href="/category/">{item.cat.category}</a>
				<span class="arr">&rarr;</span>
				<span>{trimTitle(item.title, 25, 15)}</span>
			</div>
		</div>
	</div>

	<div class="page-size content-view">
		<div class="main df">
			<div class="left">
				<div class="images">
					{#each item.images as image}
						<button>
							<img src="/{image}" alt={item.title} />
						</button>
					{/each}
				</div>
				<div class="image">
					<img src="/{item.images[0]}" alt={item.title} />
				</div>
			</div>
			<div class="right">
				<h1 class="fw5 fs22">
					{item.title}
				</h1>
				<div class="rat-and-bdgs df">
					<Stars Rating={item.rating} />
					<span class="bdgs badge fs11 dfc">
						<img src={starFilled} alt="star filled" />
						<span class="fs11 fw5">{item.rating}</span>
					</span>
					<span class="badge fs11 fw5">120 Reviews</span>
				</div>
				<div class="prices-container">
					<h4 class="txt-lt fs14">Price ${item.price.toFixed(2)}</h4>
					<h1 class="fw7">
						USD ${calcDiscount(item.price, item.discount)}
					</h1>
					<h5 class="dscnt fs14 c-danger">-{item.discount}% discount</h5>
				</div>
				<div class="quantity">
					<span class="fs16">Quantity</span>
					<button>
						<Icon icon="bi:plus" />
					</button>
					<input type="text" pattern="[0-9]+" name="" class="fs16" id="" value="1" />
					<button><Icon icon="clarity:minus-line" /></button>
				</div>
				<div class="df">
					<button class="btn dfc cart fs16 fw5">
						<Icon icon="mdi-light:cart" /> Add To Cart
					</button>
					<button class="add-to-fav">
						<Icon icon="mdi:book-favorite" />
						<span class="badge cart-badge fs11 fw4">{numberFormat(item.loves)}</span>
					</button>
				</div>
				<div>
					<span class="cks fs12 fw5">500+ bought in past month</span>
					<div class="wire wdh-50 bc-black" />
					<div class="item-specs">
						{#each specsListKeys as specs}
							<section>
								{#if typeof specsList[specs] === 'string'}
									<div class="specs_sec sing" style="border:none">
										<span class="sp_title fw6 tt-c">{specs}</span>
										<span class="value fs16">{specsList[specs]}</span>
									</div>
								{/if}
								{#if Array.isArray(specsList[specs])}
									<div class="specs_sec">
										<span class="sp_title fw6 fs18 tt-u">{specs}</span>
										{#each specsList[specs] as spec_obj}
											<span class="key fw6 fs16 tt-u">{Object.keys(spec_obj)[0]}</span>
											<span class="value fs16">{Object.values(spec_obj)[0]}</span>
										{/each}
										<span class="end-dot" />
									</div>
								{/if}
							</section>
						{/each}
					</div>
					<div class="wire"></div>
					<div class="about">
						<h2 class="about-h2 fs18 fw7">ABOUT THIS ITEM</h2>
						<div>
							{@html item.description}
						</div>
					</div>
					<div class="minfo fs16 tt-u fw6">
						<a href="/{item.cat.departments}">{item.cat.department}</a>
						<span class="arr">&rarr;</span>
						<a href={item.cat.category}>{item.cat.category}</a>
					</div>
					<div class="minfo dfc fs16 tt-u fw6">
						<div class="dfc">
							<Icon class="badge-eye" icon="iconoir:eye" />
							<span class="fs14">{item.views.toLocaleString()}</span>
						</div>
						<div class="dfc">
							<Icon icon="tabler:heart-check" style="color: #ff0060;" />
							<span class="fs14">{item.loves.toLocaleString()}</span>
						</div>
						<div class="dfc">
							<Icon icon="system-uicons:message" />
							<span class="fs14">{item.loves.toLocaleString()}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Reviews />
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

<style lang="scss">
	:global(.minfo div svg) {
		width: 22px;
		height: 22px;
	}
	.minfo {
		margin: 15px 5px;
		justify-content: flex-start;
		& div {
			margin-right: 15px;
			& span {
				margin-left: 5px;
			}
		}

		& a {
			margin-right: 10px;
			text-decoration: underline;
			text-decoration-color: transparent;
			&:hover {
				text-decoration-color: black;
			}
		}
		& span.arr {
			margin-right: 10px;
		}
	}
	.specs_sec {
		display: flex;
		flex-direction: column;
		border-left: 1px solid #00000096;
		margin: 5px 15px;
		& .key {
			margin-top: 15px;
		}
		& .value {
			margin-left: 25px;
		}
		& .key,
		& .value {
			display: block;
			padding-left: 16px;
		}
		& .sp_title {
			padding-left: 14px;
			margin-top: -4px;
			height: 15px;
			margin-bottom: 10px;
		}
		& .end-dot {
			margin-top: 15px;
		}
		& .key,
		& .sp_title,
		& .end-dot {
			display: flex;
			align-items: center;
			position: relative;
			&::before {
				content: '';
				width: 4px;
				height: 4px;
				border: 2px solid #00000096;
				display: block;
				border-radius: 50%;
				background: rgb(255, 255, 255);
				position: absolute;
				left: -4px;
			}
		}
		& .sp_title,
		& .end-dot {
			&:before {
				width: 6px;
				height: 6px;
				left: -5px;
			}
		}
	}
	.sing {
		& .end-dot {
			margin-top: 3px;
		}
		& .sp_title {
			margin-bottom: 1px;
		}
	}

	.about {
		margin-top: 25px;
		margin-left: 10px;
		margin-right: 10px;
		& ul {
			& li {
				list-style: disc;
				margin-bottom: 5px;
			}
		}
		& .about-h2 {
			margin-bottom: 15px;
		}
	}
	.item-specs {
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		& section {
			margin-bottom: 22px;
			margin-right: 20px;
		}
	}
	.cks {
		margin-top: 15px;
		display: block;
		margin-bottom: 3px;
	}
	.add-to-fav {
		margin-left: 25px;
		border-radius: 50%;
		height: 58px;
		width: 58px;
		background: none;
		border: 1px solid #70707057;
		padding: 12px;
		position: relative;
		& .cart-badge {
			background: var(--red);
			padding: 4px;
			position: absolute;
			bottom: -10px;
			right: -18px;
		}
	}
	:global(.add-to-fav:hover > svg) {
		color: black;
	}
	:global(.add-to-fav svg) {
		transition: 300ms;
		color: rgba(0, 0, 0, 0.705);
		width: 100%;
		height: 100%;
	}
	:global(.cart svg) {
		width: 23px;
		height: 23px;
		margin-right: 8px;
	}
	button.cart {
		width: 400px;
		height: 50px;
		margin-top: 15px;
	}
	.quantity {
		display: flex;
		align-items: center;
		padding: 2px;
		& span {
			margin-right: 7px;
		}
		& button {
			width: 48px;
			height: 35px;
			background: #ddffd7;
			border: 1px solid #7070702c;
			padding: 2px;
			border-radius: 5px;
			&:hover {
				background: #adf8a0;
			}
		}
		& input {
			width: 51px;
			height: 25px;
			text-align: center;
			border: none;
		}
	}
	.rat-and-bdgs {
		margin-top: 10px;
		display: flex;
		align-items: center;
	}
	.bdgs {
		margin-left: 10px;
		& img {
			margin-right: 3px;
			width: 14px;
			height: 14px;
		}
	}
	.right {
		width: 50%;
		margin-left: 30px;
	}
	.right,
	.left {
		margin-top: 30px;
	}
	.left {
		display: flex;
		width: 48%;
		margin-left: 10px;
		& .image {
			max-width: 493px;
			margin-left: 15px;
			& img {
				max-width: 100%;
				max-height: 100%;
				border-radius: 12px;
			}
		}
		& .images {
			width: 230px;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: flex-start;
			max-height: 549px;
			overflow-y: scroll;
			&::-webkit-scrollbar {
				width: 4px;
			}
			&::-webkit-scrollbar-thumb {
				background-color: rgb(206, 206, 206);
			}
			&::-webkit-scrollbar-track {
				background-color: #ff95b9;
			}
			& button {
				width: 100%;
				height: max-content;
				max-height: 122px;
				background: none;
				margin-top: 10px;
				& img {
					width: 100%;
					height: 100%;
					object-fit: scale-down;
				}
			}
		}
	}
	.content-view {
		display: flex;
		margin: auto;
		background: white;
	}
	.fp {
		background: white;
		text-align: left;
		& div.page-size {
			margin: auto;
			margin-top: 10px;
			& a,
			& span {
				font-size: 16px;
				background: #ffdada;
				margin: 2px 0px;
				border-radius: 2px;
				padding: 1px 3px;
				font-weight: 500;
				&.arr {
					background: none;
					font-size: 12px;
					margin: 0;
				}
			}
		}
	}
	.top-bar {
		background: white;
		width: 100%;
		margin: auto;
		margin-top: 70px;
		margin-bottom: 10px;
		border-bottom: 1px solid #7070702c;
		padding: 20px 10px;
		& div.ih {
			display: flex;
			align-items: center;
			height: 100%;
			margin: auto;
			padding: 0 10px;
			& span {
				margin-left: 10px;
			}
		}
	}
</style>
