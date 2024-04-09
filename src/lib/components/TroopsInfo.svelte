<script lang="ts">
	import type { PlayerDetailedInfo } from '$lib/types/player-info';

	export let playerInfo: Partial<PlayerDetailedInfo>;
</script>

<div>
	<div>
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="space-y-2">
				<h3 class="text-lg font-bold tracking-tighter">Tiers kill</h3>
				<dl class="grid gap-1.5 sm:grid-cols-2">
					{#each playerInfo.Fight?.TiersKill || [] as tier}
						<dt>T{tier.Tier} Kill</dt>
						<dd>{tier.Kill}</dd>
					{/each}
				</dl>
			</div>
			<div class="space-y-2">
				<h3 class="text-lg font-bold tracking-tighter">Tiers kill score</h3>
				<dl class="grid gap-1.5 sm:grid-cols-2">
					{#each playerInfo.Fight?.TiersKillScore || [] as tier}
						<dt>T{tier.Tier} Kill score</dt>
						<dd>{tier.KillScore}</dd>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</div>
