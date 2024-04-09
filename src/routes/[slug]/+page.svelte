<script lang="ts">
	import PlayerInfo from '$lib/components/PlayerInfo.svelte';
	import { processPlayerInfo } from '$lib/helpers.js';
	import type { PlayerDetailedInfo } from '$lib/types/player-info.js';

	export let data;

	const playerInfo = data?.item as PlayerDetailedInfo;
</script>

{#if playerInfo}
	<PlayerInfo {playerInfo}></PlayerInfo>
{:else}
	<div>Player info not found</div>
{/if}
