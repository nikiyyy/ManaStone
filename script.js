const buttonTextMap = {
    'DM': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas. In iaculis nunc sed augue lacus viverra. Purus in massa tempor nec. Elit ut aliquam purus sit. Arcu risus quis varius quam quisque id diam vel. Viverra justo nec ultrices dui sapien eget mi proin. Elit ullamcorper dignissim cras tincidunt lobortis. Consectetur lorem donec massa sapien faucibus. Aliquam vestibulum morbi blandit cursus. Mauris in aliquam sem fringilla. Non blandit massa enim nec dui nunc mattis. Viverra adipiscing at in tellus integer. Diam in arcu cursus euismod quis viverra.',
    'Resources': 'Content for Resources button',
    'Rules': 'Content for Rules button',
    'Character Creation': '<a href="races.html">Avalible races</a><br><a href="races.html">Avalible perks</a><br><a href="races.html">Classes and guides</a>',
    'Wiki': 'Content for Wiki button',
	'Stories': 'Content for stories button',
    'About': 'Content for About button',
};

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

function createElements() {
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
    perksLink.href = 'perks.html';
    perksLink.textContent = 'Available Feats';
    container.appendChild(perksLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
	var perksLink = document.createElement('a');
    perksLink.href = 'perks.html';
    perksLink.textContent = 'Available Backgrounds';
    container.appendChild(perksLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
    var classesLink = document.createElement('a');
    classesLink.href = 'classes.html';
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
    classesLink.href = 'http://dnd5e.wikidot.com/spells';
    classesLink.textContent = 'Potions';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	
	var classesLink = document.createElement('a');
    classesLink.href = 'http://dnd5e.wikidot.com/spells';
    classesLink.textContent = 'weapons and equipment';
    container.appendChild(classesLink);
    container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
}

