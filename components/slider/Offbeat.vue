<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="https://source.unsplash.com/fIq0tET6llw" alt="Sample 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://source.unsplash.com/G85VuTpw6jg" alt="Sample 2" />
    </SplideSlide>
  </Splide>
</template>
<style>
.splide__list {
  height: 50vh;
}

.splide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
