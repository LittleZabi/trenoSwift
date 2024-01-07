<script lang="ts">
	import Icon from '@iconify/svelte';
	import testImage from '../assets/test-image-3.jpg';
</script>

<section>
	<div class="image">
		<img src={testImage} alt="" />
	</div>
	<div class="txt">
		<div class="price fs22">
			<sup>$</sup>25
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
		min-width: 260px;
		height: 392px;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		margin: 3px 6px 12px;
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
				padding: 6px 32px;
				height: max-content;
				border-radius: 29px;
				margin-left: 15px;
				color: white;
			}
			& .icons {
				margin-right: 14px;
				& button {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					padding: 8px;
					background: #ffffffda;
					margin-right: 4px;
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
