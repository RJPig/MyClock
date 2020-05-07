<template>
  <div id="clockset">
    <div>
      <div class="set-title">闹钟设置</div>
    </div>
    <div class="set-main">
      <div>时间设置</div>
      <div class="settime">
        <div class="timeitem">
          <input type="text" placeholder="时" id="hour">时
        </div>
        <div class="timeitem">
          <input type="text" placeholder="分" id="minute">分
        </div>
      </div>
      <div class="music">
        <div>铃声</div>
        <div class="file">
          <input type="file" accept=".mp3" id="file" onchange="onInputFilePath()">
          <audio src="" preload="auto" id="audio" controls></audio>
        </div>
      </div>
    </div>
    <div class="set-bottom">
      <button @click="backtoclock">取消</button>
      <button id="beginclock">开始</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data() {
    return {
      path: '/clock'
    }
  },
  methods: {
    backtoclock() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  @import "../../assets/css/set.css";
</style>