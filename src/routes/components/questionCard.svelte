<script>
    export let question;
    export let date;
    export let author;
</script>

<div class="cell">
    <div class="card-section radius">
        {question}
    </div>
    <div class="card-section radius">
        On {date} by {author}
    </div>
</div>