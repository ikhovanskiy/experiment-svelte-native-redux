<script lang="ts">
  export let color: string;
  const MOVE = 800;
  const randomX = Math.floor(Math.random() * MOVE);
  const randomY = Math.floor(Math.random() * MOVE);
</script>

<div
  class="dot"
  style="--bg-color: {color}; transform: translate({randomX}px, {randomY}px);; "
></div>

<style>
  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--bg-color);
    position: absolute;
  }
</style>
