<template>
  <div>
      <Headertext slot="headertext">
           <slot name="headertext"></slot>
      </Headertext>
      <Demandlist></Demandlist>
  </div>
</template>

<script>
    import Headertext from '../../components/headertext/headertext'
    import Demandlist from '../../components/rhecontentlist/Demandlist'
    export default {
        name: "needtocustomize",
          components:{
           Headertext,
           Demandlist
        }
    }
</script>

<style scoped>

  .demand_content{
     padding: 20px;
    border-bottom: 0.013333rem solid #ececec;
  }
  .demand_content h3{
     font-size: 22px;
     line-height: 56px;
  }
  .demand_content .thebudget{
    display: flex;
    font-size: 16px;
  }
  .demand_content .thebudget{
    display: flex;
    font-size: 16px;
  }
  .demand_content .thebudget div{
    margin-right: 10px;
    border: 0.013333rem solid #fe5521;
  }
  .demand_content .thebudget .buget{
    background: #fe5521;
    color: white;
    padding: 10px 20px;
    display: inline-block;
  }
  .money{
    padding: 30px 20px;
  }
  .demand_content .thebudget .classics{
    border-radius: 0.1rem;
    background: #e4eff9;
    margin-left: 0.3rem;
    font-size: 0.213333rem;
    color: #666;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    padding: 2px;
  }
  .demand_content .thebudget div span{
    border-right: none;
    font-size: 16px;
  }
  .describe{
    display: flex;
    font-size: 18px;
    line-height: 56px;
    color: #999999;
  }
  .describe div{
     margin-right: 20px;
  }
</style>
