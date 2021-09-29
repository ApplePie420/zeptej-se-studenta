<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '../services/i18n';
	import Navigation from './components/navigation.svelte';
	import Form from './components/form.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container">
		<Form />
	</div>
{:else}
	<p>Loading...</p>
{/if}
