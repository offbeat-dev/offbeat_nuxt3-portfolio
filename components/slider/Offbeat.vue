<script setup lang="ts">
const onMove = (splide) => {
  const { Layout, Move, Direction, Controller } = splide.Components;
  const end = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min((splide.index + 1) / end, 1);
};
const onDragging = (splide) => {
  const { Layout, Move, Direction, Controller } = splide.Components;
  const position = Direction.orient(Move.getPosition());
  const base = Layout.sliderSize() - Layout.listSize();
  const rate = position / base;
  const adjustedRate = Math.min(rate, 1);
  console.log(position);
  //console.log(splide.Components.Elements.slides[1].offsetLeft); // 0-1
};
const onAutoplayPlaying = (splide, rate) => {
  // console.log(rate); // 0-1
};
</script>
<template>
  <Splide
    aria-label="My Favorite Images"
    @splide:autoplay:playing="onAutoplayPlaying"
    @splide:dragging="onDragging"
    @splide:move="onMove"
    :options="{
      autoplay: false,
      type: 'loop',
      gap: 20,
      perPage: 1,
      height: '50vh',
      fixedWidth: '50vh',
      pagination: false,
      arrows: false,
      cover: true,
    }"
  >
    <SplideSlide>
      <CardOffbeat />
      <!-- <img src="https://source.unsplash.com/fIq0tET6llw" alt="Sample 1" /> -->
    </SplideSlide>
    <SplideSlide>
      <CardOffbeat />
    </SplideSlide>
    <SplideSlide>
      <CardOffbeat />
    </SplideSlide>
    <SplideSlide>
      <CardOffbeat />
    </SplideSlide>
  </Splide>
</template>
<style>
.splide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
