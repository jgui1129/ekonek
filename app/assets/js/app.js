$(document).ready(function() {

     $("#cssload-pgloading").fadeOut("slow");     

     var scroll = new SmoothScroll('a[href*="#"]',{
       speed: 800
     });

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

     var waypoint_hero = new Waypoint({
       element: document.getElementById('homepage-section'),
       handler: function(direction) {
          if (direction == 'down') {
               waypoint_navigation("hero");     
          }  
       },offset: '10%'
     });

     var waypoint_hero_up = new Waypoint({
       element: document.getElementById('homepage-section'),
       handler: function(direction) {
          if (direction == 'up') {
               waypoint_navigation("hero");     
          }  
       },offset: '-40%'
     })
     
     var waypoint_services = new Waypoint({
       element: document.getElementById('services-section'),
       handler: function(direction) {
          if (direction == 'down') {
               waypoint_navigation("services");     
          }  
       },offset: '10%'
     })

     var waypoint_services_up = new Waypoint({
       element: document.getElementById('services-section'),
       handler: function(direction) {
          if (direction == 'up') {
               waypoint_navigation("services");     
          }  
       },offset: '-40%'
     })

     var waypoint_partners = new Waypoint({
       element: document.getElementById('partners-section'),
       handler: function(direction) {
          if (direction == 'down'){
               waypoint_navigation("partners");     
          }
       },offset: '10%'
     })

     var waypoint_partners_up = new Waypoint({
       element: document.getElementById('partners-section'),
       handler: function(direction) {
          if (direction == 'up') {
               waypoint_navigation("partners");     
          }
       },offset: '-40%'
     })

     var waypoint_about = new Waypoint({
       element: document.getElementById('about-us-section'),
       handler: function(direction) {
          if (direction == 'down') {
               waypoint_navigation("about");     
          }  
       },offset: '10%'
     })

     var waypoint_about_up = new Waypoint({
       element: document.getElementById('about-us-section'),
       handler: function(direction) {
          if (direction == 'up') {
               waypoint_navigation("about");     
          }  
       },offset: '-40%'
     })

     var waypoint_download = new Waypoint({
       element: document.getElementById('download-page-section'),
       handler: function(direction) {
          if (direction == 'down') {
               waypoint_navigation("download");     
          }  
       },offset: '10%'
     })

     var waypoint_download_up = new Waypoint({
       element: document.getElementById('download-page-section'),
       handler: function(direction) {
          if (direction == 'up') {
               waypoint_navigation("download");     
          }  
       },offset: '-40%'
     })

     var waypoint_contact = new Waypoint({
       element: document.getElementById('contact-details-section'),
       handler: function(direction) {
          if (direction == 'down') {
               waypoint_navigation("contact");     
          }  
       },offset: '10%'
     })

     var waypoint_contact_up = new Waypoint({
       element: document.getElementById('contact-details-section'),
       handler: function(direction) {
          if (direction == 'up') {
               waypoint_navigation("contact");     
          }  
       },offset: '-40%'
     })
     function waypoint_navigation(section_id){
          $('.nav-link').removeClass('active');

          if (section_id == 'hero') {
               $("#hero-link").addClass('active');
          }else if (section_id == 'services'){
               $("#services-link").addClass('active');
          }else if (section_id == 'partners'){
               $("#partners-link").addClass('active');
          }else if (section_id == 'about'){
               $("#about-us-link").addClass('active');
          }else if (section_id == 'download'){
               $("#download-link").addClass('active');
          }else if (section_id == 'contact'){
               $("#contact-details-link").addClass('active');
          }
     }

     $("#navigation ul li a").on("click",function(x){
          $("#navigation").removeClass('show-mobile-nav');
          $(".nav-mobile").removeClass('nav-mobile-close');

     });


     $("#quicklaunch, #quicklaunch_middle").on("change",function(x){
     	
     	var source = $(this).data('source');
     	var choice = x.target.value;

     	var imports_value = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option value='http://www.ekonek.com/autoip'> &#xf097; Electronic Import Permit System</option><option value='http://www.ekonek.com/ezts'> &#xf097; Electronic Zone Transfer System</option><option value='http://www.ekonek.com/aipscadc'> &#xf097; Electronic Transit Admission Permit System</option><option value='http://www.ekonek.com/gms'> &#xf097; Gatepass Management System</option><option value='http://www.ekonek.com/tafsweb-v2/'> &#xf097; Trade Automation and Facilitation System</option>";

     	var exports_value = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option value='http://www.ekonek.com/aedspeza'> &#xf097; Automated Export Documentation System</option><option value='http://www.ekonek.com/aedsweb'> &#xf097; Automated Export Documentation System</option><option value='http://www.ekonek.com/aedsclark'> &#xf097; Electronic Export Declaration System</option>";

     	var services_value = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option value='http://www.ekonek.com/e2mweb'> &#xf097; Electronic 2 Mobile</option><option value='http://www.ekonek.com/offline-e2mweb'> &#xf097; Informal Entry Electronic System</option><option value='http://www.ekonek.com/youknow'> &#xf097; VASP Web Reports</option><option value='http://www.ekonek.com/vaspppa'> &#xf097; VASP Prepayment System</option><option value='http://www.ekonek.com/AMS'> &#xf097; Advance Manifest System</option><option value='http://www.ekonek.com/manifest'> &#xf097; eManifest System</option><option value='http://www.ekonek.com/cprs-tracking'> &#xf097; VASP CPRS Tracking</option>";

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

     $("#download_forms").on("change",function(x){
          var choice = x.target.value;

          var vasp = "<option disabled selected> &#xf103; Select item below</option><option value='http://www.ekonek.com/E-Konek%20VASP%20Enrollment%20Form.doc'> &#xf097; VASP Enrollment Form</option><option value='http://www.ekonek.com/VASP%20Prepayment%20Training%20Module.pdf'> &#xf097; VASP Prepayment Training Module</option>";

          var e2m = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option disabled>CPRS Forms:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/Exporter%20Profile%20Information.doc'> &#xf097; Exporter</option><option value='http://www.ekonek.com/Importer.doc'> &#xf097; Importer</option><option value='http://www.ekonek.com/Once%20A%20Year%20Importer.doc'> &#xf097; Importer - Once a Year</option><option value='http://www.ekonek.com/Broker.doc'> &#xf097; Broker</option><option value='http://www.ekonek.com/Warehouse%20Operator.doc'> &#xf097; Warehouse Operator</option><option value='http://www.ekonek.com/Surety%20Company.doc'> &#xf097; Surety Company</option><option value='http://www.ekonek.com/Airport%20Warehouse.doc'> &#xf097; Airport Warehouse</option><option value='http://www.ekonek.com/CYCFS.doc'> &#xf097; CYCFS</option><option disabled>-----------------</option><option disabled>Tutorial Videos:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/e2m%20Customs%20System%20Features.avi'> &#xf097; e2m Custom System Features</option><option value='http://www.ekonek.com/e2m%20Customs%20Export%20System.avi'> &#xf097; e2m Custom Export System</option><option value='http://www.ekonek.com/e2m%20Informal%20System.avi'> &#xf097; e2m Informal System</option><option value='http://www.ekonek.com/e2m%20Transshipment%20System.avi'> &#xf097; e2m Transhipment System</option><option disabled>-----------------</option><option disabled>Presentations:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/BOC%20&%20OGAs%20Trade%20Facilitation%20Programs.pdf'> &#xf097; EKonek-CCBi Presentation: BOC & OGAs Trade Facilitation Program</option><option value='http://www.ekonek.com/e2m%20Export%20System%20Presentation.pdf'> &#xf097; e2m Export System Presentation</option><option value='http://www.ekonek.com/e2m%20Import%20Assessment%20System.pdf'> &#xf097; e2m Import Assessment System</option><option disabled>-----------------</option><option disabled>BOL Converter:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/downloads/E-konek%20BOL%20Converter.rar'> &#xf097; EKonek BOL Converted</option><option disabled>-----------------</option><option disabled>BOC Tarif Code Update:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/downloads/untartab20150817.pdf'> &#xf097; August 17, 2015</option><option disabled>-----------------</option><option disabled>Flight Registry:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/downloads/flight_sched/CEBU%20PACIFIC.xlsx'> &#xf097; CebPac - August 14-20, 2017</option><option value='http://www.ekonek.com/downloads/flight_sched/AIR%20ASIA.xlsx'> &#xf097; Air Asia - August 14-20, 2017</option><option value='http://www.ekonek.com/downloads/flight_sched/PAL%20REGISTRY.xlsx'> &#xf097; Foreign Airlines - August 14-20, 2017</option><option value='http://www.ekonek.com/downloads/flight_sched/ASIANA%20AIRLINES.xlsx'> &#xf097; Asiana Airlines - August 2017</option>";

          var aeds = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option disabled>AEDS WEB:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/AEDS.pps'> &#xf097; AEDS Presentation</option><option value='http://www.ekonek.com/Automated%20Export%20Documentation%20System%20(AEDS)%20Clark.wmv'> &#xf097; AEDS for Clark Video Tutorial</option><option value='http://www.ekonek.com/AEDS%20for%20PEZA%20at%20SBMA%20Locators.avi'> &#xf097; AEDS for PEZA at SBMA Locators</option><option value='http://www.ekonek.com/AEDS%20for%20PEZA%20at%20SBMA%20Locators.avi'>AEDS for PEZA at SBMA Locators</option><option disabled>-----------------</option><option disabled>PEZA Expanded AEDS:</option><option disabled>-----------------</option><option value='http://www.ekonek.com/PEZA%20-%20Ekonek%20Expanded%20AEDS(pdf).pdf'> &#xf097; PEZA Expanded AEDS Presentation</option><option value='http://www.ekonek.com/Prepayment,%20LOEs,%20Lodgment%20of%20ED(pdf).pdf'> &#xf097; Prepayment, LOEs, Lodgment of ED</option><option disabled>-----------------</option><option disabled> &#xf101; Requirements:</option><option value='http://www.ekonek.com/E-Konek%20VASP%20Enrollment%20Form.doc'> &#xf097; E-Konek VASP Enrollment Form</option><option value='http://www.ekonek.com/PEZA-AEDS%20-%20Annexes.doc'> &#xf097; PEZA Expanded AEDS Annexes</option><option value='http://www.ekonek.com/Annex%20A_List%20of%20Exportables.xls'> &#xf097; List of Exportables</option><option disabled>-----------------</option><option disabled> &#xf101; Instructional Videos:</option><option value='http://www.ekonek.com/PEZA%20EXPANDED%20AEDS%20%20log%20in.avi'> &#xf097; Login</option><option value='http://www.ekonek.com/PEZA%20EXPANDED%20AEDS%20%20change%20password.avi'> &#xf097; Change Password</option><option value='http://www.ekonek.com/PEZA%20EXPANDED%20AEDS%20prepayment.avi'> &#xf097; Prepayment</option><option value='http://www.ekonek.com/PEZA%20EXPANDED%20AEDS%20list%20of%20exportables.avi'> &#xf097; List of Exportables</option><option value='http://www.ekonek.com/PEZA%20EXPANDED%20AEDS%20ed%20lodgment.avi'> &#xf097; ED Lodgement</option>";

          var ppa = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option value='http://www.ekonek.com/VASP_Pre-Payment_Guidelines.pdf'> &#xf097; VASP Pre-Payment Guidelines</option>";

          var ezts = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option value='http://www.ekonek.com/web/content/Annex%20A%20-%20eZTS.doc'> &#xf097; Annex A- eZTS</option><option value='http://www.ekonek.com/web/content/ezts-intrazone%20User%20Manual.pdf'> &#xf097; eZTS – Intrazone User Manual</option><option value='http://www.ekonek.com/web/content/eZTS-interzone%20User%20Manual%20.pdf'> &#xf097; eZTS - Interzone User Manual</option><option value='http://www.ekonek.com/web/content/Creation%20of%20PEZA%20PPA%20-%20ELSE%20&%20Peza%20Locators.pdf'> &#xf097; Creation of PEZA PPA - ELSE & Peza Locators</option>";


          var balikbayan = "<option disabled selected> &#xf103; Select item below</option><option disabled>-----------------</option><option value='http://www.ekonek.com/web/content/eBalikbayan_Info_Sheet.pdf'> &#xf097; eBalikbayan Information Sheet</option><option value='http://www.ekonek.com/web/content/eBalikbayan_Info_Details.pdf'> &#xf097; eBalikbayan Information Details</option><option value='http://www.ekonek.com/web/content/eBalikbayan_Application_Form_Consol.pdf'> &#xf097; Application Form for Consolidators</option><option value='http://www.ekonek.com/web/content/eBalikbayan_Cert_Compliance.pdf'> &#xf097; Certificate of Compliance</option><option value='http://www.ekonek.com/web/content/BALIKBAYAN_EXCEL_FORMAT.xlsx'> &#xf097; Balikbayan Excel Format for Deconsolidators</option>";

          if (choice == 'vasp') {
               $("#download_forms_target").html(vasp);
          }else if (choice == 'e2m') {
               $("#download_forms_target").html(e2m);
          }else if (choice == 'aeds'){
                $("#download_forms_target").html(aeds);
          }else if (choice == 'ppa') {
               $("#download_forms_target").html(ppa);
          }else if (choice == 'ezts'){
                $("#download_forms_target").html(ezts);
          }else if (choice == 'balikbayan') {
                $("#download_forms_target").html(balikbayan);
          }
     });

     $("#download_forms_target").on("change",function(){
          var redirectWindow = window.open($(this).val(), '_blank');
          redirectWindow.location;

     })


});
   