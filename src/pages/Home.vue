<template>
  <div class="container">
    <!--由于html不区分大小写，所以js中驼峰命名方式在html中要改成短横线链接的形式-->
    <home-header></home-header>
    <div class="content">
      <ul class="cont_ul">
        <list
          v-for="(item, index) in items"
          :price="item.price"
          :title="item.title"
          :key="index">
        </list>
      </ul>
    </div>
  </div>
</template>
<script>
//要导入的子组件
  import HomeHeader from '../components/HomeHeader.vue'
  import List from '../components/List.vue'

  export default {
    data () {
      return {
        items: [
          { price: "129.00", title: "大学" },
          { price: "256.00", title: "中庸" },
          { price: "399.00", title: "论语" },
          { price: "998.00", title: "孟子" },
          { price: "99.00", title: "道德经" },
          { price: "89.00", title: "老子" },
          { price: "188.00", title: "金刚经" },
          { price: "209.00", title: "易筋经" }
        ]
      }
    },
    components: {
      HomeHeader,
      List
    }
  }
</script>
<style>
  .container {
    max-width: 640px;
    margin: 0 auto;
    overflow-x: hidden;
  }
  .cont_ul {
    padding-top: 0.05rem;
    margin: 0 -0.12rem;
  }
  .cont_ul:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }
</style>
