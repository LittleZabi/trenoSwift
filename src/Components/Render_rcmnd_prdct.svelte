<script lang="ts">
	import testImage from '../assets/test-image-3.jpg';
	import Stars from './Stars.svelte';
</script>

<a href="/">
	<div class="image">
		<img src={testImage} alt="" />
	</div>
	<div class="txt">
		<p class="fs18 fw5">
			Corsair K70 RGB PRO Wired Mechanical Gaming Keyboard (CHERRY MX RGB Speed Switches: Linear and
			Rapid, 8,000Hz Hyper-Polling, PBT DOUBLE-SHOT PRO Keycaps .....
		</p>
		<div class="rat mt8 df">
			<Stars Rating={4.5} />
			<span class="badge fs12 fw6">160 Reviews</span>
		</div>
		<p class="cat mt8 fs14">Beauty and Cream</p>
		<h2 class="mt8">
			<sup>$</sup>
			189.99
		</h2>
		<p class="extra mt8 fw5">$58.45 Shipping</p>
	</div>
</a>

<style lang="scss">
	a{
		min-width: 244px;
		height: max-content;
		display: flex;
		flex-direction: column;
        margin: 0 8px 15px;
        border-radius: 19px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 16%);
        background: white;
        overflow: hidden;
        & .txt{
            padding: 8px;
            & p.fs18.fw5{
                margin: 0;
                color: #1e66b8; 
            }
        }
        .mt8{
            margin-top: 8px;
        }
        & .rat{
            & span.badge{
                margin-left: 8px;
            }
        }
        & h2{
            & sup{
                font-size: 14px;
                margin-right: -4px;
                font-weight: 500;
            }
        }
        & .extra{
            font-size: 14px;
            margin-bottom: 10px;
        }
		& .image {
            height: 40%;
            & img{
                width: 100%;height: 230px;
                object-fit: cover;
            }
		}
	}
</style>
