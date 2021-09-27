<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/articles';
		const res = await fetch(url, session);
		if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error('could not load')
		};
	}
</script>

<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '../services/i18n';

	import Navigation from './components/navigation.svelte';
	import Banner from './components/banner.svelte';
	import Cards from './components/cards-index.svelte';

	export let post;

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
