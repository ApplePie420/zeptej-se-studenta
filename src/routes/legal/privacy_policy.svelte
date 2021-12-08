<script>
	import { _, setupI18n, isLocaleLoaded, locale } from '$lib/i18n.js';

	import Navigation from '../../components/navigation.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'cz' });
	}
</script>

{#if $isLocaleLoaded}
	<Navigation />

	<div class="container">
		<div class="grid-x centered">
			<div class="cell small-3" />

			<div class="cell small-6 legal_design">
				<h3>
					<strong>
						{$_('privacy_policy.title')}
					</strong>
				</h3>

				<p>
					{$_('privacy_policy.main_text')}
				</p>

				<!-- TODO(n3tt): Re-do this, so it iterates over the object -->
				<h5>
					<strong>
						{$_('privacy_policy.enums.title')}
					</strong>
				</h5>
				<ol>
					<li>
						{$_('privacy_policy.enums.1')}
					</li>

					<li>
						{$_('privacy_policy.enums.2')}
					</li>
				</ol>

				<h5>
					<strong>
						{$_('privacy_policy.enums.gathered_data.title')}
					</strong>
				</h5>
				<ol start="3">
					<li>
						{$_('privacy_policy.enums.gathered_data.main_text_1')}
						<a href="/legal/tos">{$_('links.tos.in')}</a>
						{$_('privacy_policy.enums.gathered_data.main_text_2')}
						<a href="/legal/tos">{$_('links.tos.in')}</a>
						{$_('privacy_policy.enums.gathered_data.main_text_3')}
						<ul>
							<li>
								{$_('privacy_policy.enums.gathered_data.enums.fullname')}
							</li>
							<li>
								{$_('privacy_policy.enums.gathered_data.enums.mail')}
							</li>
							<li>
								{$_('privacy_policy.enums.gathered_data.enums.phone')}
							</li>
						</ul>
					</li>
					<li>
						{$_('privacy_policy.enums.4')}
					</li>
					<li>
						{$_('privacy_policy.enums.5_1')}
						<a href="/legal/tos">{$_('links.tos.in')}</a>
						{$_('privacy_policy.enums.5_2')}
					</li>
					<li>
						{$_('privacy_policy.enums.6')}
					</li>
					<li>
						{$_('privacy_policy.enums.7')}
					</li>
				</ol>

				<h5>
					<strong>
						{$_('privacy_policy.enums.reason_title')}
					</strong>
				</h5>
				<ol start="8">
					<li>
						{$_('privacy_policy.enums.8')}
					</li>
					<li>
						{$_('privacy_policy.enums.9')}
					</li>
					<li>
						{$_('privacy_policy.enums.10')}
					</li>
					<li>
						{$_('privacy_policy.enums.11')}
					</li>
					<li>
						{$_('privacy_policy.enums.12')}
					</li>
					<li>
						{$_('privacy_policy.enums.13')}
					</li>
					<li>
						{$_('privacy_policy.enums.14')}
					</li>
					<li>
						{$_('privacy_policy.enums.15')}
					</li>
					<li>
						{$_('privacy_policy.enums.16')}
					</li>
				</ol>

				<h5>
					<strong>
						{$_('privacy_policy.enums.processors_as_recipients_title')}
					</strong>
				</h5>
				<ol start="17">
					<li>
						{$_('privacy_policy.enums.17_1')}
						<a href="/legal/tos">{$_('links.tos.by')}</a>
						{$_('privacy_policy.enums.17_2')}
					</li>
					<li>
						{$_('privacy_policy.enums.18_1')}
						<a href="/legal/tos">{$_('links.tos.in')}</a>
						{$_('privacy_policy.enums.18_2')}
					</li>
					<li>
						{$_('privacy_policy.enums.19')}
					</li>
					<li>
						{$_('privacy_policy.enums.20')}
					</li>
					<li>
						{$_('privacy_policy.enums.21')}
					</li>
					<li>
						{$_('privacy_policy.enums.22')}
					</li>
				</ol>

				<h5>
					<strong>
						{$_('privacy_policy.enums.rights_of_client_title')}
					</strong>
				</h5>
				<ol start="23">
					<li>
						{$_('privacy_policy.enums.23.text')}
						<ul>
							<li>
								{$_('privacy_policy.enums.23.enums.1')}
							</li>
							<li>
								{$_('privacy_policy.enums.23.enums.2')}
							</li>
							<li>
								{$_('privacy_policy.enums.23.enums.3')}
							</li>
							<li>
								{$_('privacy_policy.enums.23.enums.4')}
							</li>
							<li>
								{$_('privacy_policy.enums.23.enums.5')}
							</li>
							<li>
								{$_('privacy_policy.enums.23.enums.6')}
							</li>
							<li>
								{$_('privacy_policy.enums.23.enums.7')}
								<a href="mailto:webmaster@zeptejtesestudenta.cz">webmaster e-mail</a
								>
							</li>
						</ul>
					</li>
					<li>
						{$_('privacy_policy.enums.24')}
					</li>
					<li>
						{$_('privacy_policy.enums.25')}
					</li>
				</ol>

				<h5>
					<strong>
						{$_('privacy_policy.enums.security_title')}
					</strong>
				</h5>
				<ol start="26">
					<li>
						{$_('privacy_policy.enums.26')}
					</li>
					<li>
						{$_('privacy_policy.enums.27_1')}
						<a href="/legal/tos">{$_('links.tos.in')}</a>
						{$_('privacy_policy.enums.27_2')}
					</li>
					<li>
						{$_('privacy_policy.enums.28')}
					</li>
				</ol>

				<h5>
					<strong>
						{$_('privacy_policy.enums.final_title')}
					</strong>
				</h5>
				<ol start="29">
					<li>
						{$_('privacy_policy.enums.29')}
					</li>
					<li>
						{$_('privacy_policy.enums.30')}
					</li>
					<li>
						{$_('privacy_policy.enums.31')}
					</li>
					<li>
						{$_('privacy_policy.enums.32')}
					</li>
					<li>
						{$_('privacy_policy.enums.33')}
					</li>
					<li>
						{$_('privacy_policy.enums.34_1')}
						<a href="mailto:webmaster@zeptejtesestudenta.cz">webmaster e-mail</a>
						{$_('privacy_policy.enums.34_2')}
					</li>
					<li>
						{$_('privacy_policy.enums.35')}
					</li>
				</ol>
			</div>

			<div class="cell small-3" />
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}
