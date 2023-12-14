const buttonTextMap = {
    'DM': 'health calculator | roll dice | random place on grid | general random number gen | keep track of health',
    'About': 'WIP',
};

function addFireEffect(element) {
			element.classList.add("font-effect-fire");
		}

function removeFireEffect(element) {
			element.classList.remove("font-effect-fire");
		}


function updateButtonText(button) {
    var buttonText = button.innerText;

    // Check if the clicked button is in the buttonTextMap
    if (buttonText in buttonTextMap) {
        // Set the associated text to the #button-text element
        document.getElementById('button-text').innerText = buttonTextMap[buttonText];
    } else {
        // Fallback for buttons not in the map
        document.getElementById('button-text').innerText = 'Selected Button: ' + buttonText;
    }
}

function createRules() {
    var container = document.querySelector('#button-text');

    // Clear existing contents of the container
    container.innerHTML = '';

    var racesLink = document.createElement('p');
    racesLink.textContent = 'Drinking a potion is a bonus action';
    container.appendChild(racesLink);
	
    var racesLink = document.createElement('p');
    racesLink.textContent = 'If hit while flying you must make DC 8 constitution saving throw or fall from the sky | you must use bonus action to start flying';
    container.appendChild(racesLink);
	
	var racesLink = document.createElement('p');
    racesLink.textContent = 'Half natural armour bonus(rounded down) to a maxiumum of 2 to the existing armour you\'re wearing';
    container.appendChild(racesLink);
	
	var racesLink = document.createElement('p');
    racesLink.textContent = 'off weapon attack is no longer bonus action, but part or main action attack';
    container.appendChild(racesLink);


	var racesLink = document.createElement('p');
    racesLink.textContent = 'If youre downed by s critical strike, flip a con to dermine if you get a scar. refer to scar table';
    container.appendChild(racesLink);
	
	var racesLink = document.createElement('p');
    racesLink.textContent = 'On Crit or Crit fail saving throw, depending on damage type apply different effect on target:';
    container.appendChild(racesLink);
	
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Slashing - Apply 1D4 bleed to target for 1D4 tirns';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Piercing - Tripple damage (no modifiers for 2nd and 3rd dice)';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Bludgeoning - Target moved 5ft.(if its equal to attacker size) back attacks agaist it have advantage(off balance)';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Fire - Target is set on fire 1D4 for 1D6 tirns | Can use action to put out flames';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Cold - movement speed is halfed and target has disadvantage on next attack';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Lightning - target is knocked prone';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Thunder - target has Deafened effect for 1D4 tirns and deals 1D4';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Radiant - if Target is Undead, Fiend, Demon target is Incapacitated for 1 tirn(can’t take actions or reactions) and deal 1d4 radiant dmg';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'psychic - roll 1D20 if you roll 20 target head explodes';
	container.appendChild(racesLink);
	var racesLink = document.createElement('li');
    racesLink.textContent = 'Necrotic - Deal 1D4 necrotic damage to target for 1D4 tirns';
	container.appendChild(racesLink);
}


function createStories() {
	var container = document.querySelector('#button-text');

    // Clear existing contents of the container
    container.innerHTML = '';

    var racesLink = document.createElement('p');
    racesLink.textContent = 'The eternal hatred of the slave';
    container.appendChild(racesLink);

	var racesLink = document.createElement('p');
    racesLink.textContent = 'The golden apple';
    container.appendChild(racesLink);
	
	var racesLink = document.createElement('p');
    racesLink.textContent = 'Just an animal';
    container.appendChild(racesLink);

	var racesLink = document.createElement('p');
    racesLink.textContent = 'The curious case of the disappearing city';
    container.appendChild(racesLink);
}


function createAbout() {
	var container = document.querySelector('#button-text');

    // Clear existing contents of the container
    container.innerHTML = '';

    var racesLink = document.createElement('p');
    racesLink.textContent = 'Homebrew rules and races for D&D';
    container.appendChild(racesLink);

}


function createResources() {
    var container = document.querySelector('#button-text');

    // Clear existing contents of the container
    container.innerHTML = '';

    var racesLink = document.createElement('a');
    racesLink.href = 'races.html';
    racesLink.textContent = 'Available Races';
    container.appendChild(racesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
    var perksLink = document.createElement('a');
    perksLink.href = 'https://www.aidedd.org/dnd-filters/feats.php';
    perksLink.textContent = 'Available Feats';
    container.appendChild(perksLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
	var perksLink = document.createElement('a');
    perksLink.href = 'https://5ebackgrounds.com/';
    perksLink.textContent = 'Available Backgrounds';
    container.appendChild(perksLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
    var classesLink = document.createElement('a');
    classesLink.href = 'https://rpgbot.net/dnd5/characters/classes/';
    classesLink.textContent = 'Available Classes and Guides';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
    var classesLink = document.createElement('a');
    classesLink.href = 'https://chicken-dinner.com/5e/5e-point-buy.html';
    classesLink.textContent = 'Stats point buy';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
    var classesLink = document.createElement('a');
    classesLink.href = 'https://www.dropbox.com/s/be6734jn1p2e1ax/CharacterSheet_1page_form6.pdf?dl=0';
    classesLink.textContent = 'Character Sheet';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
    var classesLink = document.createElement('a');
    classesLink.href = 'http://dnd5e.wikidot.com/spells';
    classesLink.textContent = 'All spells';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
	var classesLink = document.createElement('a');
    classesLink.href = 'https://www.aidedd.org/dnd-filters/magic-items.php';
    classesLink.textContent = 'Items and Potions';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
}


 function toggleRaceVisibility(elementId) {
    var element = document.getElementById(elementId);
    
    // Toggle the visibility by changing the display property
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  