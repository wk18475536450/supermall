<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import { getHomeMultiData } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  methods: {},
  components: {
    NavBar,
    RecommendView,
    HomeSwiper,
    FeatureView
  },
};
</script>
<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>