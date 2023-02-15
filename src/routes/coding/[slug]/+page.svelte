<script>
  import { base } from '$app/paths';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<ol class="breadcrumb-nonresponsive">
  <li class="crumb"><span>🏠</span><a href="{base}/">Home</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li class="crumb"><span>🧑‍💻</span><a href="{base}/coding">Coding</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li>{data.slug}</li>
</ol>

<h1>Projects using {data.slug}</h1>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each data.nodeContent.children as { title, subtitle, link }}
    <a class="card card-hover flex flex-col" href={link}>
      <article class="space-y-4 p-4">
        <div class="flex place-content-between">
          <h2 class="inline">{title}</h2>
          <span class="mt-1 md:mt-1.5">🔗</span>
        </div>
        <p>{subtitle}</p>
      </article>
    </a>
  {/each}
</div>
