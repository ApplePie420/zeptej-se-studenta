<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n.js';

	import Navigation from '../components/navigation.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

    <div class="grid-x">
        <div class="cell small-2"></div>

        <div class="cell small-8 text-center">
            <h1 class="orange-text error-message">
                404
            </h1>
    
            <p>
                {$_("error.not-found")}
            </p>
        </div>

        <div class="cell small-2"></div>
    </div>
			
{:else}
	<p>Loading...</p>
{/if}