<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';

	$: if (!$isLocaleLoaded) {
		setupI18n({
			withLocale: 'cz'
		});
	}
</script>

{#if $isLocaleLoaded}
	<div class="card radius shadow bordered">
		<div class="card-divider orange-background white-text">
			<h1>
				<b>
					{$_('general.ask_question')}
				</b>
			</h1>
		</div>

		<div class="card-section">
			<form action="/api/newQuestion" method="post">
				<div class="grid-container">
					<div class="grid-x grid-padding-x">
						<div class="medium-6 cell">
							<label for="email"> E-Mail </label>
							<input
								type="email"
								name="email"
								placeholder="example@email.com"
								class="radius"
								id="email"
							/>
						</div>

						<div class="medium-6 cell">
							<label for="author">
								{$_('form.name')}
							</label>
							<input
								type="text"
								name="author"
								placeholder="John Doe"
								class="radius"
								id="author"
							/>
						</div>
					</div>

					<div class="grid-x grid-padding-x">
						<div class="cell">
							<label for="question">
								{$_('form.question')}
							</label>
							<textarea
								class="question-ta radius"
								placeholder={$_('form.question_placeholder')}
								name="question"
								id="question"
							/>
						</div>
					</div>

					<div class="grid-x grid-padding-x">
						<div class="cell">
							<input
								type="submit"
								value={$_('form.submit')}
								class="button accent shadow radius"
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}
