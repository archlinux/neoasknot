<script lang="ts">
  import { base } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';

  let { data } = $props();
</script>

<div class="breadcrumbs">
  <ol>
    <li><a href="{base}/" class="no-underline!">🏠</a></li>
    <li><a href="{base}/coding" class="no-underline!">🧑‍💻 Coding</a></li>
    <li>{data.slug}</li>
  </ol>
</div>

<ChildGrid heading={data.heading} children={data.children} />
