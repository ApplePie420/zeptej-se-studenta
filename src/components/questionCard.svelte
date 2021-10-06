<script>
	export let question;
	export let date;
	export let answer;
	export let author;
	export let ID;
	export let showForm = false;

	date = new Date(date).toISOString().substring(0, 10);

	function showAnswerForm() {
		if(showForm) {
			showForm = false;
		} else {
			showForm = true;
		}
	}
</script>

<div class="cell">
	<div class="card">
		<div class="card-section radius">
			<pre>
                {question}
            </pre>
		</div>
		{#if answer}
		<div class="card-section radius qCard-answer">
			<b>
				<pre class="radius">
                	{answer}
				</pre>
            </b>
			<i class="answerAuthor"> -{author} </i>
		</div>
		{:else}
		<div class="card-section radius qCard-answer">
			<pre class="radius notAnswered">
                Tato otázka ještě nebyla zodpovězena!
            </pre>
		</div>
		{/if}
		<div class="card-section radius qCard-footer">
			On {date} by Anonymous
		</div>
		{#if !answer}
			<div class="card-section radius qCard-footer">
				<button class="button button-s primary radius" href="#" on:click="{showAnswerForm}">Přidat odpověď</button>
			</div>
		{/if}
		{#if showForm}
			<div class="card-section radius qCard-footer">
				<form action="/api/answer" method="post">
					<textarea name="answerText" cols="30" rows="5" placeholder="Answer"></textarea>
					<input type="hidden" name="questionID" value="{ID}">
					<input type="text" name="author" placeholder="Autor">
					<input type="submit" value="Odeslat" class="button radius">
				</form>
			</div>
		{/if}
	</div>
</div>
