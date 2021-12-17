<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/articles';
		const res = await fetch(url, session);
		if (res.ok) {
			return {
				props: {
					articles: await res.json()
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
	import ArticleCard from '../components/article_card.svelte';

	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';
	import Navigation from '../components/navigation.svelte';
	import Form from '../components/form.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({
			withLocale: 'cz'
		});
	}
	export let articles;
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container">
		{#each articles.res as { name, text, author, tags, date, url }}
			<ArticleCard {name} {text} {author} {tags} {date} {url} />
		{/each}
	</div>
{:else}
	<p>Loading...</p>
{/if}
