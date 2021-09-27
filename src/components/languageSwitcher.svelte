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
        <select value={value} on:change={handleLocaleChange}>
            <option value="en">EN</option>
            <option value="cz">CZ</option>
        </select>
    </div>
</div>