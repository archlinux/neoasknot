<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<svelte:head>
  <meta name="description" content={$page.data.metaDescription} />
  <title>{$page.data.title}</title>
</svelte:head>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl">{data.title}</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <LightSwitch />
        {#each data.navlinks as { name, title, link }}
          <a
            href={link}
            class="btn btn-sm variant-ghost-surface hidden lg:inline"
            {title}>{name}</a
          >
        {/each}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <div class="container mx-auto space-y-8 p-8">
    <slot />
  </div>
</AppShell>
