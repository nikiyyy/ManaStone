const buttonTextMap = {
    'DM': 'WIP',
    'Wiki': 'WIP',
	'Stories': 'WIP',
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
    racesLink.textContent = 'If hit while flying you must make DC 8 constitution saving throw or fall from the sky';
    container.appendChild(racesLink);
	
	var racesLink = document.createElement('p');
    racesLink.textContent = 'Half natural armour bonus(rounded down) to a maxiumum of 2 to the existing armour you\'re wearing';
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