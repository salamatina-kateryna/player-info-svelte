<script lang="ts">
	import type { PlayerDetailedInfo } from '$lib/types/player-info';
	import { TabGroup, Tab, TabAnchor, Avatar } from '@skeletonlabs/skeleton';
	import PowerInfo from './PowerInfo.svelte';
	import TroopsInfo from './TroopsInfo.svelte';

	export let playerInfo: Partial<PlayerDetailedInfo>;

	let tabSet: number = 0;
</script>

<div class="grid gap-6 w-full mx-auto font-quicksand">
	<div class="space-y-4">
		<div class="space-y-2">
			<div class="flex items-center space-x-4">
				<div class="flex space-y-1.5">
					<p class="text-sm font-medium text-gray-500 dark:text-gray-400">
						Player ID:
						<span class="font-semibold">{playerInfo.Player?.PlayerId}</span>
					</p>
				</div>
				<div class="ml-auto flex items-center space-x-2">
					<button>Follow</button>
					<button>Message</button>
				</div>
			</div>
			<div class="grid gap-4 md:grid-cols-2">
				<div class="flex items-center space-x-4">
					<img
						alt="Avatar"
						class="rounded-full"
						height="100"
						src={playerInfo?.Player?.Avatar?.avatar || ''}
						width="100"
					/>
					<div class="space-y-2.5">
						<div class="flex items-center space-x-2">
							<h2 class="text-2xl font-bold tracking-tighter">{playerInfo.Player?.Name}</h2>
							<!-- <span class="badge variant-filled">{playerInfo.Player?.Power}</span> -->
						</div>
						<div class="grid gap-1.5 sm:grid-cols-2">
							<dl class="flex-1">
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Server</dt>
								<dd>{playerInfo.Player?.ServerId || 0 + 1000}</dd>
							</dl>
							<dl class="flex-1">
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">VIP Level</dt>
								<dd>{playerInfo?.Player?.VipLevel}</dd>
							</dl>
							<dl class="flex-1">
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Civilization</dt>
								<dd>{playerInfo.Player?.Civilization}</dd>
							</dl>
							<dl class="flex-1">
								<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
									Town Center Level
								</dt>
								<dd>{playerInfo.Player?.TownCenterLevel}</dd>
							</dl>
						</div>
					</div>
				</div>
				<div class="space-y-2">
					<dl class="flex-1">
						<strong>Alliance</strong>
						<dd class="flex items-center space-x-2">
							<div class="space-y-0.5">
								<dt class="text-sm font-medium">
									{playerInfo.Alliance?.Name}
								</dt>
								<p class="text-xs text-gray-500 dark:text-gray-400">{playerInfo.Alliance?.Abbr}</p>
							</div>
						</dd>
					</dl>
					<dl class="flex-1">
						<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Language</dt>
						<dd>{playerInfo.Alliance?.Lang}</dd>
					</dl>
				</div>
			</div>
		</div>
		<div class="space-y-4">
			<TabGroup>
				<Tab bind:group={tabSet} name="tab1" value={0}>
					<span>Power</span>
				</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>
					<span>Troops</span>
				</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>
					<span>Battle Statistics</span>
				</Tab>
				<Tab bind:group={tabSet} name="tab4" value={3}>
					<span>KvK Info</span>
				</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<PowerInfo {playerInfo}></PowerInfo>
					{:else if tabSet === 1}
						<TroopsInfo {playerInfo}></TroopsInfo>
					{:else if tabSet === 2}
						<div>
							<div class="grid gap-4 sm:grid-cols-2">
								<div class="space-y-2">
									<h3 class="text-lg font-bold tracking-tighter">Battle Information</h3>
									<dl class="grid gap-1.5 sm:grid-cols-2">
										<dt>Total Kills</dt>
										<dd>100,000,000</dd>
										<dt>Total Heals</dt>
										<dd>200,000,000</dd>
										<dt>Total Deaths</dt>
										<dd>300,000,000</dd>
									</dl>
								</div>
								<div class="space-y-2">
									<h3 class="text-lg font-bold tracking-tighter">League Information</h3>
									<dl class="grid gap-1.5 sm:grid-cols-2">
										<dt>League Wins</dt>
										<dd>100,000,000</dd>
										<dt>League Joins</dt>
										<dd>200,000,000</dd>
										<dt>League Losses</dt>
										<dd>300,000,000</dd>
									</dl>
								</div>
							</div>
						</div>
					{:else if tabSet === 3}<div>
							<div class="grid gap-4 sm:grid-cols-2">
								<div class="space-y-2">
									<h3 class="text-lg font-bold tracking-tighter">KvK Information</h3>
									<dl class="grid gap-1.5 sm:grid-cols-2">
										<dt>KvK Points</dt>
										<dd>100,000,000</dd>
										<dt>KvK Kills</dt>
										<dd>200,000,000</dd>
										<dt>KvK Deaths</dt>
										<dd>300,000,000</dd>
									</dl>
								</div>
							</div>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
