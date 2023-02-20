<script>
  import { base } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<ol class="breadcrumb-nonresponsive">
  <li class="crumb"><a href="{base}/" class="!no-underline">🏠</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li class="crumb">
    <a href="{base}/coding" class="!no-underline">🧑‍💻 Coding</a>
  </li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li>{data.slug}</li>
</ol>

<h1>Projects using {data.slug}</h1>

<ChildGrid {...data.nodeContent} />
