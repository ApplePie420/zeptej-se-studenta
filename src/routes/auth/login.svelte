<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let email;
    let password;
    let error;

    const login = async () => {
        error = undefined;

        // POST to /api/auth/login
        try { 
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email, 
                    password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(res.ok) {
                dispatch("success");
                error = "Logged in"
            }else {
                error = "an error occured";
            }
        } catch (err) {
            console.log(err);
            error = err;
        }
    };
</script>

<h1>Login</h1>
<input type="email" name="email" placeholder="Enter your email" bind:value={email} />
<input type="password" name="password" placeholder="Enter your password" bind:value={password} />
{#if error}
    <p>{error}</p>
{/if}
<button on:click={login}>Login</button>

Go see your <a href="/profile">profile</a>