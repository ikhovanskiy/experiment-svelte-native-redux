<script>
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/native">native</a>
      </li>
      <li aria-current={$page.url.pathname === "/redux" ? "page" : undefined}>
        <a href="/redux">redux</a>
      </li>
    </ul>
  </nav>
</header>
