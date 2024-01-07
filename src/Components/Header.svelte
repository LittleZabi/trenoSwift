<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from '../assets/logo.svg';
	export let Config:any;
</script>

<header>
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
				<input type="search" name="srch" placeholder="Search on {Config.website_name}" />
				<button class="srch-btn">
					<Icon icon="ion:search-outline" width="40" height="31"/>
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
						<Icon icon="teenyicons:user-outline" />
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
	nav {
        & .lst-icn{
            & ul.lst{
                display: flex;
                margin-right: 30px;
                margin-left: 30px;
                & a{
                    display: block;
                    padding: 2px;
                    margin: 0 8px 0 8px;
                    position: relative;
                }
            }
            & .badge{
                position: absolute;
                top: -5px;
                //right: -13px;
                left: 18px;
                background: var(--red);
                font-weight: 500;
                padding: 1px 4px 2px 4px;
                font-size: 13px;
                border-radius: 29px;
            }
        }
		& .c-srch {
			background: white;
			height: 47px;
			width: 60%;
			border-radius: 29px;
			display: flex;
			overflow: hidden;
			& .otr-srch {
				display: flex;
				width: 100%;
				& .drpd {
					background: var(--light-orange);
                    color: var(--primary-color);
					height: 100%;
					width: 180px;
					font-size: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: nowrap;
					padding: 0px 18px;
				}
				& input[type='search'] {
					width: 100%;
					border: none;
					padding-left: 22px;
					font-size: 15px;
				}
				& button.srch-btn {
					width: 120px;
					border: none;
					background: none;
                    color: var(--primary-color);
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
	}
</style>
