<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/questions';
		const res = await fetch(url, session);
		if (res.ok) {
			return {
				props: {
					questions: await res.json()
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
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n.js';

	import Navigation from '../components/navigation.svelte';
	import QuestionCard from '../components/questionCard.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}

	export let questions;
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container row">
		<div class="grid-x">
			{#each questions.res as { author, question, created_at, answer, ID }}
				<QuestionCard {question} {author} {answer} {ID} date={created_at} />
			{/each}
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}
