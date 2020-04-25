$(function(){
          	function check(father){
          					 			var checkAll = father.find(".checkall");  //全选的input
									    var checkboxs = father.find(".check1"); //所有单选的input
									
									    checkAll.on('ifChecked ifUnchecked',function(event){
									      if(event.type == 'ifChecked'){
									        checkboxs.iCheck('check');
									        father.find("label").css({"color":"#2489C5"});
									      }else{
									        checkboxs.iCheck('uncheck');
									        father.find("label").css({"color":"#798B9C"});
									      }
									    });
									    
									    checkboxs.on('ifChanged',function(event){
									    	$(".checklist li").has(this).find("label").css({"color":"#2489C5"})
									      if(checkboxs.filter(':checked').length == checkboxs.length){
									        checkAll.prop('checked',true);
									    		$(".checklist").has(this).find('li:first').find("label").css({"color":"#2489C5"})
									      }else{
									        checkAll.prop('checked',false);
									    				$(".checklist").has(this).find('li:first').find("label").css({"color":"#798B9C"})
									      }
									      checkAll.iCheck('update');
									    }) 
									    checkboxs.on(' ifUnchecked',function(event){
									    	$(".checklist li").has(this).find("label").css({"color":"#798B9C"})
									    })
						//分项能耗
						//$(".subentry_con .checklist").eq(1).find(".checkall").iCheck('check')
						//$(".subentry_con .checklist").eq(1).find(".check1").iCheck('check')
						
          	}
	          	for( var i=0;i<$(".checklist").length;i++){
	          		check($(".checklist").eq(i))
	          	}
								
           $('.builder-list ul li') .iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%'
           });
			});  