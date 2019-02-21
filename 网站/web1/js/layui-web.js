//由于模块都一次性加载，因此不用执行 layui.use() 来加载对应模块，直接使用即可：
;!function(){
  var layer = layui.layer
  //layer.msg('Hello World');


  //日期
  var laydate = layui.laydate;
    //执行一个laydate实例
  laydate.render({
    elem: '#Sr_date' //指定元素
  });

}();