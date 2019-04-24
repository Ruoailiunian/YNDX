
//由于模块都一次性加载，因此不用执行 layui.use() 来加载对应模块，直接使用即可：
;!function(){
  var layer = layui.layer
 // layer.msg('Hello World');
  //layer.msg('Hello World');
  //
  


  //日期
  var laydate = layui.laydate;
    //执行一个laydate实例
  laydate.render({
    elem: '#Sr_date' //指定元素
  });

  $(function(){
  	$('.qdxx').click(function(){
  		layer.open({
  		type:1,
	  	title:'填写信息',
	  	btn:['提交','取消'],
	  	content:$('#layuialert'),
	  	shade:0.3,
	  	shadeClose:true,
	  	anim: 2,
	  	area: '500px',
	  })
  	})
  })

}();