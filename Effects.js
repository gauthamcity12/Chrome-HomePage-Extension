$(document).ready(function(){
    $('div.hidden').fadeIn(700).removeClass('hidden');
});

$('#inputtext').keydown(function(e){
	console.log("here");
	alert('key' + e.which);
	$('#inputtext').focus();
    if(e.which === 13){
    	alert('You pressed enter!');
        $('#inputtext').click();
    }
});

$('#searchbutton').click(function(){
	var location = "http://www.google.com/search?q=" + document.getElementById('#inputtext').value;
	window.location.replace(location);
	alert("you got it");
});

chrome.identity.getProfileUserInfo(function(userInfo){
	var name = userInfo.email;
	document.getElementById("user").innerHTML = name;
});