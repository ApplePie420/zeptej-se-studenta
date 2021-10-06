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
	export let articles;
</script>

<h1>Articles:</h1>

<ul>

	{#each articles.res as { name }}
		<li>
			<p>
				{article.name}
			</p>
		</li>
	{/each}
</ul>
