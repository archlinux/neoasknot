<script>
  import { base } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<ol class="breadcrumb">
  <li class="crumb"><a href="{base}/" class="!no-underline">🏠</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li class="capitalize">{data.slug}</li>
</ol>

<h1>{data.nodeContent.heading}</h1>

<ChildGrid {...data.nodeContent} slug={data.slug} />
