<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import logo from '$lib/archlogo.svg';

  export let data;
</script>

<svelte:head>
  <meta name="description" content={$page.data.metaDescription} />
  <title>{$page.data.title}</title>
</svelte:head>

<header>
  <nav
    aria-label="Navigation bar"
    class="navbar border-b-[5px] border-b-[#08c] bg-base-200"
  >
    <div class="navbar-start">
      <a href={data.logo.link} title={data.logo.description}>
        <img src={logo} alt={data.logo.name} class="w-36 lg:w-48" />
      </a>
    </div>
    <div class="navbar-end">
      <div class="btn-group hidden md:inline-flex">
        {#each data.navbarLinks as { name, description, link }}
          <a
            href={link}
            role="button"
            class="btn-ghost btn-sm btn normal-case lg:btn-md"
            title={description}>{name}</a
          >
        {/each}
      </div>
      <!-- svelte-ignore a11y-label-has-associated-control a11y-no-noninteractive-tabindex -->
      <div class="dropdown-left dropdown md:hidden">
        <label tabindex="0" class="btn-ghost btn-square btn">☰</label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          {#each data.navbarLinks as { name, description, link }}
            <li><a href={link} title={description}>{name}</a></li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</header>

<main class="container mx-auto space-y-8 p-8">
  <slot />
</main>

<footer class="footer footer-center mt-auto bg-base-300 p-4 text-base-content">
  <p class="inline">
    Powered by <a
      href="https://gitlab.archlinux.org/archlinux/neoasknot"
      class="link-hover link">neoasknot</a
    >, using
    <a href="https://kit.svelte.dev" class="link-hover link">SvelteKit</a>
    and
    <a href="https://daisyui.com" class="link-hover link">daisyUI</a> ❤️
    {#if data.donationLink}
      Donate to Arch Linux
      <a href={data.donationLink} class="link-hover link">here</a>
    {/if}
  </p>
</footer>
