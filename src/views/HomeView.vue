<script setup lang="ts">
import { onMounted, ref } from 'vue'

const h = ref<number | string>(0)
const m = ref<number | string>(0)
const s = ref<number | string>(0)
const date_time = () => {
  const date = new Date()
  h.value = date.getHours()
  if (Number(h.value) < 10) {
    h.value = '0' + h.value
  }
  m.value = date.getMinutes()
  if (Number(m.value) < 10) {
    m.value = '0' + m.value
  }
  s.value = date.getSeconds()
  if (Number(s.value) < 10) {
    s.value = '0' + s.value
  }
  setTimeout(() => date_time(), 1000)
}
onMounted(() => {
  date_time()
})
</script>

<template>
  <figure>
    <div class="face top">
      <p id="s">{{ s }}</p>
    </div>
    <div class="face front">
      <p id="m">{{ m }}</p>
    </div>
    <div class="face left">
      <p id="h">{{ h }}</p>
    </div>
  </figure>
</template>

<style scoped>
@font-face {
  font-family: 'Digital-7';
  src:
    url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.eot?#iefix')
      format('embedded-opentype'),
    url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.woff') format('woff'),
    url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.ttf') format('truetype'),
    url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.svg#Digital-7') format('svg');
  font-weight: normal;
  font-style: normal;
}
::selection {
  background: #333;
}
::-moz-selection {
  background: #111;
}
*,
html {
  margin: 0;
}
body {
  background: #333;
}
figure {
  width: 210px;
  height: 210px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -105px;
  margin-left: -105px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateX(-35deg) rotateY(45deg);
  transform: rotateX(-35deg) rotateY(45deg);
  transition: 2s;
}
figure:hover {
  -webkit-transform: rotateX(-50deg) rotateY(45deg);
  transform: rotateX(-50deg) rotateY(45deg);
}
.face {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-origin: center;
  transform-origin: center;
  background: #000;
  text-align: center;
}
p {
  font-size: 180px;
  font-family: 'Digital-7';
  margin-top: 20px;
  color: #2982ff;
  text-shadow: 0px 0px 5px #000;
  -webkit-animation: color 10s infinite;
  animation: color 10s infinite;
  line-height: 180px;
}
.front {
  -webkit-transform: translate3d(0, 0, 105px);
  transform: translate3d(0, 0, 105px);
  background: #111;
}
.left {
  -webkit-transform: rotateY(-90deg) translate3d(0, 0, 105px);
  transform: rotateY(-90deg) translate3d(0, 0, 105px);
  background: #151515;
}
.top {
  -webkit-transform: rotateX(90deg) translate3d(0, 0, 105px);
  transform: rotateX(90deg) translate3d(0, 0, 105px);
  background: #222;
}

@keyframes color {
  0% {
    color: #2982ff;
    text-shadow: 0px 0px 5px #000;
  }
  50% {
    color: #cc4343;
    text-shadow: 0px 0px 5px #ff0000;
  }
}
@-webkit-keyframes color {
  0% {
    color: #2982ff;
    text-shadow: 0px 0px 5px #000;
  }
  50% {
    color: #cc4343;
    text-shadow: 0px 0px 5px #ff0000;
  }
}
</style>
