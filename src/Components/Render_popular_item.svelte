<script lang="ts">
	import Icon from '@iconify/svelte';
	import { calcDiscount } from '$lib/globals';
	export let item: any;
</script>

<section>
	<div class="image">
		<a href="/product/{item.slug}">
			<img src={item.images} alt="" />
		</a>
	</div>
	<div class="txt">
		<div class="price fs18">
			<sup>$</sup>{calcDiscount(item.price, item.discount)}
		</div>
		<div class="icons">
			<button>
				<Icon style="width: 100%;height: 100%;" icon="mdi:cart" />
			</button>
			<button>
				<Icon style="width: 100%;height: 100%;" icon="mdi:book-favorite" />
			</button>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-width: 187px;
		height: 248px;
		position: relative;
		border-radius: 18px;
		background: white;
		overflow: hidden;
		margin: 3px 5px 10px;
		& .image,
		& .txt {
			position: absolute;
			width: 100%;
			height: 100%;
		}
		& .txt {
			bottom: 10px;
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			& .price {
				background: var(--red);
				padding: 4px 10px;
				height: max-content;
				border-radius: 29px;
				margin-left: 7px;
				color: white;
			}
			& .icons {
				margin-right: 14px;
				cursor: pointer;
				& button {
					width: 32px;
					height: 32px;
					border-radius: 50%;
					padding: 7px;
					background: #ffffffda;
					margin-right: 2px;
					cursor: pointer;
					transition: all 400ms;
					&:hover {
						background: black;
						color: white;
					}
				}
			}
		}
		& .image {
			top: 0;
			bottom: 0;
			& img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
