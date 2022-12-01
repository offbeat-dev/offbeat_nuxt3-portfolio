import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: "vertical",
});

lenis.on("scroll", ({ scroll, limit }) => {
  console.log({ scroll, limit });
});

function raf() {
  lenis.raf();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default defineNuxtPlugin((nuxtApp) => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide("lenis", lenis);
});
