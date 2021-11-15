<script>
    export let text;
    export let author;
    export let date;
    export let tags;
    export let name;

    let desc = text.split("\n")[0];

    date = new Date(date).toISOString().substring(0, 10);
</script>

<div class="card">
    <div class="card-divider">
        { name }
    </div>
    <div class="card-section radius">
        <i>
            { desc }
        </i>
    </div>
    <div class="card-section radiud">
        <b>
            { author } - { date }
        </b>
    </div>
</div>