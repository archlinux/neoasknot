<script>
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

  /** @type {import('./$types').LayoutData} */
  export let data;
  const nodeContent = data.nodeImport.default;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl">{nodeContent.title}</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <LightSwitch />
        {#each nodeContent.navlinks as { name, link }}
          <a
            class="btn btn-sm variant-ghost-surface hidden md:inline"
            href={link}>{name}</a
          >
        {/each}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <div class="container mx-auto space-y-8 p-8">
    <slot />
  </div>
</AppShell>
