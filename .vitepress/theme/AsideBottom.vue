<template>
  <div class="aside-bottom">
    <div>贡献列表</div>
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.aside-bottom {
  background-color: var(--vp-carbon-ads-bg-color);
  border-radius: 12px;
  padding: 14px;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  flex-direction: column;
}
/* From Uiverse.io by alexruix */
.loader {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 20px auto 10px;
  --c: var(--vp-c-text-1);
}

.loader:before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  animation: loading-bounce 0.5s ease-in-out infinite alternate;
}

.loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 7px;
  width: 45px;
  border-radius: 4px;
  box-shadow: 0 5px 0 var(--c), -35px 50px 0 var(--c), -70px 95px 0 var(--c);
  animation: loading-step 1s ease-in-out infinite;
}

@keyframes loading-bounce {
  0% {
    transform: scale(1, 0.7);
  }

  40% {
    transform: scale(0.8, 1.2);
  }

  60% {
    transform: scale(1, 1);
  }

  100% {
    bottom: 140px;
  }
}

@keyframes loading-step {
  0% {
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
    0 10px 0 var(--c),
    -35px 50px 0 var(--c),
    -70px 90px 0 var(--c);
  }

  100% {
    box-shadow: 0 10px 0 var(--c),
    -35px 50px 0 var(--c),
    -70px 90px 0 var(--c),
    -70px 90px 0 rgba(0, 0, 0, 0);
  }
}
</style>
