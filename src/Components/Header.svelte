<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Logo from '../assets/logo.svg';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	export let user: any;
	export let Config: any;
	let userObject: any = false;
	$: user, (userObject = user.object);
	let scrollIsGreaterThen0 = false;
	onMount(() => {
		// document
		// 	.querySelectorAll('.nav-menu a')
		// 	.forEach((e) => e.addEventListener('click', handleMenu));
		const header: any = document.getElementById('header');
		let scrollToNum = 50;
		// window.addEventListener('scroll', (e) => {
		// 	if (scrollY > scrollToNum) {
		// 		header.classList.add('active');
		// 		scrollIsGreaterThen0 = true;
		// 		console.log('yes');
		// 	} else {
		// 		if (!menuAcitve) header.classList.remove('active');
		// 		scrollIsGreaterThen0 = false;
		// 	}
		// });
	});

	let menuAcitve = false;
	const handleMenu = () => {
		menuAcitve = !menuAcitve;
	};
	let searchTerm = '';
	const handleSearch = async () => {
		if (searchTerm === '') return 0;
		handleMenu();
		await goto(`/search/${searchTerm}`);
	};
	let activeMenu: number = 0;
	let prevElement: any = undefined;
	const handleSelectMenu = (index: number) => {
		const element: any = document.querySelector('.mbtntglr_' + index);
		if (index === activeMenu) {
			activeMenu = 0;
			element.classList.remove('active');
		} else {
			activeMenu = index;
			element.classList.add('active');
			if (prevElement && prevElement !== element) prevElement.classList.remove('active');
			prevElement = element;
		}
	};
</script>

