<template>
  <div class="banner" ref="slider">
    <div class="banner_box" ref="sliderGroup">
         <slot></slot>
    </div>
        <div class="label_box">
          <span class="label_list" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
        </div>
  </div>
</template>

<script>
   // import {addClass} from '../../common/js/dom'
    import BScroll from 'better-scroll'

    export default {
      name: 'slider',
      props: {
        loop: {
          type: Boolean,
          default: false
        },
        autoPlay: {
          type: Boolean,
          default: true
        },
        interval: {
          type: Number,
          default: 4000
        }
      },
      data() {
        return {
          dots: [],
          currentPageIndex: 0
        }
      },
      mounted() {
        setTimeout(() => {
         /* this._setSliderWidth()*/
          this._initSlider()
          this._initDots()
        }, 20)
        if (this.autoPlay) {
          this._play()
        }
        window.addEventListener('resize', () => {
          if (!this.slider) {
            return
          }
          this._setSliderWidth(true)
          this.slider.refresh()
        })
      },
      methods:{
        _initSlider() {
          this.slider = new BScroll(this.$refs.sliderGroup, {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: true,
            snapLoop: this.loop,
            snapThreshold: 0.3,
            snapSpeed: 300
          })
          this.slider.on('scrollEnd', () => {
            let pageIndex = this.slider.getCurrentPage().pageX;
            if (this.loop) {
              pageIndex -= 1
            }
            this.currentPageIndex = pageIndex
            if (this.autoPlay) {
              this._play()
            }
          })
          this.slider.on('beforeScrollStart', () => {
              if (this.autoPlay) {
                clearTimeout(this.timer)
              }
          })
        },
        _initDots() {
          this.dots = new Array(this.$refs.sliderGroup.children[0].children.length)
        },
        _play() {
          let pageIndex = this.currentPageIndex + 1
          if (this.loop) {
            pageIndex += 1
          }
          this.timer = setTimeout(() => {
            if (pageIndex == 3){
                pageIndex = 0;
            }
            this.slider.goToPage(pageIndex, 0, 300)
          }, this.interval)
        }
      }
    }
</script>

<style scoped>
  .banner_box {
    overflow: hidden;
    height:232px;
    position: relative;
  }
  .banner{
    padding: 20px;
    background: #fff;
    height: 232px;
  }
  img{
    width: 100%;
    vertical-align: middle;
  }
  .label_box{
    position: relative;
    width: 100%;
    text-align: center;
    bottom: 1.2rem;
    left: 0;
  }
  .label_box .label_list {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    margin-left: 0.1rem;
    display: inline-block;
  }
  .active{
    background-color: #009beb!important;
  }
/*  .banner{
    padding: 20px;
    background: #fff;
  }
  .banner_box {
    overflow: hidden;
    height:252px;
    position: relative;
  }

  .label_box{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0.3rem;
    left: 0;
  }

  .banner{
    padding: 20px;
    background: #fff;
    position: relative;
  }
  .banner_box {
    overflow: hidden;
    height:252px;
    position: relative;
  }*/
</style>
