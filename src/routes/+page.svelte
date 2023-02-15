<script>
  import { base } from '$app/paths';

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<h1>{data.nodeContent.heading}</h1>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each data.nodeContent.children as { title, subtitle, link }}
    {@const icon = link ? '🔗' : '📁'}
    {@const url = link || `${base}/${title.toLowerCase()}`}
    <a class="card card-hover flex flex-col" href={url}>
      <article class="space-y-4  p-4">
        <div class="flex place-content-between">
          <h2 class="inline">{title}</h2>
          <span class="mt-1 md:mt-1.5">{icon}</span>
        </div>
        <p>{subtitle}</p>
      </article>
    </a>
  {/each}
</div>
