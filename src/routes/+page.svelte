<script lang="ts">
  import ChildGrid from '$lib/ChildGrid.svelte';

  let { data } = $props();
</script>

<ChildGrid heading={data.heading} children={data.children} />
