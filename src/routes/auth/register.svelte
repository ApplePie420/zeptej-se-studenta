<script>
	import { createEventDispatcher } from 'svelte';

	import Navigation from '../../components/navigation.svelte';
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';

	const dispatch = createEventDispatcher();

	let email;
	let password;
	let first_name;
	let last_name;

	let error;

	const register = async () => {
		error = undefined;

		try {
			// POST to /api/auth/register
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					first_name,
					last_name
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (res.ok) {
				dispatch('success');
			} else {
				error = 'An error occured';
			}
		} catch (err) {
			console.log(err);
			error = err;
		}
	};

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container">
		<div class="row small-up-1 medium-up-2 large-up-3">
			<h1>Register</h1>
			<input type="text" name="first_name" placeholder="Enter your First name" bind:value={first_name} />
			<input type="text" name="last_name" placeholder="Enter your Last name" bind:value={last_name} />
			<input type="email" name="email" placeholder="Enter your email" bind:value={email} />
			<input type="password" name="password" placeholder="Enter your password" bind:value={password} />
			{#if error}
				<p>{error}</p>
			{/if}
			<button on:click={register} class="button submit">Register</button>
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}


