<template>
<div>
  <carousel
    :perPageCustom="[[599,1],[959,2],[1263,3]]"
    :autoplay="false"
    :loop="true"
    :autoplay-timeout="4000"
    :centerMode="true"
    :navigation-enabled="true"
    :navigation-prev-label="'〈'"
    :navigation-next-label="'〉'">

    <slide v-for="item in items" v-bind:key="item.id">
        <v-card >
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-text>{{item.text}}</v-card-text>
                <v-card-actions>
                    <v-btn :to="{name:'vote-entryNumber',params:{entryNumber:item.id}}" nuxt color="secondary" block >投票する</v-btn>
                </v-card-actions>
        </v-card>
    </slide>

  </carousel>

</div>

</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
    data: function() {
        return {
          items:[
            {id:1,title:"AAA", text:"aaaaaaaaaaa"},
            {id:2,title:"BBB", text:"bbbbbbbbbbb"},
            {id:3,title:"CCC", text:"ccccccccccc"},
            {id:4,title:"DDD", text:"ddddddddddd"},
            {id:5,title:"EEE", text:"eeeeeeeeeee"},
            {id:6,title:"FFF", text:"fffffffffff"},
            {id:7,title:"GGG", text:"ggggggggggg"},
            {id:8,title:"HHH", text:"hhhhhhhhhhh"},
            {id:9,title:"III", text:"iiiiiiiiiii"},
        ]

        }},

  components: {
    Carousel,
    Slide
  }
}
</script>