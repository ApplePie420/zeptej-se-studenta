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
    import Form from "./components/form.svelte"
    import Banner from "./components/banner.svelte"

    export let post;
    console.log(post)
</script>

<Navigation />

<div class="banner container">
    <div class="row small-up-1 medium-up-2 large-up-3">
    <Banner />

    

        <!-- <Form /> -->

        <!-- {#each post.db as article}
        <div class="card radius shadow">
            <div class="card-divider">
                <b>{article.name}</b>
            </div>

            <div class="card-section">
                {article.text}
            </div>
        </div>
        {/each} -->
    </div>
</div>