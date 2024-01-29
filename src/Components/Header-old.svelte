<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from '../assets/logo.svg';
	export let Config: any;
	import { onMount } from 'svelte';
	onMount(() => {
		const header: any = document.getElementById('header');
		let scrollToNum = 550;
		window.addEventListener('scroll', (e) => {
			if (scrollY > scrollToNum) {
				header.classList.add('active');
			} else {
				header.classList.remove('active');
			}
		});
	});
</script>

<header id="header">
	<nav class="df">
		<div class="c-lgo">
			<a href="/">
				<img src={Logo} alt={Config.website_name} />
			</a>
		</div>
		<div class="c-srch">
			<div class="otr-srch df">
				<div class="drpd">
					<span class="selected">
						Women's Jeans
						<Icon icon="mynaui:chevron-down" class="nav-chev" width="16" height="16" />
					</span>
				</div>
				<input type="text" name="srch" placeholder="Search on {Config.website_name}" />
				<button class="srch-btn">
					<Icon icon="ion:search-outline" width="40" height="31" />
				</button>
			</div>
		</div>
		<div class="lst-icn">
			<ul class="lst">
				<li>
					<a href="/notifications">
						<Icon icon="system-uicons:message" />
					</a>
				</li>
				<li>
					<a href="/profile">
						<Icon icon="la:user-solid" />
					</a>
				</li>
				<li>
					<a href="/cart">
						<Icon icon="mdi-light:cart" />
						<span class="badge cart-badge">3</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style lang="scss">
	:global(.lst-icn svg) {
		width: 30px;
		height: 30px;
		transition: all 300ms;
	}
	nav {
		& .lst-icn {
			& ul.lst {
				display: flex;
				margin-right: 30px;
				margin-left: 30px;
				& a {
					display: block;
					padding: 2px;
					margin: 0 8px 0 8px;
					position: relative;
				}
			}
			& .badge {
				position: absolute;
				top: -5px;
				left: 18px;
				background: var(--red);
				font-weight: 500;
				padding: 1px 4px 2px 4px;
				font-size: 13px;
				border-radius: 29px;
			}
		}
		& .c-srch {
			background: linear-gradient(91deg, #f793ff, #ff9494, #f5ffa0, #6dffbe, #ffffff);
			height: 47px;
			width: 60%;
			border-radius: 29px;
			display: flex;
			overflow: hidden;
			padding: 2px;
			& .otr-srch {
				display: flex;
				width: 100%;
				& .drpd {
					background: #222229;
					color: #fff;
					height: 100%;
					width: 180px;
					font-size: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: nowrap;
					padding: 0px 18px;
					border-radius: 30px 0 0 30px;
				}
				& input[type='text'] {
					width: 100%;
					border: none;
					padding-left: 22px;
					font-size: 15px;
					background: black;
					color: white;
					border-radius: 0 30px 30px 0;
				}
				& button.srch-btn {
					width: 86px;
					border: none;
					background: none;
					color: black;
					padding: 0;
					cursor: pointer;
				}
			}
		}
		& .c-lgo {
			margin-left: 50px;
			height: 52px;
			width: 193px;
			margin-right: 30px;
			& img {
				width: 174px;
				height: 43px;
			}
		}
		font-family: inherit;
		margin: auto;
		height: 100%;
		justify-content: space-between;
		align-items: center;
	}
	header {
		width: 100%;
		height: 80px;
		background: var(--header-bg);
		color: var(--header-color);
		position: fixed;
		transition: all 400ms ease-in;
		z-index: 5;
		* {
			transition: all 400ms ease-in;
		}
	}
	:global(header#header.active) {
		height: 54px;
		background: #00000045;
		backdrop-filter: blur(30px);
		& .c-srch {
			height: 40px;
		}
		& img {
			width: 119px !important;
		}
	}
	:global(header#header.active .lst-icn svg) {
		width: 25px;
		height: 25px;
	}
	ul li {
		list-style: none;
	}
</style>
