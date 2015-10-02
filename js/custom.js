$(document).ready(function() {

	// get the data on click 

$('#submit').on('click',function() {


	// check if the word is empty
	if($.trim($('#keyword').val()) != '') {

		
		// hide the error
		$('.error').css('display','none');
		
		var search_word = $('#keyword').val();
		console.log('hello');
		// make an ajax request
		var request =  $.ajax({
			type:"get",
			dataType:"json",
			url: "search.php",
			data: {word : search_word}
		});

		request.done(function(data){

			$('#result-panel').css('display','block');
			$('#word').text(data.data.word);
			$('#word-type').text(data.data.wordtype);
			$('#definition').text(data.data.definition);
		});

	}
	else {
		$('.error').css('display','inline-block').delay(2000).hide('.error');
	}
	
});
	



});