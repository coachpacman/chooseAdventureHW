alert("Welcome, Ethan.");

var confirmMessage = prompt("Please confirm your identity with your last name").toLowerCase();
var destructMessage = "Unidentified agent. Message will terminate in 10 seconds";
var missionPrompt = "The international tea smuggler, Jason Shabo, has stolen the Queen's prized teas. Your mission, should you choose to accept, is to recover these teas and return them to her majesty. Do you accept this dangerous mission?"
var teaCollection = []
var stageComplete = function() {
	console.log("You currently have collected " + teaCollection.length + " of the Queen's teas.")
	for(var i = 0; i < teaCollection.length; i+=1) {
		console.log(teaCollection[i])
	}
	if (teaCollection.length === 3) {
		console.log("Ethan. Your mission is complete. Please return safely with all the Queen's teas: " + teaCollection[0] + ", " + teaCollection[1] + ", and " + teaCollection[2] + ".")
	}

	else {
		console.log("You have only collected " + teaCollection.length + " teas and need " + (3 - teaCollection.length) + " more teas to complete your mission.")
	}
}


var bomb = function() {
	for(var i = 10; i > 0; i--) {
		console.log(i)
		}
		console.log("BOOM!")
}


if (confirmMessage === "hunt") {
	var answer = confirm(missionPrompt);
	if (answer === true) {
		var stage1 = confirm("Let us begin. To complete this mission, you must steal back the Queen's teas from three locations IMF has identified. Ukraine, Italy and Las Vegas. You follow Jason to his first hideaway, Las Vegas.")
		if (stage1 === true) {
			alert("Welcome to Sin City, Ethan. You follow Jason to his hideaway location at the infamous 'Iron Yard.' Where you encounter his first henchman Drop The Mike. He asks you one question.")
			var stage1answer = prompt("Drop the Mike: Did you do the homework? Yes or No").toLowerCase()
			if (stage1answer === "yes") {
				alert("DTM: Great! Please make sure you push it to your github. Here's some tea!")
				teaCollection[0] = "Jasmine"
				stageComplete()
				alert("Well done, Ethan. You have collected the Queen's prized Jasmine tea. Fly to Ukraine for stage 2.")
				alert("Welcome to Ukraine. Here you meet with Jason's second henchman. Gabe Shepherd. Here, Gabe gives you a chilling question:")
				var stage2answer = prompt("Gabe: Have you scheduled your 1-on-1 with me?").toLowerCase()
				if (stage2answer === "yes") {
					alert("Gabe: Nice! Here's some tea!")
					teaCollection[1] = "Tangerine"
					stageComplete()
					alert("Well done, Ethan. You have collected the Queen's prized Tangerine tea. Fly to Russia for the final stage.")
					alert("Welcome to Russia. You have reached the final stage and must face, Jason. Look out he's behind you!")
					var action1 = prompt("Quick: do you duck or turn around?").toLowerCase()
					if (action1 === "duck") {
						alert("You evade his punch!")
						var stage3answer = prompt("Jason yells: Listen, I made you some tea. Do you consent to drinking it?!")
						if (stage3answer === "yes") {
							alert("Jason: Oh, really? Sweet. Here's some Black tea! See you next week at Iron Yard!")
							teaCollection[2] = "Black Tea"
							stageComplete()
						}

					}

					else if (action1 === "turn around") {
						alert("Oh shoot! Jason knocks you out! While you're out, he sets down a present for you...tick tick tick...")
						bomb()

					}

					else {
						alert("Tom Cruise. You did not duck nor, turn around. You should quit making movies given Jason knocked you out. While you're unconscious, Jason sets a timer...")
						bomb()
					}
				}
				else {
					alert("Gabe: Oh. Well. It's gonna be hard to place you. Sucka! But here's a nice going away present!")
					alert("Gabe places an object in your hand. You think it's another one of those moleskin notebooks he gave earlier but it's...")
					alert(destructMessage)
					bomb()
				}

			}

			else {
				alert("DTM: Oh. Well, that's OK. Just make sure you schedule your 1-on-1 with me.")
				alert("You get to your 1-on-1 and...oh no! There's a BOMB!")
				bomb()
			}
		}
		else {
			alert("Alert. You are not in Las Vegas")
			alert(destructMessage)
			bomb()
		}
	}
	else {
		console.log("You have ignored your mission.")
		console.log(destructMessage)
		bomb()
		}	
}
	
else {
	alert(destructMessage);
	bomb()
}








