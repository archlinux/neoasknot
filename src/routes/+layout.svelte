<script>
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl">{data.content.default.title}</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <LightSwitch />
        {#each data.content.default.navlinks as { name, link }}
          <a class="btn btn-sm variant-ghost-surface hidden md:inline" href="{link}">{name}</a>
        {/each}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
