<template>
  <main id="clockbody">
    <div class="title">当前时间</div>
      <div id="time">{{time}}</div>
      <div id="date">{{date}}</div>
      <div class="btn-clock">
        <button @click="btnClick">设置闹钟</button>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Clock',
  data() {
    return {
      path: "/set",
      time: "",
      date: ""
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path)
    },
    gettime() {
      setInterval(() => {
        this.time = `
          ${new Date().getHours()>9?new Date().getHours():"0"+new Date().getHours()}:
          ${new Date().getMinutes()>9?new Date().getMinutes():"0"+new Date().getMinutes()}:
          ${new Date().getSeconds()>9?new Date().getSeconds():"0"+new Date().getSeconds()}
        `
        this.date = `
          ${new Date().getFullYear()}/
          ${new Date().getMonth()>9?new Date().getMonth():"0"+new Date().getMonth()}/
          ${new Date().getDate()>9?new Date().getDate():"0"+new Date().getDate()}
        `      
      }, 1000)
    }
  },
  created() {
    this.gettime();    
  },
  beforeDestory() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

  
</script>

<style>
  @import "../../assets/css/clock.css";
</style>