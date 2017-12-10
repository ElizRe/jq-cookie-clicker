
var randomMessages = ["clicking is bad for you","aren't you bored yet?","you should be studying"]
var cookieCount = 0;



	$(".cake").click(function() {
		cookieCount += 1;
		$("span").html(cookieCount);
		if (cookieCount%20 == 0) {
		 alert(randomMessages[randomIntFromInterval(0, (randomMessages.length - 1) )]  )}

	});


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}