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
    import Navigation from "./components/navigation.svelte"
    export let post;
    console.log(post)
</script>

<Navigation />

<div class="row small-up-1 medium-up-2 large-up-3">
    {#each post.db as article}
    <div class="card">
        <div class="card-divider">
            <b>{article.name}</b>
        </div>

        <div class="card-section">
            {article.text}
        </div>
    </div>
    {/each}

    <div class="card">
        <div class="card-divider">
            <b>Examplke</b>
        </div>

        <div class="card-section">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo incidunt vel soluta temporibus illo mollitia doloribus iure reprehenderit harum, amet ipsam, omnis nulla dolorem impedit voluptas nihil reiciendis distinctio!
        </div>
    </div>
</div>