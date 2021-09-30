<script>
	import { _ } from "$lib/i18n.js"
</script>

<div class="grid-x banner">
	<div class="cell small-6">
		<img src="/typek2.png" alt="typecek" width="500" height="400" />
	</div>
	<div class="cell small-6">
		<h1>
			{$_('general.title')}
		</h1>
		<h2>
			{$_('banner.second_heading')}
		</h2>
		<h4>
			{$_('banner.description')}
		</h4>

		<a href="/ask">
			<button class="button accent shadow radius large">
				{$_('general.ask_question')}
			</button>
		</a>
	</div>
</div>
