<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.height">
        <a :href="item.link">
          <img :src="item.image" alt srcset />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from "components/common/swiper/index";
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            
        }
    },
    components:{
        Swiper,SwiperItem
    }
}
</script>