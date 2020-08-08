<template>
  <div id="app">
    
    <!-- 按钮 -->
    <!-- <div class="row">
      <as-button>按钮</as-button>
      <as-button type="primary">按钮</as-button>
      <as-button type="success">按钮</as-button>
      <as-button type="info">按钮</as-button>
      <as-button type="warning">按钮</as-button>
      <as-button type="danger">按钮</as-button>
    </div>
    <div class="row">
      <as-button plain>按钮</as-button>
      <as-button plain type="primary">按钮</as-button>
      <as-button plain type="success">按钮</as-button>
      <as-button plain type="info">按钮</as-button>
      <as-button plain type="warning">按钮</as-button>
      <as-button plain type="danger">按钮</as-button>
    </div>
    <div class="row">
      <as-button icon="search" plain round>按钮</as-button>
      <as-button plain round type="primary">按钮</as-button>
      <as-button plain round type="success">按钮</as-button>
      <as-button plain round type="info">按钮</as-button>
      <as-button plain round type="warning">按钮</as-button>
      <as-button plain round type="danger">按钮</as-button>
    </div>
    <div class="row">
      <as-button plain circle>拆</as-button>
      <as-button plain circle type="primary">拆</as-button>
      <as-button plain circle type="success">拆</as-button>
      <as-button plain circle type="info">拆</as-button>
      <as-button plain circle type="warning">拆</as-button>
      <as-button plain circle type="danger">拆</as-button>
    </div>
     <div class="row">
      <as-button @click="aclick" plain icon="search" circle></as-button>
      <as-button plain icon="edit" circle type="primary"></as-button>
      <as-button plain icon="check" circle type="success"></as-button>
      <as-button plain icon="message" circle type="info"></as-button>
      <as-button plain icon="delete" circle type="warning"></as-button>
      <as-button plain icon="delete" circle type="danger"></as-button>
    </div>
    <div class="row">
      <as-button disabled>按钮</as-button>
      <as-button disabled type="primary">按钮</as-button>
      <as-button disabled type="success">按钮</as-button>
      <as-button disabled type="info">按钮</as-button>
      <as-button disabled type="warning">按钮</as-button>
      <as-button disabled type="danger">按钮</as-button>
    </div> -->




    <!-- 弹出框 -->
    <!-- <as-dialog visible title="溫馨提示">
      <template v-slot:title>
        <h3 style="color: red">我是标题</h3>
      </template>
    </as-dialog> -->

    <!-- <as-dialog visible width="80%" top="200px"></as-dialog> -->

    <!-- <as-button type="primary" @click="visible=true" >按钮</as-button>
    <as-dialog :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <div>
          <as-button type="primary" @click="visible=false">确定</as-button>
          <as-button @click="visible=false">取消</as-button>
        </div>
      </template>
    </as-dialog> -->




    <!-- input组件 -->
    <!-- <div type="as-class">
      <as-input placeholder="请输入用户名" v-model="username" clearable></as-input>
      <as-input placeholder="请输入用户名" type="password" v-model="username" showPassword></as-input>
    </div> -->




    <!-- wsitch组件 -->
    <!-- <as-switch v-model="active"></as-switch>
    <as-switch v-model="active"
               active-color="green"
               inactive-color="red"
               name="username"></as-switch> -->
    


    <!-- <div ref="msgDiv">{{msg}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <button @click="changeMsg">
      Change the Message
    </button> -->




    <!-- radio -->
    <!-- <as-radio label="1" v-model="gender">男</as-radio>
    <as-radio label="0" v-model="gender">女</as-radio> -->


    <!-- radioGroup -->
    <as-radio-group v-model="gender">
      <as-radio label="1">男</as-radio>
      <as-radio label="0">女</as-radio>
    </as-radio-group>




  </div>
</template>


<script>

export default {
  data () {
    return {
      username: 'cmh',
      active: false,

      // msg: 'Hello Vue',
      // msg1: '',
      // msg2: '',
      // msg3: ''

      gender: "1"
    }
  },
  methods: {
    aclick() {
      console.log(111);
    },

    
    changeMsg() {
      this.msg = 'Hello world';
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      })
      this.msg3 = this.$refs.msgDiv.innerHTML;
    }
  }
}
</script>



<style lang="scss" scoped>

.row {
  margin-bottom: 20px;
  .as-button {
    margin-right: 20px;  
  }
}


#app {
  .as-input {
    width: 180px;
  }
}
</style>
