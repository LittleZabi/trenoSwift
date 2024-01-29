<script lang="ts">
	export let catTypes: any;
</script>

<div class="category-type">
	{#each catTypes as type_}
		<section>
			<div class="image">
				<img src={type_.image} alt="view of flowers" />
			</div>
			<div class="txt">
				<h3>{type_.title}</h3>
				<a href="/">View All</a>
			</div>
		</section>
	{/each}
</div>

<style lang="scss">
	.category-type {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		& section {
			position: relative;
			width: 374px;
			height: 320px;
			margin: 0px;
			& img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			& .txt {
				max-width: 305px;
				position: absolute;
				z-index: 1;
				bottom: 30px;
				left: 30px;
				background: rgb(0 0 0 / 61%);
				padding: 3px 13px;
				text-transform: uppercase;
				border-radius: 4px;
				backdrop-filter: blur(4px);
				color: white;
				& h3 {
					font-size: 18px;
					font-weight: 400;
				}
				& a {
					cursor: pointer;
					font-size: 12px;
					font-weight: 400;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
