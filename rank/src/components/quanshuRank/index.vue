<template>
    <div id="quanshuRank" class="wapper">
        <div class="rankContainer">
        <div class="topThree">
            <div class="second">
                <li class="headPic"><img class="second_hedapic head_img" src=""></li>
                <strong class="account-second accountNum"></strong>
            </div>
            <div class="first">
                <li class="headPic"><img class="first_hedapic head_img" src=""></li>
                <strong class="account-first accountNum"></strong>
            </div>
            <div class="third">
                <li class="headPic"><img class="third_hedapic head_img" src=""></li>
                <strong class="account-third accountNum"></strong>
            </div>
        </div>
        <div class="center_line">
            <ul>
                <li class="character_1 character">名次</li>
                <li class="character_2 character">个人信息</li>
                <li class="character_3 character">次数</li>
            </ul>
        </div>
        <ul class="rankContent">
            <li class="rankList" v-for="(index,item) in items">
                <img :src="index | rankNum" class="placing">
                <span class="user_info">{{{item.RoleName}}}</span>
                <span class="user_account">{{{item.Count}}}&nbsp;圈</span>
            </li>
            <div class="myRank">我的排名：10000名</div>
        </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                items: [],
            }
        },
        filters:{
                rankNum:function(value){
                    value += 4;
                    return './static/images/'+ value +'.png';
                }
          },
        ready:function(){
                var url = window.location.href;
                var infoArr = url.slice(url.indexOf('?') + 1).split('&');
                var rolenameArr = infoArr[0].split('=');
                var tokenArr = infoArr[1].split('=');
                var rolename = decodeURIComponent(rolenameArr[1]);
                var tokenarr = tokenArr[1].split('#');
                var token = decodeURIComponent(tokenarr[0]);
                this.$root.$data.record = 4;
                this.$http.post('http://172.28.8.120:8099/hmagencyweb/RankInfo/GetRankInfo',{
                    'RoleName':rolename,
                    'Token':token,
                    'RankType':6
                }).then(function(response){
                    if(response.data.State == 0){
                    } else if(response.data.State == 1){
                        var dataTopThree = response.data.Value.splice(0,3);
                        console.log(dataTopThree);
                        document.getElementsByClassName('account-first')[0].innerHTML = dataTopThree[0].Count + '次';
                        document.getElementsByClassName('account-second')[0].innerHTML = dataTopThree[1].Count + '次';
                        document.getElementsByClassName('account-third')[0].innerHTML = dataTopThree[2].Count + '次';
                        document.getElementsByClassName('first_hedapic')[0].src = dataTopThree[0].HeadImageUrl;
                        document.getElementsByClassName('second_hedapic')[0].src = dataTopThree[1].HeadImageUrl;
                        document.getElementsByClassName('third_hedapic')[0].src = dataTopThree[2].HeadImageUrl;
                        var dataMySelf = response.data.Value.pop();
                        if (dataMySelf.Count == 0) {
                            document.getElementsByClassName('myRank')[0].innerHTML = '我的名次：未上榜';
                        } else {
                            document.getElementsByClassName('myRank')[0].innerHTML = '我的名次：' + dataMySelf.Count + '名';
                        }
                        this.$set('items',response.data.Value);
                    }
                })
             }
    }



</script>
