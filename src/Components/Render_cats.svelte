<script lang="ts">
	import { trimTitle } from '$lib/globals';

	export let cats: any;
</script>

<a href="/category/{cats.slug}" title={cats.department + ' - ' + cats.category} class="df">
	<h3 class="fs22 fw7 tt-c">
		<span class="dep-name fw6 tt-u">{trimTitle(cats.department, 16, 6)}</span>
		{cats.category}
	</h3>
	<div class="dfc">
		<img src={cats.image} alt={cats.category} />
	</div>
</a>

<style lang="scss">
	.dep-name {
		font-size: 11px;
		display: block;
	}
	a {
		height: 340px;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 3px;
		text-align: center;
		& div {
			background: white;
			height: 80%;
			width: 205px;
			margin: 10px 5px;
			border-radius: 32px;
			box-shadow: 3px 7px 9px rgba(0, 0, 0, 0.116);
			& img {
				margin: 22px;
				width: 60%;
				height: 60%;
				object-fit: scale-down;
				display: block;
			}
		}
	}
</style>
