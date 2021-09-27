<script>
	import { createEventDispatcher } from 'svelte';
	export let value = 'en';
	const dispatch = createEventDispatcher();
	function handleLocaleChange(event) {
		event.preventDefault();
		dispatch('locale-changed', event.target.value);
	}
</script>

<div class="locale-selector">
	<div class="select">
		<select {value} on:change={handleLocaleChange} class="localeSelector">
			<option value="en">🇬🇧 English</option>
			<option value="cz">🇨🇿 Česky</option>
		</select>
	</div>
</div>
