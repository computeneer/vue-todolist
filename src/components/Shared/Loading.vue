<template>
  <div class="loading">
    <span class="animation">U</span>
  </div>
</template>

<script></script>

<style scoped>
.loading {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: #00000084;
  z-index: 99;
  font-size: 6rem;
}

.animation {
  animation-name: animation;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  color: cyan;
}

@keyframes animation {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
