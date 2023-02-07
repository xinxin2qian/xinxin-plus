<template>
  <h1>我是开发调试页面</h1>
  <!-- <xin-button type="info" size="small">我是button组件</xin-button> -->
  <xin-button-group>
    <xin-button size="small" @click="hanlderClick"> button </xin-button>
    <xin-button size="small" type="primary"> button </xin-button>
    <xin-button size="small" type="success"> button </xin-button>
    <xin-button size="small" type="danger"> button </xin-button>
    <xin-button size="small" type="warning"> button </xin-button>
    <xin-button size="small" type="info"> button </xin-button>
  </xin-button-group>

  <br />
  <xin-button>按钮默认尺寸</xin-button>
  <xin-button size="medium">按钮中等尺寸</xin-button>
  <xin-button size="small">按钮小尺寸</xin-button>
  <xin-button size="mini">按钮极小尺寸</xin-button>
  <xin-button size="tiny">按钮超小尺寸</xin-button>
  <br />

  <xin-button plain type="primary">朴素按钮</xin-button>
  <xin-button round type="primary">椭圆</xin-button>
  <xin-button disabled type="primary">禁止</xin-button>
  <xin-button circle type="primary">圆</xin-button>
</template>
<script lang="ts" setup>
  const hanlderClick = () => {
    // console.log('hanlderClick');
    // const name = 'xinxinqian';
  };
</script>
