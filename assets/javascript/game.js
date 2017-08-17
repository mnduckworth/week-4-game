$(document).ready(function(){
	var selectedCharacter = false;
	var selectedEnemy = false;
	var restartGame = false;
	var jimAttack = 12;
	var jimHealth = 150;
	var jimCounter = 16;
	var sarahHealth = 180;
	var sarahAttack = 8;
	var sarahCounter = 14;
	var dukeAttack = 10;
	var dukeHealth = 170;
	var dukeCounter = 15;
	var stukovHealth = 200;
	var stukovCounter = 12;
	var stukovAttack = 6;
	var tassadarHealth = 140;
	var tassadarAttack = 14;
	var tassadarCounter = 18;
	var artanisAttack = 16;
	var artanisHealth = 130;
	var artanisCounter = 20;
	var playerHealth;
	var enemyHealth;
	var playerAttack;
	var enemyAttack;
	var counterAttack;
	$(".thumbnail").on("click", function(){
		if(!selectedCharacter && !selectedEnemy){
			var userCharacter = $(this);
			$("#player").append(userCharacter);
			$("#selection").html("Now Select An Enemy");
			selectedCharacter = true;
			if($("#player").children("a.jim").hasClass("jim")){
				playerHealth = jimHealth;
				playerAttack = jimAttack;
			}
			if($("#player").children("a").hasClass("sarah")){
				playerHealth = sarahHealth;
				playerAttack = sarahAttack;
			}
			if($("#player").children("a").hasClass("duke")){
				playerHealth = dukeHealth;
				playerAttack = dukeAttack;
			}
			if($("#player").children("a").hasClass("stukov")){
				playerHealth = stukovHealth;
				playerAttack = stukovAttack;
			}
			if($("#player").children("a").hasClass("tassadar")){
				playerHealth = tassadarHealth;
				playerAttack = tassadarAttack;
			}
			if($("#player").children("a").hasClass("artanis")){
				playerHealth = artanisHealth;
				playerAttack = artanisAttack;
			}
			if($("#enemy").children("a").hasClass("jim")){
				enemyHealth = jimHealth;
				enemyAttack = jimAttack;
			}

		}
		else if(selectedCharacter && !selectedEnemy){
			var enemyCharacter = $(this);
			$("#enemy").append(enemyCharacter);
			$("#selection").html("Now Fight!");
			$("#fight-field").html("New Fight!")
			selectedEnemy = true;
			if($("#enemy").children("a").hasClass("jim")){
				enemyHealth = jimHealth;
				enemyAttack = jimAttack;
				counterAttack = jimCounter;
			}
			if($("#enemy").children("a").hasClass("sarah")){
				enemyHealth = sarahHealth;
				enemyAttack = sarahAttack;
				counterAttack = sarahCounter;
			}
			if($("#enemy").children("a").hasClass("duke")){
				enemyHealth = dukeHealth;
				enemyAttack = dukeAttack;
				counterAttack = dukeCounter;
			}
			if($("#enemy").children("a").hasClass("stukov")){
				enemyHealth = stukovHealth;
				enemyAttack = stukovAttack;
				counterAttack = stukovCounter;
			}
			if($("#enemy").children("a").hasClass("tassadar")){
				enemyHealth = tassadarHealth;
				enemyAttack = tassadarAttack;
				counterAttack = tassadarCounter;
			}
			if($("#enemy").children("a").hasClass("artanis")){
				enemyHealth = artanisHealth;
				enemyAttack = artanisAttack;
				counterAttack = artanisCounter;
			}
			$("#enemy").find("p.damage").html("Counter Damage: " + counterAttack);
		}
	})

	$("#attackbtn").on("click", function(){
		if(selectedEnemy && selectedCharacter && !restartGame){
			enemyHealth = enemyHealth - playerAttack;
			playerAttack = playerAttack + 10;
			if(enemyHealth >= 0){
				playerHealth = playerHealth - counterAttack;
			}
			$("#fight-field").html("You hit he enemy for " + playerAttack + " damage, reducing their health to " + enemyHealth + ". They counter attacked you for " + counterAttack + " damage, reducing you to " + playerHealth + " health.");
		}
		
		if(playerHealth <= 0 && !restartGame){
			$("#selection").html("You Lose!");
			$("#buttons").append("<button type='button' class='btn btn-default' id='restartbtn'>Restart</button>");
			restartGame = true;
			$("#restartbtn").on("click", function(){
				location.reload();
			})
		}
		if(enemyHealth <= 0 && selectedEnemy){
			$("#fight-field").html("You defeated the opponent, leaving you at " + playerHealth + " health.");
			$("#selection").html("Select Next Opponent");
			$("#enemy").empty();
			selectedEnemy = false;
		}
		$("#player").find("p.health").html("HP: " + playerHealth);
		$("#player").find("p.damage").html("Damage: " + playerAttack);
		$("#enemy").find("p.health").html("HP: " + enemyHealth);
	})
})