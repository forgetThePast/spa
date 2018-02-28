var fengyuan = fengyuan || {}
fengyuan.wechart = (function(self) {
	var event = function(){
		$('.send').on('click',function(){
			var date = getDate();
			if($('.inputBtn input').val()){
					// 以下的current-name需要去获取登录信息，从而知道当前发送消息的人是谁，这里写死了。。。
				$('.list').append('<li class="lastLi">'+
					'<span class="current-name">李某人</span><span class="date">'+date+'</span>'+
					'<div class="msgBox"></div></li>');
				$('.list li:last').children('.msgBox').html($('.inputBtn input').val());
				$('.inputBtn input').val("");

				if($('.file-select').val()){
					$('.lastLi:last').after('<div class="fileView">'+$('.file-select').get(0).files[0].name+'</div>');
					// 重置file
					$('.file-select').get(0).outerHTML=$('.file-select').get(0).outerHTML
				}else{

				}
			}else{
				$.alert('请输入内容')
			}

			$('.list li:not(:first)').css('margin-top','20px');

			
		})
	};
	var getDate = function(){
		
		var d = new Date();  
		return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
	}
    self.init = function() {
        event()
        getDate()
       
    }
    return self;
})(fengyuan.wechart || {})