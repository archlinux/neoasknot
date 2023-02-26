<script lang="ts">
  import '../app.css';
  import logo from '$lib/archlogo.svg';
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
    <div class="btn-group hidden md:inline-flex">
      {#each data.navlinks as { name, title, link }}
        <a
          href={link}
          role="button"
          class="btn-ghost btn-sm btn normal-case lg:btn-md"
          {title}>{name}</a
        >
      {/each}
    </div>
    <!-- svelte-ignore a11y-label-has-associated-control a11y-no-noninteractive-tabindex -->
    <div class="dropdown-left dropdown md:hidden">
      <label tabindex="0" class="btn-ghost btn pb-1 font-extrabold">…</label>
      <ul
        tabindex="0"
        class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
      >
        {#each data.navlinks as { name, title, link }}
          <li>
            <a
              href={link}
              role="button"
              class="btn-ghost btn-sm btn normal-case lg:btn-md"
              {title}>{name}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<main class="container mx-auto space-y-8 p-8">
  <slot />
</main>
