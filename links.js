$.getJSON('https://yuushaexa.github.io/web/links.json', function(data) {
   
var regex = new RegExp(data, 'i');
            var output = '';
            var count = 1;
			  $.each(data, function(key, val){
		
      				 output += '<a href="' + val.Link + '"'
				  output += '>' + val.Name + '</a>';
         
				
			  });
			  output += '';
			  $('.information').html(output);         
  })            

    setTimeout(function() {
     $('.information a').each(function(){
     this.href += $('.post-title a').text();
})
     }, 1000);

<script src="https://yuushaexa.github.io/web/dev/relatedPosts.js"</script>
