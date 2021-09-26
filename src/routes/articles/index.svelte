<script context="module">
	export async function preload(page, session) {
		const result = await this.fetch('/articles/index.json');
		const articles = await result.json();
		return { articles };
	}
</script>

<script>
	export let articles;
</script>

<h1>Articles:</h1>

<ul>
	{#each articles as article}
		<li>
			<p>{article.name}</p>
		</li>
	{/each}
</ul>
