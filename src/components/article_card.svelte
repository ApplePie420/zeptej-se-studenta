<script>
	export let text;
	export let author;
	export let date;
	export let tags;
	export let name;
	export let url;

	let desc = text.split('\n')[0];

	date = new Date(date).toISOString().substring(0, 10);
</script>

<div class="grid-x">
	<div class="cell small-2" />

	<div class="cell small-8">
		<div class="card radius shadow">
			<div class="card-divider orange-background white-text">
				<h3>
					<b>
						<a href="articles/{url}" class="noURLstyle">
							{name}
						</a>
					</b>
				</h3>
			</div>
			<div class="card-section radius">
				<i>
					{desc}

					<a href="articles/{url}">Číst více...</a>
				</i>
			</div>
			<div class="card-section radius">
				<div class="grid-x">
					<div class="cell small-6">
						<strong>
							{author}
						</strong>
					</div>

					<div class="cell small-6 text-right">
						{date}
					</div>
				</div>

				<div class="grid-x">
					<div class="cell">
						<small>
							<i>
								{tags}
							</i>
						</small>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="cell small-2" />
</div>

<style>
	.noURLstyle {
		text-decoration: none;
		color: white;
	}
</style>