<header id="header" class={menuAcitve || scrollIsGreaterThen0 ? 'active' : ''}>
	<nav class="page-size df">
		<div class="logo">
			<a href="/" class="dfc-r fwb">
				<img src={Logo} alt="feather" />
			</a>
		</div>
		{#if menuAcitve}
			<div class="nav-menu" transition:slide>
				<div class="menu-header dfc-r">
					<form class="dfc-r menu-search" on:submit|preventDefault={handleSearch}>
						<input
							type="search"
							placeholder="Search your term or keyword..."
							bind:value={searchTerm}
							name="q"
						/>
						<button type="submit" name="submit">
							<Icon icon="ion:search-outline" width="40" height="31" />
						</button>
					</form>
				</div>
				<div class="menu-items dfc">
					<div>
						<section>
							<div class="profile dfc">
								<div class="avatar dfc tc-grey">
									<Icon icon="la:user-solid" />
								</div>
								<div class="user-det df">
									<span class="fs16 fw5">LittleZabi</span>
									<span class="fs14">zohaibjozvi@gmail.com</span>
									<div class="df fs14 dfc">
										<a href="/profile" class="fs14">Profile</a>
										<a href="/signout" class="fs14"
											><svg
												viewBox="0 0 24 24"
												fill="none"
												shape-rendering="geometricPrecision"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" /><path
													d="M10 17l5-5-5-5"
												/><path d="M15 12H3" /></svg
											></a
										>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div class="menu-item-list">
						<section>
							<button class="mbtntglr_1" on:click={() => handleSelectMenu(1)}>
								<h4 class="dfc fs16 fw5">
									<Icon icon="tabler:category" />
									<span>Products</span>
									<Icon
										icon="prime:chevron-up"
										rotate={2}
										style={activeMenu === 1 ? 'transform: rotate(-90deg)' : ''}
									/>
								</h4>
							</button>
							{#if activeMenu === 1}
								<div class="content" transition:slide>
									<ul>
										<li>
											<a class:active={$page.url.pathname === '/smart-phones'} href="/smart-phones">
												<Icon icon="circum:mobile-3" style="color:#000" />
												Mobile Phones</a
											>
										</li>
										<li>
											<a class:active={$page.url.pathname === '/computers'} href="/computers"
												><Icon icon="ph:monitor-thin" style="color: #04a076" /> Computers</a
											>
										</li>
										<li>
											<a class:active={$page.url.pathname === '/firmwares'} href="/firmwares"
												><Icon icon="pepicons-pencil:file" style="color: #af63ff;" />Firmwares</a
											>
										</li>
										<li>
											<a class:active={$page.url.pathname === '/blogs'} href="/blogs"
												><Icon icon="bi:fire" style="color: #ff0057;" /> Blogs</a
											>
										</li>
										<li>
											<a class:active={$page.url.pathname === '/world/trends'} href="/world/trends"
												><Icon icon="ion:trending-up" style="color:#5151ff;" /> Trendings of {new Date().getFullYear()}</a
											>
										</li>
										<li>
											<a class:active={$page.url.pathname === '/world/loved'} href="/world/loved"
												><Icon icon="tabler:heart-check" style="color: #ff0060;" /> Most Loved</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/world/popular'}
												href="/world/popular"
												><Icon icon="mdi:book-favorite" style="color: #ff7c00;" /> Fans Favourite</a
											>
										</li>
										<li>
											<a class:active={$page.url.pathname === '/world/popular'} href="/world/new"
												><Icon icon="clarity:new-solid" style="color:#5f81ff;" /> New Arrivals</a
											>
										</li>
									</ul>
								</div>
							{/if}
						</section>
						<section>
							<button class="mbtntglr_2" on:click={() => handleSelectMenu(2)}>
								<h4 class="dfc fs16 fw5">
									<Icon icon="ri:tools-line" />
									<span>Tools</span>
									<Icon
										icon="prime:chevron-up"
										rotate={2}
										style={activeMenu === 2 ? 'transform: rotate(-90deg)' : ''}
									/>
								</h4>
							</button>
							{#if activeMenu === 2}
								<div class="content" transition:slide>
									<ul class="first-items dfc-c ai-s">
										<li>
											<a href="/image/png-to-jpg" data-sveltekit-reload>PNG TO JPG</a>
										</li>
										<li>
											<a href="/image/jpg-to-png" data-sveltekit-reload>JPG TO PNG</a>
										</li>
										<li>
											<a href="/image/png-to-ico" data-sveltekit-reload>PNG TO ICO</a>
										</li>
										<li>
											<a href="/image/png-image-compress" data-sveltekit-reload
												>PNG Image Compress</a
											>
										</li>
										<li>
											<a href="/image/jpg-image-compress" data-sveltekit-reload
												>JPG Image Compress</a
											>
										</li>
										<li>
											<a href="/image/invert-image">Invert Image</a>
										</li>
										<li>
											<a href="/image/resize-image">Fast Resize Image</a>
										</li>
										<li>
											<a href="/smart-phones">PPTX to PDF</a>
										</li>
									</ul>
								</div>
							{/if}
						</section>
						<section>
							<button class="mbtntglr_3" on:click={() => handleSelectMenu(3)}>
								<h4 class="dfc fs16 fw5">
									<Icon icon="fa6-solid:computer" />
									<span> Computers</span>
									<Icon
										icon="prime:chevron-up"
										rotate={2}
										style={activeMenu === 3 ? 'transform: rotate(-90deg)' : ''}
									/>
								</h4>
							</button>
							{#if activeMenu === 3}
								<div class="content" transition:slide>
									<ul class="dfc-c ai-s">
										<li>
											<a data-sveltekit-preload-data="tap" href="/computers/acer">Acer Laptops</a>
										</li>
									</ul>
								</div>
							{/if}
						</section>
						<section>
							<button class="mbtntglr_4" on:click={() => handleSelectMenu(4)}>
								<h4 class="dfc fs16 fw5">
									<Icon icon="circum:mobile-1" />
									<span> Mobile Brands </span>
									<Icon
										icon="prime:chevron-up"
										rotate={2}
										style={activeMenu === 4 ? 'transform: rotate(-90deg)' : ''}
									/>
								</h4>
							</button>
							{#if activeMenu === 4}
								<div class="content" transition:slide>
									<ul class="dfc-c ai-s">
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/htc'}
												href="/smart-phones/htc">HTC Phones</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/apple'}
												href="/smart-phones/apple">Apple Phones</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/samsung'}
												href="/smart-phones/samsung">Samsung Phones</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/xiaomi'}
												href="/smart-phones/xiaomi">Xiaomi Phones</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/oneplus'}
												href="/smart-phones/oneplus">Oneplus Phones</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/realme'}
												href="/smart-phones/realme">Realme Phones</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/smart-phones/lenovo'}
												href="/smart-phones/lenovo">Lenovo Phones</a
											>
										</li>
									</ul>
								</div>
							{/if}
						</section>
						<section>
							<button class="mbtntglr_5" on:click={() => handleSelectMenu(5)}>
								<h4 class="dfc fs16 fw5">
									<Icon icon="codicon:file-binary" />
									<span>Mobile Firmwares</span>
									<Icon
										icon="prime:chevron-up"
										rotate={2}
										style={activeMenu === 5 ? 'transform: rotate(-90deg)' : ''}
									/>
								</h4>
							</button>
							{#if activeMenu === 5}
								<div class="content" transition:slide>
									<ul class="dfc-c ai-s">
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/samsung'}
												href="/firmwares/samsung"
												title="samsung firmware">Samsung Firmwares</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/infinix'}
												href="/firmwares/infinix"
												title="infinix firmware">Infinix Firmwares</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/motorola-firmware'}
												href="/firmwares/motorola-firmware"
												title="motorola firmware">Motorola Firmwares</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/realme-firmware'}
												href="/firmwares/realme-firmware"
												title="huawei firmware">Realme Firmwares</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/vivo-firmware'}
												href="/firmwares/vivo-firmware"
												title="vivo firmware">Vivo Firmwares</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/xiaomi'}
												href="/firmwares/xiaomi"
												title="xiaomi firmware">Xiaomi Firmwares</a
											>
										</li>
										<li>
											<a
												class:active={$page.url.pathname === '/firmwares/oneplus'}
												href="/firmwares/oneplus"
												title="oneplus firmware">Oneplus Firmwares</a
											>
										</li>
									</ul>
								</div>
							{/if}
						</section>
					</div>
				</div>
				<div class="footer-nav">
					<a class:active={$page.url.pathname === '/smart-phones'} href="/smart-phones">
						<div>
							<Icon icon="ion:home" />
						</div>
					</a>
					<a class:active={$page.route.id === '/cart'} href="/cart" class="dfc-r">
						<div>
							<Icon icon="mdi-light:cart" />
							<span class="badge bc-red">0</span>
						</div>
					</a>
					<!-- <a class:active={$page.url.pathname === '/about'} href="/about">About</a>
				<a class:active={$page.url.pathname === '/blogs'} href="/blogs">Blogs</a> -->
				</div>
			</div>
		{/if}
		<div class="dfc-c close-btn">
			<button on:click={handleMenu} name="menu button" class="dfc close-menu">
				<div class:open={menuAcitve}>
					<span />
					<span />
					<span />
				</div>
			</button>
		</div>
	</nav>
</header>

<style lang="scss">
	:global(.footer-nav a svg) {
		width: 100%;
		height: 100%;
	}
	.footer-nav {
		display: flex;
		margin-bottom: 10px;
		justify-content: flex-end;
		& a {
			border: 2px solid #9bafff;
			background: #8099ff54;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			padding: 8px;
			margin-right: 5px;
			position: relative;
			&:hover {
				background: #9bafff;
			}
			& .badge {
				position: absolute;
				bottom: -2px;
				top: unset;
				right: -16px;
			}
		}
	}
	:global(.menu-items button svg) {
		width: 22px;
		height: 22px;
		transition: 300ms;
	}
	:global(.menu-items section .content li a svg) {
		width: 25px;
		height: 25px;
		margin-right: 5px;
	}
	:global(.menu-items section button:hover, .menu-items section button.active) {
		background: #d9d9d9 !important;
	}
	:global(.user-det a svg) {
		width: 22px;
		height: 22px;
		margin-top: 2px;
	}
	.menu-items {
		margin-top: 20px;
		align-items: flex-start;
		& section {
			padding: 0 24px 0 0px;
			margin: 0 5px 12px 0;
			cursor: pointer;
			width: 192px;
			min-height: 60px;
			& .content {
				display: flex;
				flex-direction: column;
				margin-top: 4px;
				margin-left: 2px;
				padding-left: 10px;
				border-left: 1px solid rgba(0, 0, 0, 0.186);
			}
			& li {
				margin-top: 7px;
				list-style: none;
			}
			& a {
				font-size: 14px;
				display: flex;
				align-items: center;
				color: #3b3b3b;
				font-weight: 500;
				&:hover {
					color: black;
				}
			}

			& button {
				display: flex;
				background: none;
				color: black;
				padding: 0;
				width: 100%;
				border-radius: 5px;
				padding: 5px 10px;
				& span {
					margin-left: 5px;
				}
			}
		}
		& .menu-item-list {
			display: flex;
			align-items: flex-start;
			margin-bottom: 20px;
			flex-wrap: wrap;
			& section {
				min-height: 30px;
			}
		}

		& .user-det div {
			margin-top: 4px;
			& a {
				transition: 300ms ease-in;
				margin-right: 10px;
				&:nth-child(2) {
					border-left: 2px solid rgba(0, 0, 0, 0.192);
					padding-left: 8px;
				}
				&:hover {
					color: white;
				}
			}
		}
		& section {
			& .profile {
				flex-direction: column;
				& .user-det {
					margin-left: 10px;
					margin-top: 2px;
					flex-direction: column;
					text-align: center;
				}
				& .avatar {
					width: 55px;
					height: 55px;
					border: 2px solid grey;
					border-radius: 50%;
				}
			}
			:global(.profile .avatar svg) {
				width: 50px;
				height: 50px;
			}
		}
	}
	.menu-search {
		background: linear-gradient(90deg, #0629aa, #00aaff, #19a7b8, #9500ff, #006bc1);
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 45px;
		width: 70%;
		border-radius: 30px;
		overflow: hidden;
		padding: 2px;
		& input {
			height: 100%;
			width: 100%;
			padding-left: 15px;
			background: rgba(255, 255, 255, 0.836);
			color: black;
			border-radius: 30px 0 0 30px;
			border: none;
		}
		& button {
			width: 70px;
			height: 100%;
			background: rgba(255, 255, 255, 0.836);
			border-radius: 0 30px 30px 0;
			color: black;
		}
	}
	.close-btn {
		width: 200px;
	}

	nav {
		margin: auto;
		position: relative;
	}
	.nav-menu {
		margin: auto;
		width: 100%;
	}
	.menu-header {
		margin-top: 68px;
		width: 100%;
	}
	:global(header.active) {
		background: rgb(255 255 255 / 77%);
		backdrop-filter: blur(35px);
		border-bottom-color: rgba(0, 0, 0, 0.1098039216) !important;
		position: fixed !important;
	}
	header {
		align-items: center;
		position: relative;
		color: black;
		// position: fixed;
		z-index: 5;
		left: 0;
		right: 0;
		transition: backdrop-filter 100ms ease-in;
		border-bottom: 1px solid transparent;
		transition-property: background, backdrop-filter;
		transition-duration: 500ms, 300ms;
		& .close-menu {
			position: fixed;
			z-index: 2;
			right: 51px;
			top: 10px;
			background: #000000;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			&:hover {
				background: #3b3b3b;
			}
			& span {
				height: 2px;
				width: 22px;
				background: rgb(255, 255, 255);
				display: block;
				margin: 4px 0;
				transition: 300ms;
				&:nth-child(1) {
					transform-origin: top left;
				}
			}
			& div.open {
				& span {
					&:nth-child(1) {
						transform: rotate(45deg) translate(2px, -4px);
					}
					&:nth-child(2) {
						opacity: 0;
					}
					&:nth-child(3) {
						transform: rotate(-45deg) translate(4px, -4px);
					}
				}
			}
		}
		.logo {
			margin: 10px 15px;
			position: absolute;
			& img {
				transition: 300ms ease-in;
				filter: invert(1) !important;
				width: 150px;
			}
		}
	}
</style>
