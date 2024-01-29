<script lang="ts">
	import '../styles/main.scss';
	import Header from '../Components/Header.svelte';
	import type { PageData } from './$types';
	import { updateConfig } from '$lib/store';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let data: PageData;
	onMount(() => {
		updateConfig({ settings: data.config });
	});
</script>

<div id="main-container">
	<Header user={false} Config={data.config} />
	{#key data.url}
		<main in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
			<slot />
		</main>
	{/key}
</div>
