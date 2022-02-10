<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';

	import Navigation from '../components/navigation.svelte';
	import Banner from '../components/banner.svelte';
	import Cards from '../components/cards-index.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="banner container">
		<div class="row small-up-1 medium-up-2 large-up-3">
			<Banner />
		</div>
	</div>

	<div class="container">
		<div class="row small-up-1 medium-up-2 large-up-3">
			<Cards />
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}
