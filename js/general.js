(function() {
         	var formWrap = document.getElementById( 'fs-form-wrap' );
         
         	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
         		new SelectFx( el, {
         			stickyPlaceholder: false,
         			onChange: function(val){
         				document.querySelector('span.cs-placeholder').style.backgroundColor = val;
         			}
         		});
         	} );
         
         	new FForm( formWrap, {
         		onReview : function() {
         			classie.add( document.body, 'overview' ); // for demo purposes only
         		}
         	} );
         })();
		 
		 
		 
		 
		     document.body.style.backgroundColor = "#27ae60 "; 
                    
         $("#third :input").click(function()  {              
         
         
         
         });
         
         
                    
         $(document).click(function()  {
          
          bgswap();
         
            test();
      
          
         });
                    
         $(document).keyup(function(event){
          if(event.keyCode == 13){
             bgswap();
     
          }
         });  
                    
                                 
         function bgswap(){
		
          
           if ($("#first").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#27ae60 ";
         document.body.style.backgroundColor = "#27ae60 ";
         
         var image = document.getElementById('image');
            image.src = "img/ff01.png";
         
         }
         
          
         if ($("#second").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#f1c510";
         var image = document.getElementById('image');
            image.src = "img/ff04.png";
         
         
         }
         
         if ($("#third").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#f59e16";
         
         var image = document.getElementById('image');
            image.src = "img/ff02.png";
         }    
         if ($("#fourth").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#c23d30";
         var image = document.getElementById('image');
            image.src = "img/ff05.png";
         }    
              if ($("#fifth").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#27ae60";
         
         var image = document.getElementById('image');
            image.src = "img/ff03.png";
         }  
              if ($("#six").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#f1c510";
         var image = document.getElementById('image');
            image.src = "img/ff07.png";
         }  
         if ($("#seven").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#f59e16";
         var image = document.getElementById('image');
            image.src = "img/ff06.png";
         }  
         if ($("#eight").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#c23d30";
         var image = document.getElementById('image');
            image.src = "img/ff09.png";
         }  
         if ($("#nine").hasClass("fs-current")) {
         document.body.style.backgroundColor = "#27ae60";
         var image = document.getElementById('image');
            image.src = "img/ff08.png";
         }  
		
		     
         }
         
		//initialize the select inputs. Getting data from ajax call (see ajax folder, one file for every tag category) 
		 
 $("#Profession").select2({
   tags: true,
             placeholder: "Wähle deinen Beruf",
           tokenSeparators: [','],
  ajax: {
    url: "ajax/professions.php",
    dataType: 'json',
    data: function(params) {
      return {
        q: params.term, // search term
        page: params.page
      };
    },
    processResults: function(data, params) {
      var data = $.map(data, function(obj) {
        obj.id = obj.id;
        obj.text = obj.tag;
        return obj;
      });
      // parse the results into the format expected by Select2
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data, except to indicate that infinite
      // scrolling can be used
      params.page = params.page || 1;

      return {
        results: data,
        pagination: {
          more: (params.page * 30) < data.total_count
        }
      };
    },
    cache: true,
	  tags: true
  },
  escapeMarkup: function(markup) {
    return markup;
  }, // let our custom formatter work


});



 $("#Hobby").select2({
   tags: true,
             placeholder: "Wähle deine Sprachen",
           tokenSeparators: [','],
  ajax: {
    url: "ajax/hobby.php",
    dataType: 'json',
    data: function(params) {
      return {
        q: params.term, // search term
        page: params.page
      };
    },
    processResults: function(data, params) {
      var data = $.map(data, function(obj) {
        obj.id = obj.id;
        obj.text = obj.tag;
        return obj;
      });
      // parse the results into the format expected by Select2
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data, except to indicate that infinite
      // scrolling can be used
      params.page = params.page || 1;

      return {
        results: data,
        pagination: {
          more: (params.page * 30) < data.total_count
        }
      };
    },
    cache: true,
	  tags: true
  },
  escapeMarkup: function(markup) {
    return markup;
  }, // let our custom formatter work


});

 $(".food").select2({
      tags: true,
             placeholder: "Wähle deine Lieblingsessen",
           tokenSeparators: [','],
  ajax: {
    url: "ajax/food.php",
    dataType: 'json',
    data: function(params) {
      return {
        q: params.term, // search term
        page: params.page
      };
    },
    processResults: function(data, params) {
      var data = $.map(data, function(obj) {
        obj.id = obj.id;
        obj.text = obj.tag;
        return obj;
      });
      // parse the results into the format expected by Select2
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data, except to indicate that infinite
      // scrolling can be used
      params.page = params.page || 1;

      return {
        results: data,
        pagination: {
          more: (params.page * 30) < data.total_count
        }
      };
    },
    cache: true,
	  tags: true
  },
  escapeMarkup: function(markup) {
    return markup;
  }, // let our custom formatter work


});

 $(".languages").select2({
     tags: true,
             placeholder: "Wähle deine Sprachen",
           tokenSeparators: [','],
  ajax: {
    url: "ajax/languages.php",
    dataType: 'json',
    data: function(params) {
      return {
        q: params.term, // search term
        page: params.page
      };
    },
    processResults: function(data, params) {
      var data = $.map(data, function(obj) {
        obj.id = obj.id;
        obj.text = obj.tag;
        return obj;
      });
      // parse the results into the format expected by Select2
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data, except to indicate that infinite
      // scrolling can be used
      params.page = params.page || 1;

      return {
        results: data,
        pagination: {
          more: (params.page * 30) < data.total_count
        }
      };
    },
    cache: true,
	  tags: true
  },
  escapeMarkup: function(markup) {
    return markup;
  }, // let our custom formatter work


});
 $(".city").select2({
        tags: true,
             placeholder: "Wähle deine Stadt",
           tokenSeparators: [','],
  ajax: {
    url: "ajax/citys.php",
    dataType: 'json',
    data: function(params) {
      return {
        q: params.term, // search term
        page: params.page
      };
    },
    processResults: function(data, params) {
      var data = $.map(data, function(obj) {
        obj.id = obj.id;
        obj.text = obj.tag;
        return obj;
      });
      // parse the results into the format expected by Select2
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data, except to indicate that infinite
      // scrolling can be used
      params.page = params.page || 1;

      return {
        results: data,
        pagination: {
          more: (params.page * 30) < data.total_count
        }
      };
    },
    cache: true,
	  tags: true
  },
  escapeMarkup: function(markup) {
    return markup;
  }, // let our custom formatter work


});
   $(".gender").select2({
        
             placeholder: "Wähle dein Geschlecht",
  minimumResultsForSearch: Infinity
         })


		 
		 
var elem = document.querySelector('.js-switch');
var init = new Switchery(elem, { color:'#27ae60'});


var changeCheckbox = document.querySelector('.js-switch')
  , changeField = document.querySelector('.js-check-change-field');

changeCheckbox.onchange = function() {
  changeField.innerHTML = changeCheckbox.checked;
  
  if(changeCheckbox.checked == true ){
   changeField.innerHTML = 'Weiblich';
  }
if(changeCheckbox.checked == false ){
     changeField.innerHTML = 'Männlich';
  }
};