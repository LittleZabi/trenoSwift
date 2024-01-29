<script lang="ts">
	import { onMount } from 'svelte';
	import starFill from '../assets/star-full.svg';
	import starHalf from '../assets/star-half.svg';
	import starEmpty from '../assets/star-empty.svg';
	import { getRandomChar } from '$lib/globals';
	export let Rating: number = 0;
	export let Style: string = '';
	export let Class: string = '';
	export let setRating: boolean = false;
	export let callback: (rating: number) => void = () => {};
	let cid = '';
	if (setRating) cid = getRandomChar(8, { numbers: false });
	onMount(() => {
		if (setRating) {
			const stars: any = document.querySelectorAll(`.${cid} img`);
			const fillStars = (len: number) => {
				stars.forEach((star: any, index: number) => {
					if (index < len) {
						star.src = starFill;
					} else {
						star.src = starEmpty;
					}
				});
			};
			stars.forEach((star: any, i: number) => {
				star.addEventListener('mouseenter', (e: any) => {
					fillStars(i + 1);
				});
				star.addEventListener('click', (e: any) => {
					if (Rating === i + 1) Rating = 0;
					else Rating = i + 1;
					callback(Rating);
				});
			});
			const container: any = document.querySelector(`.${cid}`);
			container.addEventListener('mouseleave', (e: any) => {
				stars.forEach((star: any, i: number) => {
					if (i > Rating - 1) star.src = starEmpty;
					else star.src = starFill;
				});
			});
		}
	});
</script>

<div id="star-rating" class={'dfc-r star-rating ' + cid}>
	<img
		style={Style}
		class={Class}
		src={Rating >= 1 ? starFill : Rating >= 0.5 ? starHalf : starEmpty}
		alt="star icon"
	/>
	<img
		style={Style}
		src={Rating >= 2 ? starFill : Rating >= 1.5 ? starHalf : starEmpty}
		alt="star icon"
	/>
	<img
		style={Style}
		src={Rating >= 3 ? starFill : Rating >= 2.5 ? starHalf : starEmpty}
		alt="star icon"
	/>
	<img
		style={Style}
		src={Rating >= 4 ? starFill : Rating >= 3.5 ? starHalf : starEmpty}
		alt="star icon"
	/>
	<img
		style={Style}
		src={Rating >= 5 ? starFill : Rating >= 4.5 ? starHalf : starEmpty}
		alt="star icon"
	/>
</div>

<style lang="scss">
	.star-rating {
		cursor: pointer;
		width: max-content;
	}
</style>
