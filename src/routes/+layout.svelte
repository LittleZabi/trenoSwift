<script lang="ts">
	import "../styles/main.scss"
	import Header from '../Components/Header.svelte';
	import type { PageData } from './$types';
	import { updateConfig } from "$lib/store";
	import { onMount } from "svelte";
    export let data: PageData;
	onMount(() => {
		updateConfig({settings: data.config})
	})
</script>

<div id="main-container">
	<Header Config={data.config}/>
	<main>
		<slot/>
	</main>
</div>
