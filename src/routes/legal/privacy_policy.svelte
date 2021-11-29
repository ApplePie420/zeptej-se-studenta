<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n.js';

	import Navigation from '../../components/navigation.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />


	<div class="container">
		<div class="grid-x centered">
			<div class="cell small-3"></div>

			<div class="cell small-6">

			</div>
            
			<div class="cell small-3"></div>
		</div>
		
	</div>
	
{:else}
	<p>Loading...</p>
{/if}