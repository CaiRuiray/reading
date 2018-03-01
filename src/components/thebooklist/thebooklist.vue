<template>
    <div class="book_box">
      <headertext>
      </headertext>
      <knowledge></knowledge>
    </div>
</template>

<script>
  import headertext from '../../components/headertext/knowledge.vue'
  import knowledge from '../../components/rhecontentlist/knowledge.vue'
  export default {
    name: "thebooklist",
    components:{
      headertext,
      knowledge
    }
  }
</script>

<style scoped>
  .book_box {
    background: #fff;
  }

</style>
