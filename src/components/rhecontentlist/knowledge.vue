<template>
  <div class="book_list_box">
    <div class="book_list">
      <div class="book_list_lf">
        <div class="book">
          <img src="../../common/image/lf1.png">
          <div class="book_hint">
            <div class="float-left">20:00</div>
            <div class="float-right">
              <img src="../../common/image/lf1.png">
            </div>
          </div>
        </div>
      </div>
      <div class="book_list_rf">
        <div class="book_title hide1">解忧杂货店</div>
        <div class="book_text hide2">僻静的街道旁有一家杂货店，只要写下烦恼投进投信口第二天就会在牛奶箱里得到回答。</div>
        <div class="book_money">
          <div class="float-left">
            <span class="money">￥100</span>
            <span class="book_label">婚姻</span>
          </div>
          <div class="float-right">
            试听
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped>
  .book_list_box {
    padding: 10px 15px;
    border-bottom: #ececec 1px solid;
  }
  .book_list {
    overflow: hidden;
  }
  .book_list_lf {
    width: 23%;
    position: relative;
    float: left;
    height: 120px;
  }
  .book_list_lf .book {
    border: 1px solid #e5e5e5;
    padding: 0.1rem;
    background: #fff;
  }

  .book_list_lf .book {
    border: 1px solid #e5e5e5;
    padding: 0.1rem;
    background: #fff;
  }
  .book_list_lf .book {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  .book_hint {
    position: absolute;
    left: 0;
    bottom: 0.1rem;
    width: 100%;
    /*  background-image: url("../../common/image/book_hinr.png");*/
    height: 2.8rem;
    color: #fff;
  }
  .book_hint .float-left {
    padding-left: 0.3rem;
    margin-top: 1.65rem;
    font-size: 0.6rem;
  }
  .book_hint .float-left {
    padding-left: 0.3rem;
    margin-top: 1.65rem;
    font-size: 0.6rem;
  }
  .float-left {
    float: left;
  }
  .book_hint .float-right {
    padding-right: 0.3rem;
    margin-top: 1.3rem;
  }
  .book_hint .float-right {
    padding-right: 0.3rem;
    margin-top: 1.3rem;
  }
  .float-right {
    float: right;
  }
  .book_hint .float-right img {
    width: 0.9rem;
  }
  .book_list_rf {
    width: 75%;
    margin-left: 2%;
    float: left;
    position: relative;
    height: 1.5rem;
  }
  .book_title {
    font-size: 22px;
  }
  .hide1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .book_text {
    font-size: 16px;
    color: #999999;
  }
  .hide2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .book_money {
    font-size: 16px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .book_money .float-left {
    margin-top: 5px;
    color: #666;
  }
  .float-left {
    float: left;
  }
  .book_money .float-left .money {
    color: #ff3333;
    font-size: 18px;
  }
  img, span, i {
    vertical-align: middle;
  }
  .book_label {
    padding: 0.1rem 0.1rem;
    border-radius: 0.1rem;
    background: #e4eff9;
    margin-left: 0.3rem;
    font-size: 16px;
    color: #666;
  }
  .book_money .float-right {
    width:60px;
    height: 30px;
    line-height: 30px;
    border: #1785da 1px solid;
    border-radius: 0.2rem;
    text-align: center;
    color: #1785da;
  }
</style>
