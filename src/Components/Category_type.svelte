<!-- Rendering Category types Grid  -->
<script lang="ts">
	import testImage from '../assets/test-phones.jpg';
</script>

<div class="category-type">
	<section>
		<div class="image">
			<img src={testImage} alt="view of flowers" />
		</div>
		<div class="txt">
			<h3>Flowers</h3>
			<a href="/">View All</a>
		</div>
	</section>
	<section>
		<div class="image">
			<img src={testImage} alt="view of flowers" />
		</div>
		<div class="txt">
			<h3>Flowers</h3>
			<a href="/">View All</a>
		</div>
	</section>
	<section>
		<div class="image">
			<img src={testImage} alt="view of flowers" />
		</div>
		<div class="txt">
			<h3>Flowers</h3>
			<a href="/">View All</a>
		</div>
	</section>
	<section>
		<div class="image">
			<img src={testImage} alt="view of flowers" />
		</div>
		<div class="txt">
			<h3>Flowers</h3>
			<a href="/">View All</a>
		</div>
	</section>
	<section>
		<div class="image">
			<img src={testImage} alt="view of flowers" />
		</div>
		<div class="txt">
			<h3>Flowers</h3>
			<a href="/">View All</a>
		</div>
	</section>
	<section>
		<div class="image">
			<img src={testImage} alt="view of flowers" />
		</div>
		<div class="txt">
			<h3 class="fw7">Flowers</h3>
			<a href="/" class="fs16 fw6">View All</a>
		</div>
	</section>
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
			height: 241px;
			margin: 0px;
			background: blue;
			& img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			& .txt {
				position: absolute;
				z-index: 1;
				bottom: 30px;
				left: 30px;
				& h3{
					font-size: 25px;
				}
				& a{
					cursor: pointer;
					&:hover{
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
