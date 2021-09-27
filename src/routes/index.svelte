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

	$: if (!$isLocaleLoaded) {
        setupI18n({ withLocale: 'en' });
    }

	// export let post;
	// console.log(post);
</script>


{#if $isLocaleLoaded}
	<h1>yo index</h1>

	<LocaleSelector value={$locale} on:locale-changed={e => setupI18n({ withLocale: e.detail }) } />

	<p>
		{$_("ask_question")}
		<br>
		{$_("my_account")}
	</p>
{:else}
    <p>Loading...</p>
{/if}

<h1>
	index
</h1>



<!-- {#each post.db as article}
	<h2>
		{article.name}
	</h2>

	<pre>
    {article.text}
</pre>
{/each} -->
