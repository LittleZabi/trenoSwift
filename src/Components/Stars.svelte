<script lang="ts">
	import starFill from '../assets/star-full.svg';
	import starHalf from '../assets/star-half.svg';
	import starEmpty from '../assets/star-empty.svg';
	export let Rating: number;
	export let Style: string = '';
	export let Class: string = '';
</script>

<div id="star-rating" class="dfc-r star-rating">
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
