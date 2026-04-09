<template>
  <div class="aside-wrapper">
    <div class="aside-bottom">
      <div>贡献列表</div>
      <div class="loader"></div>
    </div>

    <!-- 主站宣传横幅 -->
    <a href="https://bullm.cn/" target="_blank" class="main-site-banner">
      <div class="banner-content">
        <div class="banner-title">牛明工作室</div>
        <div class="banner-desc">探索更多硬件模块</div>
      </div>
      <div class="banner-arrow">→</div>
    </a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.aside-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

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

/* 主站宣传横幅样式 */
.main-site-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-3) 100%);
  color: #fff !important;
  border-radius: 12px;
  padding: 16px 14px 14px;
  text-decoration: none !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.main-site-banner:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.banner-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
}

.banner-desc {
  font-size: 12px;
  opacity: 0.9;
  line-height: 1.4;
}

.banner-arrow {
  font-size: 18px;
  font-weight: bold;
  opacity: 0.8;
  transition: transform 0.2s ease;
}

.main-site-banner:hover .banner-arrow {
  transform: translateX(4px);
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
