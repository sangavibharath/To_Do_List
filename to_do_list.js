


$(".fa-pencil-square").on("click",function(){
	$("input[type='text']").fadeToggle();
});



$("ul").on("click", "span",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click", "i",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})	
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><i class='fa fa-trash-o' aria-hidden='true'></i><span> "+todoText+" </span> </li>");
	}
})




