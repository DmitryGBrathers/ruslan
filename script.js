$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(1000);
		get_current.show(1000);
	});

	$('#showall').click(function() {
		$('.post').show(1000);
	});
})