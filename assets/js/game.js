var wins = 0;
var losses = 0;
var targetNumber;
var counter = 0;
var rupeeValues = [];

//array with four elements to run for loop four times
var rupeeQuantity = [1, 2, 3, 4];


// The player will be shown a random number at the start of the game.
targetNumber = Math.floor((Math.random() * 101) + 19);
$("#price").text("$ " + targetNumber);

$("#budget").text("$ " + counter);

// Generate four random numbers
for (var i = 0; i < rupeeQuantity.length; i++) {
	var newValue = Math.floor((Math.random() * 11) + 1);
	rupeeValues.push(newValue);
}

//Assign one random number to each crystal
$(".rupeeImage").each(function(index, item){
	$(item).attr("data-rupee-value", rupeeValues[index]);
});

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
$(".rupeeImage").on("click", function() {
	var singleRupeeValue = $(this).attr("data-rupee-value");
	singleRupeeValue = parseInt(singleRupeeValue)

	counter = counter + singleRupeeValue;

	$("#budget").text("$ " + counter);

	if (counter > targetNumber) {
		losses++;
		$("#losses").text("Losses: " + losses);
		alert("You losse! No flower for Zelda, no luck for you.");
		reset();
	} else if (counter === targetNumber) {
		wins++;
		$("#wins").text("Wins: " + wins);
		alert("You win! Your neck and the kingdom are safe.")
		reset();
	}
});

function reset () {
	targetNumber;
	counter = 0;
	rupeeValues = [];

	$("#budget").text("$ " + counter);

	//generate new random number
	targetNumber = Math.floor((Math.random() * 101) + 19);
	$("#price").text("$ " + targetNumber);

	for (var i = 0; i < rupeeQuantity.length; i++) {
		var newValue = Math.floor((Math.random() * 11) + 1);
		rupeeValues.push(newValue);
	}

	//generate new rupee values
	$(".rupeeImage").each(function(index, item){
		$(item).attr("data-rupee-value", rupeeValues[index]);
	});
}
