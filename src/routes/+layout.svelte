<script lang="ts">
  import '../app.css';
  import '$orgLib/org.css';
  import { base } from '$app/paths';
  import { page } from '$app/state';
  import { PUBLIC_ORG } from '$env/static/public';

  let { data, children } = $props();
</script>

<svelte:head>
  <meta name="description" content={page.data.metaDescription} />
  <title>{page.data.title}</title>
</svelte:head>

<header>
  <nav aria-label="Navigation bar" class="navbar bg-base-200">
    <div class="navbar-start">
      <a href={data.logo.href} title={data.logo.description}>
        <img
          src="{base}/{data.logo.image}"
          alt="{PUBLIC_ORG} logo"
          class="w-36 lg:w-48"
        />
      </a>
    </div>
    <div class="navbar-end">
      <div class="join hidden md:inline-flex">
        {#each data.navbarLinks as { name, description, href }}
          <a {href} class="btn join-item btn-sm lg:btn-md" title={description}
            >{name}</a
          >
        {/each}
      </div>
      <details
        class="dropdown dropdown-left [&_summary]:open:bg-base-300 md:hidden"
      >
        <summary class="btn btn-square">☰</summary>
        <ul
          class="menu dropdown-content rounded-box bg-base-100 z-1 w-52 shadow-sm"
        >
          {#each data.navbarLinks as { name, description, href }}
            <li><a {href} title={description}>{name}</a></li>
          {/each}
        </ul>
      </details>
    </div>
  </nav>
</header>

<main class="container mx-auto space-y-8 p-8">
  {@render children()}
</main>

<footer class="footer footer-center bg-base-300 text-base-content mt-auto p-4">
  <p class="inline">
    Powered by <a
      href="https://gitlab.archlinux.org/archlinux/neoasknot"
      class="link-hover link">neoasknot</a
    >, using
    <a href="https://kit.svelte.dev" class="link-hover link">SvelteKit</a>
    and
    <a href="https://daisyui.com" class="link-hover link">daisyUI</a>
    <span class="mx-1">❤️</span>
    {#if data.donationLink}
      Donate to {PUBLIC_ORG}
      <a href={data.donationLink} class="link-hover link">here</a>
    {/if}
  </p>
</footer>
