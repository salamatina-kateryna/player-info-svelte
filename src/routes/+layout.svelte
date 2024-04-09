<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';

	import '../app.postcss';
</script>

<AppShell class="px-10 py-5">
	<svelte:fragment slot="header">
		<h1 class="text-2xl font-bold tracking-tighter text-yellow-400 mb-10">Player Stats</h1>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden">Sidebar</div></svelte:fragment
	>
	<svelte:fragment slot="sidebarRight">
		<div id="sidebar-left" class="hidden">Sidebar</div>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
