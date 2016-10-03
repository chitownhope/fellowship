console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
    // create a section tag with an id of `middle-earth`

    $('body').append('<section></section>');
    $('section').prop('id','middle-earth');
    // add each land as an `article` tag
    // $('#middle-earth').append('<article></article>');
    $.each(lands, function( i, alands ){
        $('#middle-earth').append('<article>' + '<h1>' + alands + '</h1>' + '</article>');
      }
    )};



makeMiddleEarth();

function makeHobbits(){
  // your answers here

    for (var i = 0; i < hobbits.length; i++){

    $('#middle-earth > article:nth-child(1)').append('<li>' + (hobbits[i]) + '</li>');
  }
};

makeHobbits();


function keepItSecretKeepItSafe(){
  // your answers here
$('#middle-earth > article:nth-child(1)>li:nth-child(2)').append('<div></div>');
$('div').prop('id','the-ring');
$('div').addClass('magic-imbued-jewelry');

}

keepItSecretKeepItSafe();

function makeBuddies(){
 
$('#middle-earth > article:nth-child(2)>h1').append('<aside></aside>');

$('#middle-earth > article:nth-child(2)>h1>aside').append('<ul></ul>');
for (var i = 0; i < buddies.length; i++)
$('#middle-earth > article:nth-child(2)>h1').append('<li>' + (buddies[i]) + '</li>');}

makeBuddies();

function beautifulStranger(){
  // your answers here
  // change the `'Strider'` text to `'Aragorn'`
$('li:nth-child(5)').html('Aragorn');
};


beautifulStranger();

function leaveTheShire(){
  // your answers here
  // assemble the `hobbits` and move them to `rivendell`
$('#middle-earth>article>li').remove();

for (var i = 0; i < hobbits.length; i++)
$('#middle-earth > article:nth-child(2)>h1').append('<li>' + (hobbits[i]) + '</li>');

};



leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
$('#middle-earth > article:nth-child(2)>h1').append('<div></div>');
$('#middle-earth>article:nth-child(2)>h1>div').prop('id','fellowship');

$('#middle-earth > article:nth-child(2)>h1>li').remove();
$.each(hobbits, function( i, friends ){
        $('#fellowship').append('<div>' + friends + '</div>');
        alert('you have arrived at the Fellowship');
});

$.each(buddies, function( i, morefriends ){
        $('#fellowship').append('<div>' + morefriends + '</div>');
        alert('you too have joined the partay at the Fellowship');
});


forgeTheFellowship();

function theBalrog(){
  // your answers here
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border
$('#middle-earth>article:nth-child(2)>h1>div>div:nth-child(5)').html('Gandalf the White');



}

theBalrog();

function hornOfGondor() {
  // your answers here
 // pop up an alert that the horn of gondor has been blown
 // Boromir's been killed by the Uruk-hai!
 // Remove `Boromir` from the Fellowship
alert('THE HORN OF GONDOR HAS BEEN BLOWN!!!!!');
$('#middle-earth > article:nth-child(2)>h1>li').remove();
$('#middle-earth > article:nth-child(2) > h1 > div > div:nth-child(9)').remove();

}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
$('#middle-earth > article:nth-child(2) > h1 > div > div:nth-child(1)').remove();
$('#middle-earth > article:nth-child(2) > h1 > div > div:nth-child(1)').remove();
$('#middle-earth > article:nth-child(3)').append('<div></div>');
$('#middle-earth > article:nth-child(3)>div').prop('id','mount-doom');
///didnt finish....sun: 10:22

}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
};

thereAndBackAgain();
