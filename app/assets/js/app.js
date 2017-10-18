$(document).ready(function() {

     $('.nav-mobile').on('click',function(){
	     $('.nav-mobile').toggleClass('nav-mobile-close');
	     $("#navigation").toggleClass('show-mobile-nav');
 	});


     var waypoint = new Waypoint({
	  element: document.getElementById('navigation'),
	  handler: function(direction) {

	  	if (direction == 'down') {
		  	$("#navigation").addClass('sticky');
		    $("#hero").addClass('sticky-active');	
	  	}else {
	  		$("#navigation").removeClass('sticky');
		    $("#hero").removeClass('sticky-active');
	  	}
	    
	  }
	})

     var waypoint_image = new Waypoint({
	  element: document.getElementById('quicklaunch'),
	  handler: function(direction) {

	  	if (direction == 'down') {
		  	$('#image-middle').addClass('animation-delay-1 fadeUpImage');
		  	$('#image-top').addClass('animation-delay-3 fadeUpImage');
		  	$('#image-bottom').addClass('animation-delay-5 fadeUpImage');
	  	}
	  }
	})

     $("#quicklaunch, #quicklaunch_middle").on("change",function(x){
     	
     	var source = $(this).data('source');
     	var choice = x.target.value;

     	var imports_value = "<option disabled selected> &#xf097; Select item below</option><option value='http://www.ekonek.com/autoip'> &#xf097; Electronic Import Permit System</option><option value='http://www.ekonek.com/ezts'> &#xf097; Electronic Zone Transfer System</option><option value='http://www.ekonek.com/aipscadc'> &#xf097; Electronic Transit Admission Permit System</option><option value='http://www.ekonek.com/gms'> &#xf097; Gatepass Management System</option><option value='http://www.ekonek.com/tafsweb-v2/'> &#xf097; Trade Automation and Facilitation System</option>";

     	var exports_value = "<option disabled selected> &#xf097; Select item below</option><option value='http://www.ekonek.com/aedspeza'> &#xf097; Automated Export Documentation System</option><option value='http://www.ekonek.com/aedsweb'> &#xf097; Automated Export Documentation System</option><option value='http://www.ekonek.com/aedsclark'> &#xf097; Electronic Export Declaration System</option>";

     	var services_value = "<option disabled selected> &#xf097; Select item below</option><option value='http://www.ekonek.com/e2mweb'> &#xf097; Electronic 2 Mobile</option><option value='http://www.ekonek.com/offline-e2mweb'> &#xf097; Informal Entry Electronic System</option><option value='http://www.ekonek.com/youknow'> &#xf097; VASP Web Reports</option><option value='http://www.ekonek.com/vaspppa'> &#xf097; VASP Prepayment System</option><option value='http://www.ekonek.com/AMS'> &#xf097; Advance Manifest System</option><option value='http://www.ekonek.com/manifest'> &#xf097; eManifest System</option><option value='http://www.ekonek.com/cprs-tracking'> &#xf097; VASP CPRS Tracking</option>";

     	if (choice == 'imports') {
     		if (source == 'quicklaunch') {
     			$("#quicklaunchValue").html(imports_value);	
     		}else {
     			$("#quicklaunchValue_middle").html(imports_value);	
     		}
     	}else if (choice == 'exports') {
     		if (source == 'quicklaunch') {
     			$("#quicklaunchValue").html(exports_value);	
     		}else {
     			$("#quicklaunchValue_middle").html(exports_value);	
     		}
     	}else if (choice == 'services') {
     		if (source == 'quicklaunch') {
     			$("#quicklaunchValue").html(services_value);	
     		}else {
     			$("#quicklaunchValue_middle").html(services_value);	
     		}
     	}
     	
     });

     $("#quicklaunchValue, #quicklaunchValue_middle").on("change",function(x) {
		var redirectWindow = window.open($(this).val(), '_blank');
    	redirectWindow.location;

     })


});
   