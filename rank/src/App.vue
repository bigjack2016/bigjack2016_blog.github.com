<template>
    <div id="fade"></div>
    <div id="app">
        <div class="rankBody">
        <div id="return_container_button"></div>
        <div id="header">
            <img src="../static/images/flower_left.png" class="flower_left">
            <img src="../static/images/rank_head_pic.png" class="rank_word">
            <img src="../static/images/flower_right.png" class="flower_right">
        </div>
        <div class="container">
            <div class="left_sidebar">
                <a class="app-button" v-link="{path:'/winRank'}" v-on:click="activeChange(1)">
                    <img v-bind:class="record==1?'active_img':''" v-bind:src="record==1?picArrActive[0]:picArr[0]" @touchstart="dd($event)" @touchend="dd($event)"/>
                </a>
                <a class="app-button" v-link="{path:'/zmRank'}" v-on:click="activeChange(2)">
                    <img :class="record==2?'active_img':''" v-bind:src="record==2?picArrActive[1]:picArr[1]" @touchstart="dd($event)" @touchend="dd($event)"/>
                </a>
                <a class="app-button" v-link="{path:'/bzbRank'}" v-on:click="activeChange(3)">
                    <img :class="record==3?'active_img':''" v-bind:src="record==3?picArrActive[2]:picArr[2]" @touchstart="dd($event)" @touchend="dd($event)"/>
                </a>
                <a class="app-button" v-link="{path:'/quanshuRank'}" v-on:click="activeChange(4)">
                    <img :class="record==4?'active_img':''" v-bind:src="record==4?picArrActive[3]:picArr[3]" @touchstart="dd($event)" @touchend="dd($event)"/>
                </a>
                <a class="app-button" v-link="{path:'/mbRank'}" v-on:click="activeChange(5)">
                    <img :class="record==5?'active_img':''" v-bind:src="record==5?picArrActive[4]:picArr[4]" @touchstart="dd($event)" @touchend="dd($event)"/>
                </a>
            </div>
            <div class="right_sidebar">
                <router-view></router-view>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      picArr:['./static/images/winBlue.png','./static/images/zmBlue.png','./static/images/bzbBlue.png','./static/images/qsBlue.png','./static/images/mbBlue.png'],
      picArrActive:['./static/images/winYellow.png','./static/images/zmYellow.png','./static/images/bzbYellow.png','./static/images/qsYellow.png','./static/images/mbYellow.png'],
      record:1
    }
  },
  methods:{
    activeChange:function(num){
        this.record = num;
        this.$nextTick(function(){
            document.querySelector(".right_sidebar").scrollTop = 0;
        })
    },
    dd:function(){
        var string = event.target.src;
        var str = string.split('/')[string.split('/').length-1];
        var arr = str.split("_");
        if(arr.length == 1){
            event.target.src = "./static/images/down_" + arr[arr.length-1];

        }else{
            event.target.src = "./static/images/" + arr[arr.length-1];
        }
    }
  }
}

</script>

<style lang='sass'>
    @import "./../static/css/base.css";
    @import "./../static/scss/function.scss";
    @import "./../static/scss/style.scss";
</style>
