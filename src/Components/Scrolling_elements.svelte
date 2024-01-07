<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	export let title:string = "";
	let container: any = undefined;
	let id = 'scroll_id_' + String((Math.random() * 1000000).toFixed(0))
	onMount(() => {
		container = document.getElementById(id);
	});
	function _scroll(direction: number) {
		let currentScroll = container.scrollLeft;
		const newScroll = currentScroll + direction * container.clientWidth;
		const maxScroll = container.scrollWidth - container.clientWidth;
		const finalScroll = Math.min(maxScroll, Math.max(0, newScroll));
		container.scrollTo({
			left: finalScroll,
			behavior: 'smooth'
		});
	}
</script>

<div class="page-size wrapper">
	<h2 class="fs24 fw4">{title}</h2>
	<div class="container">
		<div class="left">
			<button on:click={() => _scroll(-1)}>
				<Icon icon="system-uicons:chevron-up" style="width:100%;height:100%" rotate={3} />
			</button>
		</div>
		<div class="mid df" id={id}>
			<slot/>
		</div>
		<div class="right">
			<button on:click={() => _scroll(1)}>
				<Icon icon="system-uicons:chevron-up" style="width:100%;height:100%" rotate={1} />
			</button>
		</div>
	</div>
</div>
<style lang="scss">
	.wrapper {
		margin:auto;
		padding-bottom: 20px;
		& h2.fs24 {
			padding-top: 30px;
			padding-left: 40px;
			margin-bottom: 25px;
		}
		& .container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		& .left,
		& .right {
			padding: 0 10px;
			& button {
				background: #ffd574;
				width: 64px;
				height: 64px;
				border-radius: 50%;
				padding: 9px;
				cursor: pointer;
				transition: background 400ms cubic-bezier(0.89, 1.04, 0, 1.69);
				&:hover {
					background: rgb(255, 151, 116);
				}
			}
		}
	}
	.mid {
		flex-wrap: nowrap;
		overflow-x: scroll;
		padding: 0 5px;
	}
</style>
