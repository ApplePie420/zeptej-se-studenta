<script>
    import {
        _,
        setupI18n,
        isLocaleLoaded,
        locale
    } from '$lib/i18n.js';

    import Navigation from '../../components/navigation.svelte';

    $: if (!$isLocaleLoaded) {
        setupI18n({
            withLocale: 'cz'
        });
    }
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container">
		<div class="grid-x text-center">
            <div class="cell small-4">
                <a href="/legal/tos">
                    <h3>
                        Terms and Conditions
                    </h3>
                </a>
                </div>

            <div class="cell small-4">
                <a href="/legal/privacy_policy">
                    <h3>
                        Privacy Policy
                    </h3>
                </a>
                </div>
            
            <div class="cell small-4">
                <a href="/legal/codex">
                    <h3>
                        Kodex
                    </h3>
                </a>
                </div>
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}