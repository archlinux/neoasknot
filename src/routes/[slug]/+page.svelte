<script lang="ts">
  import { base } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<ol class="breadcrumb">
  <li class="crumb"><a href="{base}/" class="!no-underline">🏠</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li class="capitalize">{data.slug}</li>
</ol>

<h1>{data.heading}</h1>

<ChildGrid children={data.children} slug={data.slug} />
