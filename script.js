$( document ).ready(function() {
	
	var contRepeticao = 0;
	var idRepeticao = "";
	
    $(".lista_sucessos, .lista_missoes_sucessos").on("click", "li", function(){

		if(idRepeticao == $(this).attr("id")){
			idRepeticao = "";
			return;
		}
	
		var idIndice = $(this).attr("id");
		idIndice = idIndice.split("_");
		
		$(".lista_missoes_sucessos").hide();
		$(this).children().slideToggle("fast");
		
		var idSucesso = "sucessos_"+idIndice[1];
		$("#"+idSucesso).show();
		
		subRepeticao++;
		idRepeticao = $(this).attr("id");
	});
	
	$(".lista_missoes_sucessos li:has(div)").click(function(){
		$(this).children("ul").slideToggle("fast");
	});
	
	$(".cord span").click(function(){
		$(this).select();
		try{
			var ok = document.execCommand('copy');
		}catch(e){
			alert(e);
		}
	});
	
});