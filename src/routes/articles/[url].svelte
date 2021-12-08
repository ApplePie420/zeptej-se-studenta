<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/' + page.params.url;
		console.log(url);
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
	import { page } from '$app/stores';

	export let article;
</script>

{#each article.res as { text, tags }}
	{text}
{/each}
