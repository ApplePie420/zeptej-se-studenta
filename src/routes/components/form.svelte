<div class="card radius shadow bordered">
	<div class="card-divider">
		<h1>
			<b>Zeptejte se studenta</b>
		</h1>
	</div>

	<div class="card-section">
		<form action="/api/newQuestion" method="post">
			<div class="grid-container">
				<div class="grid-x grid-padding-x">
					<div class="medium-6 cell">
						<label>
							E-Mail
							<input type="email" name="email" placeholder="vas@email.com" class="radius" />
						</label>
					</div>

					<div class="medium-6 cell">
						<label>
							Jméno
							<input type="text" name="author" placeholder="Jan Novák" class="radius" />
						</label>
					</div>
				</div>

				<div class="grid-x grid-padding-x">
					<div class="cell">
						<label>
							Váš dotaz
							<textarea
								class="question-ta radius"
								placeholder="Sem napište váš dotaz studentovi"
								name="question"
							/>
						</label>
					</div>
				</div>

				<div class="grid-x grid-padding-x">
					<div class="cell">
						<input type="submit" value="Odeslat dotaz" class="button accent shadow radius" />
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
