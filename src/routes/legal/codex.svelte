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
			<div class="cell small-3"></div>
			<div class="cell small-6">
				<h3>
					<strong>
						{$_('codex.title')} 
					</strong>
				</h3>
				
				<p>
					{$_('codex.student_advisor')}
					<a href="/legal/tos">{$_('codex.tos.in')}.</a>
				</p>

				<p>
					{$_('codex.client')}
					<a href="/legal/tos">{$_('codex.tos.in')}.</a>
				</p>

				<p>
					{$_('codex.query')}
					<a href="/legal/tos">{$_('codex.tos.in')}.</a>
				</p>

				<p>
					{$_('codex.goal')}
				</p>

				<ol>
					<li>
						<strong>
							{$_('codex.enums.basic_values.title')}
						</strong>
					</li>
					
					<!-- TODO(n3tt): Re-do this, so it iterates over the object -->
					<ol type="a">
						<li>
							{$_('codex.enums.basic_values.a')}
						</li>
						<li>
							{$_('codex.enums.basic_values.b')}
						</li>
						<li>
							{$_('codex.enums.basic_values.c')}
						</li>
						<li>
							{$_('codex.enums.basic_values.d')}
						</li>
						<li>
							{$_('codex.enums.basic_values.e')}
						</li>
						<li>
							{$_('codex.enums.basic_values.f')}
						</li>
					</ol>

					<li>
						<strong>
							{$_('codex.enums.processor_damage.title')}
						</strong>
					</li>
					<ol type="a">
						<li>
							{$_('codex.enums.processor_damage.a')}
						</li>
						<li>
							{$_('codex.enums.processor_damage.b')}
						</li>
						<li>
							{$_('codex.enums.processor_damage.c')}
						</li>
						<li>
							{$_('codex.enums.processor_damage.d')}
						</li>
					</ol>

					<li>
						<strong>
							{$_('codex.enums.respect.title')}
						</strong>
					</li>
					<ol type="a">
						<li>
							{$_('codex.enums.respect.a')}
						</li>
						<li>
							{$_('codex.enums.respect.b')}
						</li>
						<li>
							{$_('codex.enums.respect.c')}
						</li>
						<li>
							{$_('codex.enums.respect.d')}
						</li>
						<li>
							{$_('codex.enums.respect.e')}
						</li>
						<li>
							{$_('codex.enums.respect.f')}
						</li>
					</ol>

					<li>
						<strong>
							{$_('codex.enums.discretion.title')}
						</strong>
					</li>
					<ol type="a">
						<li>
							{$_('codex.enums.discretion.a')}
						</li>
						<li>
							{$_('codex.enums.discretion.b')}
							<a href="/legal/privacy_policy">{$_('codex.privacy_policy.in')}</a>),
						</li>
						<li>
							{$_('codex.enums.discretion.c')}
						</li>
						<li>
							{$_('codex.enums.discretion.d')}
						</li>
						<li>
							{$_('codex.enums.discretion.e')}
						</li>
						<li>
							{$_('codex.enums.discretion.f')}
						</li>
					</ol>

					<li>
						<strong>
							{$_('codex.enums.professional_growth.title')}
						</strong>
					</li>
					<ol type="a">
						<li>
							{$_('codex.enums.professional_growth.a')}
						</li>
						<li>
							{$_('codex.enums.professional_growth.b')}
						</li>
						<li>
							{$_('codex.enums.professional_growth.c')}
						</li>
					</ol>

					<li>
						<strong>
							{$_('codex.enums.final_provisions.title')}
						</strong>
					</li>
					<ol type="a">
						<li>
							{$_('codex.enums.final_provisions.a')}
							<a href="/legal/tos">{$_('codex.tos.with')}</a>
							{$_('codex.and')}
							<a href="/legal/privacy_policy">{$_('codex.privacy_policy.with')}</a>
						</li>
						<li>
							<a href="/legal/tos">{$_('codex.tos.single')}</a>
							{$_('codex.and')}
							<a href="/legal/privacy_policy">{$_('codex.privacy_policy.single')}</a>
							{$_('codex.enums.final_provisions.b')}
						</li>
						<li>
							{$_('codex.enums.final_provisions.c')}
						</li>
					</ol>
				</ol>
			</div>
			<div class="cell small-3"></div>
		</div>
		
	</div>
	
{:else}
	<p>Loading...</p>
{/if}