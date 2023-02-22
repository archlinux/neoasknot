<script lang="ts">
  import '../app.css';
  import logo from '$lib/archlogo.5b2d40168a1c.svg';
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<svelte:head>
  <meta name="description" content={$page.data.metaDescription} />
  <title>{$page.data.title}</title>
</svelte:head>

<div class="navbar">
  <div class="navbar-start">
    {#each data.logo as { name, title, link }}
      <a href={link} {title}>
        <img src={logo} alt={name} class="w-36 lg:w-48" />
      </a>
    {/each}
  </div>
  <div class="navbar-end">
    <div class="btn-group">
      {#each data.navlinks as { name, title, link }}
        <a
          href={link}
          role="button"
          class="btn-ghost btn-sm btn hidden normal-case lg:btn-md md:inline-flex"
          {title}>{name}</a
        >
      {/each}
    </div>
  </div>
</div>

<main class="container mx-auto space-y-8 p-8">
  <slot />
</main>
