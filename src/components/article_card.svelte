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

<div class="card">
	<div class="card-divider">
		<h3>
			<b>
				{name}
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
