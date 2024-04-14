<script lang="ts">
  import { StartColors } from "$lib/enum";
  import {
    setColor1,
    setColor2,
    setColor3,
    setColor4,
  } from "$lib/store/actions/appActions";
  import Dot from "../../components/Dot.svelte";
  import afterFrame from "afterframe";
  import { store } from "../../lib/store/config";
  import { onMount } from "svelte";

  let color1 = StartColors.COLOR_1;
  let color2 = StartColors.COLOR_2;
  let color3 = StartColors.COLOR_3;
  let color4 = StartColors.COLOR_4;

  $: countDots = 1000;
  $: countDotsArr = new Array(countDots);

  let measured = "0";

  const measure = () => {
    function measureInteraction(interactionName?: string) {
      performance.mark(interactionName + " start");

      return {
        end() {
          performance.mark(interactionName + " end");
          const measure = performance.measure(
            interactionName + " duration",
            interactionName + " start",
            interactionName + " end"
          );
          measured = Math.floor(measure.duration) + " ms";
        },
      };
    }
    const interaction = measureInteraction();
    afterFrame(() => {
      interaction.end();
    });
  };

  onMount(() => {
    measure();
  });
</script>

<p>Redux</p>
<input
  type="color"
  name=""
  id=""
  on:change={() => {
    measure();
    store.dispatch(setColor1(color1));
  }}
  bind:value={color1}
/>
<input
  type="color"
  name=""
  id=""
  on:change={() => {
    measure();
    store.dispatch(setColor2(color2));
  }}
  bind:value={color2}
/>
<input
  type="color"
  name=""
  id=""
  on:change={() => {
    measure();
    store.dispatch(setColor3(color3));
  }}
  bind:value={color3}
/>
<input
  type="color"
  on:change={() => {
    measure();
    store.dispatch(setColor4(color4));
  }}
  bind:value={color4}
/>

<input type="number" bind:value={countDots} />
<p>{measured}</p>
<div class="wrapper">
  {#each countDotsArr as countDots}
    <Dot color={$store.app.colors.color1} />
    <Dot color={$store.app.colors.color2} />
    <Dot color={$store.app.colors.color3} />
    <Dot color={$store.app.colors.color4} />
  {/each}
</div>
