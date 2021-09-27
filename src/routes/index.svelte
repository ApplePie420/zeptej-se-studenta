<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/articles';
		const res = await fetch(url, session);
		if (res.ok) {
			return {
				props: {
					post: await res.json()
				},
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

	import LocaleSelector from "../components/languageSwitcher.svelte";
	import Navigation from "./components/navigation.svelte"
    import Form from "./components/form.svelte"
    import Banner from "./components/banner.svelte"
    import Cards from "./components/cards-index.svelte"

	$: if (!$isLocaleLoaded) {
        setupI18n({ withLocale: 'en' });
    }

	export let post;
</script>


{#if $isLocaleLoaded}
	<LocaleSelector value={$locale} on:locale-changed={e => setupI18n({ withLocale: e.detail }) } />

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

	<!-- <Form /> -->

	<!-- {#each post.db as article}
	<div class="card radius shadow">
		<div class="card-divider">
			<b>{article.name}</b>
		</div>

		<div class="card-section">
			{article.text}
		</div>
	</div>
	{/each} -->
{:else}
    <p>Loading...</p>
{/if}
