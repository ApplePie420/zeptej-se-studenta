<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n.js';

	import Navigation from '../components/navigation.svelte';
	import QuestionCard from '../components/questionCard.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}

	export let question;
	export let date;
	export let answer;
	export let author;
	export let ID;
	export let showForm = false;

	date = new Date(date).toISOString().substring(0, 10);

	function showAnswerForm() {
		if (showForm) {
			showForm = false;
		} else {
			showForm = true;
		}
	}
</script>

<div class="cell">
	<div class="card radius">
		<div class="qCard-question-section">
			<div class="card-section radius">
				<h5>
					<b>{$_("questions.question")}</b>
				</h5>
			</div>
		</div>

			<div class="card-section">
				<i>
					<pre class="radius">
						{question}
					</pre>
				</i>
		</div>

		{#if answer}
			<div class="qCard-answer-section">
				<div class="card-section radius">
					<h5>
						<b>{$_("questions.answer")}</b>
					</h5>
				</div>
			</div>

				<div class="card-section radius ">
					<b>
						<pre class="radius answer-pre">
							{answer}
						</pre>
					</b>
					<i class="answerAuthor"> {$_("questions.answer_by")}: {author} </i>
			</div>
		{:else}
			<div class="card-section radius qCard-answer">
				<pre
					class="radius notAnswered">
                {$_("questions.not_answered")}
            </pre>
			</div>
		{/if}
		<div class="card-section radius qCard-footer">
			{$_("questions.info", {values: {date: date}})}
		</div>
		{#if !answer}
			<div class="card-section radius qCard-footer">
				<button class="button button-s primary radius" href="#" on:click={showAnswerForm}
					>
					{$_("questions.add_answer")}
					</button
				>
			</div>
		{/if}
		{#if showForm}
			<div class="card-section radius qCard-footer">
				<form action="/api/answer" method="post">
					<textarea name="answerText" cols="30" rows="5" placeholder="Answer" />
					<input type="hidden" name="questionID" value={ID} />
					<input type="text" name="author" placeholder="Autor" />
					<input type="submit" value="Odeslat" class="button radius" />
				</form>
			</div>
		{/if}
	</div>
</div>
