<script lang="ts">
	import Stars from './Stars.svelte';
	import StarFilled from '../assets/star-full.svg';
	import Icon from '@iconify/svelte';
	import { numberFormat, calcDiscount } from '../lib/globals';
	import { onMount } from 'svelte';
	export let items: any = [];
	let buttonsList = new Array(items.length).fill(0);
	let nextFrame = () => {};
	let specificFrame: any = undefined;
	let animationFrame: any = undefined;
	onMount(() => {
		const sectionList = document.querySelectorAll('#product_wrap section');
		const listButton = document.querySelectorAll('#button-list button');
		let i: any = 0;
		let delay = 4000;
		let lastFrame = sectionList[sectionList.length - 1];
		nextFrame = () => {
			let x = 0;
			for (let section of sectionList) {
				listButton[x].classList.remove('active');
				section.classList.remove('init');
				section.classList.remove('active');
				x++;
			}
			lastFrame.classList.add('init');
			if (specificFrame !== undefined && specificFrame != false) {
				i = specificFrame;
				specificFrame = undefined;
			}
			let sec = sectionList[i];
			sec.classList.add('active');
			listButton[i].classList.add('active');
			i++;
			if (i >= sectionList.length) i = 0;
			animationFrame = setTimeout(() => {
				requestAnimationFrame(nextFrame);
				lastFrame = sec;
			}, delay);
		};
		requestAnimationFrame(nextFrame);
	});
	const swiftSlide = (id: number) => {
		specificFrame = id;
		if (animationFrame) clearTimeout(animationFrame);
		nextFrame();
	};
</script>

<div class="home-most-recent">
	<div class="items" id="product_wrap">
		{#each items as item}
			<section>
				<div class="left">
					<img src={item.images} alt={item.title} />
				</div>
				<div class="right">
					<div class="label new-arrival">New Arrivals</div>
					<div class="category fs14 fw5 tt-u">{item.dep} - {item.cat}</div>
					<h2 class="fs22">{item.title}</h2>
					<div class="rating">
						<Stars Rating={item.rating} />
						<span class="badge">120 Reviews</span>
					</div>
					<div class="prices-container">
						<h4 class="txt-lt fs14">Price ${item.price.toFixed(2)}</h4>
						<h1 class="fw7">
							USD ${calcDiscount(item.price, item.discount)}
						</h1>
						<h5 class="dscnt fs14 c-danger">-{item.discount}% discount</h5>
					</div>
					<div class="df bdgs">
						<span class="badge fs11 dfc">
							<img src={StarFilled} alt="star filled" />
							<span>{item.rating}</span>
						</span>
						<span class="badge dfc">
							<span>{numberFormat(item.views)}</span>
							<Icon class="badge-eye" icon="iconoir:eye" />
						</span>
					</div>
					<button class="btn"> Add To Cart </button>
				</div>
			</section>
		{/each}
	</div>
	<div id="button-list">
		{#each buttonsList as button, i}
			<button on:click={() => swiftSlide(i)}></button>
		{/each}
	</div>
</div>

<style lang="scss">
	#button-list {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0px;
		left: 0;
		right: 0;
		& button {
			width: 20px;
			height: 20px;
			background: black;
			border-radius: 50%;
			margin: 0 2px;
			border: 3px inset transparent;
			cursor: pointer;
			transition: 400ms;
		}
	}

	.home-most-recent {
		margin: auto;
		max-width: 1280px;
		max-width: 99vw;
		overflow: hidden;
		display: flex;
		position: relative;
		.items {
			display: flex;
			width: 100%;
			position: relative;
			height: 400px;
			justify-content: center;
			align-items: center;
		}

		& section {
			background: linear-gradient(92deg, white, white, #ffffff7a);
			display: flex;
			box-shadow: 5px 9px 11px rgba(0, 0, 0, 0.0901960784);
			width: max-content;
			max-width: 540px;
			min-width: 540px;
			border-radius: 16px;
			padding: 10px 30px;
			backdrop-filter: blur(30px);
			position: absolute;
			left: -250px;
			right: 0;
			margin: 3px auto;
			visibility: none;
			opacity: 0;
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
					height: 100%;
					max-height: 280px;
					object-fit: scale-down;
				}
			}
		}
	}
</style>
