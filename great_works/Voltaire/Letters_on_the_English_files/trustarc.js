$(document).ready(function(){
    $("<div id='consent_blackbar'></div>").insertAfter("footer");
  });

 var resource = document.createElement('script'); 
 resource.src = "https://consent.truste.com/notice?domain=fordham.edu&country=us&js=nj&noticeType=bb";
resource.crossOrigin = "anonymous";
  var script = document.getElementsByTagName('script')[0];
  script.parentNode.insertBefore(resource, script);
  