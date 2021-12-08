<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';
	import Navigation from '../components/navigation.svelte';
	import Form from '../components/form.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container">
		<div class="grid-x">
			<div class="cell large-2" />

			<div class="cell large-8">
				<Form />
			</div>

			<div class="cell large-2" />
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}
