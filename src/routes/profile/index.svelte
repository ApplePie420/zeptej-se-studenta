<script context="module">
	export async function load({ session }) {
		if (!session.user.authenticated) {
			return {
				status: 302,
				redirect: '/auth/unauthorized'
			};
		}

		return {
			props: {
				email: session.user.email,
				name: session.user.name
			}
		};
	}
</script>

<script>
	// import { onMount } from 'svelte';

	// export let email;
	// let name;

	// onMount(async () => {
	// 	const res = await fetch('/api/user');
	// 	const user = await res.json();
	// 	name = user.first_name;
	// });

	export let email, name;
</script>

<h2>Welcome to your profile</h2>

Your name is <strong>{name}</strong> and you are logged in with an email address <strong>{email}</strong>
