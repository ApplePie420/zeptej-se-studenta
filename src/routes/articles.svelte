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
	export let articles;
</script>

<h1>Articles:</h1>

<div class="container">
	{#each articles.res as { name, text, author, tags, date }}
		<div class="grid-x">
			<div class="cell small-8 large-offset-2">
				<ArticleCard {name} {text} {author} {tags} {date}></ArticleCard>
			</div>
		</div>
	{/each}
</div>