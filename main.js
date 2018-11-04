var allButtons = $('#buttons > span')
for(let i=0; i<allButtons.length ;i++){
	$(allButtons[i]).on('click', function(e){
		allButtons.removeClass('active')
		$(e.currentTarget).addClass('active')
		var index = $(e.currentTarget).index()
		var p = index * -600
		$('#slide-images').css({transform: 'translate('+p+'px)'})
	})
}
