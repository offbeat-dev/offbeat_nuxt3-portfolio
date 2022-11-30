<template>
  <div class="card">
    <div class="rainbow"></div>
  </div>
</template>
<style scoped>
.card {
  --angle: 0deg;
  --angle-rot: 0deg;
  --start-offset: 25deg;
  --border-size: 2px;
  --card-color: #fff;
  --card-border-color: #ddd;

  margin: 50px;
  width: 400px;
  height: 300px;
  backdrop-filter: blur(29px);
  background: conic-gradient(
    from var(--angle-rot),
    #57eb64,
    #0d63f8,
    #57eb64,
    #0d63f8,
    #57eb64
  );
  animation: rotateDeg 3s linear infinite;
  border-radius: 20px;
}

.rainbow {
  width: 400px;
  height: 300px;
  cursor: pointer;
  border-radius: 20px;
  padding: 2rem;
  margin: auto;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 1.5em;

  border: var(--border-size) solid transparent;

  /* Paint an image in the border */
  background-image: linear-gradient(
      to right,
      var(--card-color),
      var(--card-color)
    ),
    conic-gradient(
      from calc(var(--angle) * 0.01 + var(--start-offset)),
      transparent 0deg var(--angle),
      var(--card-border-color) var(--angle) 360deg
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.rainbow:hover {
  animation: rotateIn 1s linear normal 0s 1 forwards;
  border-color: transparent;
}
.rainbow:not(:hover) {
  border-color: #ddd;
  transition: border-color 0.5s ease-in-out;
  animation: rotateOut 1s linear normal 0s 1 forwards;
}

/* Animate when Houdini is available */
@supports (background: paint(houdini)) {
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  @property --angle-rot {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes rotateDeg {
    0% {
      --angle-rot: 0deg;
    }
    100% {
      --angle-rot: 360deg;
    }
  }

  @keyframes rotateOut {
    0% {
      --angle: 360deg;
    }
    50% {
      --angle: 180deg;
    }
    100% {
      --angle: 0deg;
    }
  }

  @keyframes rotateIn {
    0% {
      --angle: 0deg;
    }
    50% {
      --angle: 180deg;
    }
    100% {
      --angle: 360deg;
    }
  }
}
</style>
