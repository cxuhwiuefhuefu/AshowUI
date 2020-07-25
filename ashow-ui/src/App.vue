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
    <as-dialog></as-dialog>

  </div>
</template>

<script>

export default {
  methods: {
    aclick() {
      console.log(111);
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


</style>
