<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/' + page.params.url;

		const res = await fetch(url, session);
		if (res.ok) {
			return {
				props: {
					article: await res.json()
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
	import Navigation from '../../components/navigation.svelte';
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';

	export let article;

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="grid-x">
		<div class="cell small-2" />

		<div class="cell small-8">

			{#each article.res as { text, tags, name, author }}
				<div class="articleHeader orange-background white-text">
					<strong>
						<h1>
							{name}
						</h1>
					</strong>
				</div>
		
				<pre class="articleText">
					{text}
				</pre>

				<small>
					<i>
						{author}
					</i>
				</small>
			{/each}

		</div>

		<div class="cell small-2" />
	</div>

	
{:else}
	<p>Loading...</p>
{/if}

<style>
	.articleText {
		display: block;
		font-family: monospace;
		white-space: pre-wrap;
		overflow: hidden;
	}

	.articleHeader {
		text-align: center;
	}
</style>



