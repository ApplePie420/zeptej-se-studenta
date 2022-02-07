<script>
	import { createEventDispatcher } from 'svelte';

	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';

	import Navigation from '../../components/navigation.svelte';

	const dispatch = createEventDispatcher();

	let email;
	let password;
	let error;
	let logged_in;

	const login = async () => {
		error = undefined;

		// POST to /api/auth/login
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (res.ok) {
				dispatch('success');
				error = 'Logged in';
				logged_in = true;
			} else {
				error = 'an error occured';
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
			<h1>Login</h1>
			<input type="email" name="email" placeholder="Enter your email" bind:value={email} />
			<input type="password" name="password" placeholder="Enter your password" bind:value={password} />

			{#if error}
				<p>{error}</p>
			{/if}

			<button on:click={login} class="submit button">Login</button>

			{#if logged_in}
				Go see your <a href="/profile">profile</a>
			{/if}
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}


