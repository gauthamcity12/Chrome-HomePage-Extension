$(document).ready(function(){
    $('div.hidden').fadeIn(700).removeClass('hidden');
});

$('#inputtext').keypress(function(e){
    if(e.which == 13){
    	alert('You pressed enter!');
        $('#inputtext').click();
    }
});

$('#inputtext').click(function(){
	var location = "http://www.google.com/search?q=" + document.getElementById('#inputtext').value;
	window.location.replace(location);
});

chrome.identity.getProfileUserInfo(function(userInfo){
	var name = userInfo.email;
	document.getElementById("user").innerHTML = name;
});