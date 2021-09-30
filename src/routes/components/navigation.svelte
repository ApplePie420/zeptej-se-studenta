<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '../../services/i18n';

	import LocaleSelector from './languageSwitcher.svelte';
</script>

<!-- Navigation -->
<div class="top-bar" id="realEstateMenu">
	<div class="top-bar-left">
		<ul class="menu" data-responsive-menu="accordion">
			<li class="menu-text">{$_('general.title')}</li>
			<li>
				<a href="/">
					<button class="button accent shadow radius">{$_('menu.index')}</button>
				</a>
			</li>
			<li>
				<a href="/ask">
					<button class="button accent shadow radius">{$_('general.ask_question')}</button>
				</a>
			</li>
			<li>
				<a href="/articles">
					<button class="button accent shadow radius">{$_('menu.articles')}</button>
				</a>
			</li>
			<li>
				<a href="/questions">
					<button class="button accent shadow radius">{$_('menu.questions')}</button>
				</a>
			</li>
		</ul>
	</div>
	<div class="top-bar-right">
		<ul class="menu">
			<LocaleSelector
				value={$locale}
				on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
			/>

			<li><a href="#">{$_('menu.my_account')}</a></li>
			<li><a class="button accent shadow radius">{$_('menu.log_in')}</a></li>
		</ul>
	</div>
</div>
<!-- /Navigation -->
