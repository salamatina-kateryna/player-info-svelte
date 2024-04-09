<script lang="ts">
	import type { PlayerDetailedInfo } from '$lib/types/player-info';

	export let playerInfo: Partial<PlayerDetailedInfo>;
</script>

<div>
	<div class="grid gap-4 sm:grid-cols-2">
		<div class="space-y-2">
			<h3 class="text-lg font-bold tracking-tighter">Hero Information</h3>
			<dl class="grid gap-1.5 sm:grid-cols-2">
				<dt>Hero Power</dt>
				<dd>{playerInfo.Power?.HeroPower}</dd>
				<dt>Technique Power</dt>
				<dd>{playerInfo.Power?.TechniquePower}</dd>
				<dt>Troop Power</dt>
				<dd>{playerInfo.Power?.TroopPower}</dd>
				<dt>Building Power</dt>
				<dd>{playerInfo.Power?.BuildingPower}</dd>
			</dl>
		</div>
	</div>
</div>
