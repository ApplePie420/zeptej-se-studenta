<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n';
	import LocaleSelector from './languageSwitcher.svelte';
	import { session } from '$app/stores';

	export let mod = $session.user.isModerator;
</script>

<!-- Navigation -->
<div class="top-bar" id="realEstateMenu">
	<div class="top-bar-left">
		<ul class="menu" data-responsive-menu="accordion">
			<li class="menu-text">
				<img src="/logotypes/logo_white.png" class="logo_image" alt="Logo" />
			</li>
			<li>
				<a href="/">
					<button class="button accent shadow radius">{$_('menu.index')}</button>
				</a>
			</li>
			<li>
				<a href="/ask">
					<button class="button accent shadow radius">{$_('general.ask_question')}</button
					>
				</a>
			</li>
			<li>
				<a href="/articles">
					<button class="button accent shadow radius">{$_('menu.articles')}</button>
				</a>
			</li>
			{#if mod}
				<li>
					<a href="/questions">
						<button class="button shadow radius">{$_('menu.questions')}</button>
					</a>
				</li>
			{/if}
		</ul>
	</div>
	<div class="top-bar-right">
		<ul class="menu">
			<LocaleSelector
				value={$locale}
				on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
			/>

			<!-- <li><a href="/profile">{$_('menu.my_account')}</a></li> -->

			<!-- <li>
				<a href="/auth/login" class="button accent shadow radius">{$_('menu.log_in')}</a>
			</li> -->
		</ul>
	</div>
</div>
<!-- /Navigation -->
