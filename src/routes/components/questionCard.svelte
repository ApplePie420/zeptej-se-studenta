<script>
	export let question;
	export let date;

	date = new Date(date).toISOString().substring(0, 10);
</script>

<div class="cell">
	<div class="card">
		<div class="card-section radius">
			<pre>
                {question}
            </pre>
		</div>
		<div class="card-section radius qCard-footer">
			On {date} by Anonymous
		</div>
	</div>
</div>
