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
     $(&#39;.information a&#39;).each(function(){
     this.href += $(&#39;.post-title a&#39;).text();
})
     }, 1000);
