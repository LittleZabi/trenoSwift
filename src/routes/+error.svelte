<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="page-size dfc" id="page-404">
	<div class="page-404-left">
		<div>{@html $page?.error?.message}</div>
		<img src="/images/assets/page-404-1.jpg" alt="page-404" />
	</div>
	<div class="page-404-right">
		<h1>Oops! It seems like you've landed on a page that doesn't exist.</h1>
		We apologize for the inconvenience. The page you were looking for, specifically related to mobile
		and laptops specifications, could not be found. At our website, we strive to provide accurate and
		up-to-date information about the specifications of mobile phones and laptops. However, it appears
		that the particular page you were trying to access is missing or has been moved. We understand how
		important it is for you to have access to reliable information when it comes to choosing the right
		mobile phone or laptop. Our team is committed to providing comprehensive details, including technical
		specifications, features, and performance benchmarks, to help you make informed decisions. While
		we work diligently to ensure that all our pages are accessible and functional, occasionally, pages
		may be relocated or removed due to updates or restructuring. We apologize for any inconvenience caused.
		We encourage you to navigate through our website using the menu or search bar to explore other relevant
		pages and find the information you need. Alternatively, you can also contact our support team for
		further assistance or to report any issues you may have encountered. Thank you for your understanding,
		and we appreciate your interest in our website for mobile and laptops specifications. We are continuously
		improving our services to provide you with a seamless browsing experience.
	</div>
</div>

<style lang="scss">
	#page-404 {
		margin: auto;
		flex-wrap: nowrap;
		align-items: flex-start;
		margin-top: 80px;
		padding: 15px;
		background: white;
		border-radius: 8px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		& img {
			width: 100%;
			border-radius: 13px;
			margin: 20px 0;
		}
		& .page-404-left {
			width: 50%;
		}
		& .page-404-right {
			width: 50%;
			& h1 {
				margin-bottom: 10px;
			}
		}
	}
</style>
