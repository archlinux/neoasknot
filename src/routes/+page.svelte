<script lang="ts">
  import ChildGrid from '$lib/ChildGrid.svelte';

  export let data;
</script>

<ChildGrid heading={data.heading} children={data.children} />
