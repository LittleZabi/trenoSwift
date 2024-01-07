<script lang="ts">
	import testImage from '../assets/test-samsung.png';
</script>

<a href="/" class="df">
	<h3 class="fs22 fw7">Apple - Phones</h3>
	<div class="dfc">
		<img src={testImage} alt="" />
	</div>
</a>

<style lang="scss">
	a {
		height: 340px;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 3px;
        text-align: center;
		& div {
			background: white;
            height: 80%;
            width: 205px;
            margin: 10px 5px;
            border-radius: 32px;
            box-shadow: 3px 7px 9px rgba(0, 0, 0, 0.116);
            & img{
                margin: 22px;
                width: 100%;
                height: 100%;
                object-fit: scale-down;
                display: block;
            }
		}
	}
</style>
