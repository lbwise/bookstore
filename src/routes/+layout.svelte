<script lang="ts">
    import NavBar from '../lib/navBar.svelte';
</script>
<div>
    <NavBar />
    <h1>Testing</h1>
    <slot></slot>
</div>
<style>
div {
    margin: 0;
}
</style>