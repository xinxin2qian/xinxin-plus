<template>
  <h1>我是开发调试页面</h1>
  <!-- <xin-button type="info" size="small">我是button组件</xin-button> -->
  <XinButtonGroup>
    <XinButton size='small' @click="hanlderClick"> button </XinButton>
    <XinButton size='small' type='primary'> button </XinButton>
    <XinButton size='small' type='success'> button </XinButton>
    <XinButton size='small' type='danger'> button </XinButton>
    <XinButton size='small' type='warning'> button </XinButton>
    <XinButton size='small' type='info'> button </XinButton>
  </XinButtonGroup>

  <br/>
  <XinButton >按钮默认尺寸</XinButton>
  <XinButton size="medium">按钮中等尺寸</XinButton>
  <XinButton size="small">按钮小尺寸</XinButton>
  <XinButton size="mini">按钮极小尺寸</XinButton>
  <XinButton size="tiny">按钮超小尺寸</XinButton>
  <br/>

  <XinButton plain type="primary">朴素按钮</XinButton>
  <XinButton round type="primary">椭圆</XinButton>
  <XinButton disabled type="primary">禁止</XinButton>
  <XinButton circle type="primary">圆</XinButton>
</template>
<script lang="ts" setup>
const hanlderClick = () => {
  console.log("hanlderClick");
}
</script>