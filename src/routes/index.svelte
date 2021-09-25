<script context="module">
    export async function load({page, fetch, session, stuff}) {

        const url = "/api/articles";
        const res = await fetch(url, session);
        if(res.ok) {
            return {
                props: {
                    post: await res.json()
                }
            };
        }

        return { 
            status: res.status,
            error: new Error("could not load")
        }
    }
</script>

<script>
    export let post;
    console.log(post)
</script>

<h1>yo index</h1>

{#each post.db as article}
<h2>
    {article.name}
</h2>

<pre>
    {article.text}
</pre>

{/each}