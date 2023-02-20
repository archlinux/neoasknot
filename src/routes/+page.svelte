<script lang="ts">
  import ChildGrid from '$lib/ChildGrid.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<h1>{data.nodeContent.heading}</h1>

<ChildGrid {...data.nodeContent} />
