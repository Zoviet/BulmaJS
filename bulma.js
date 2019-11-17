function getAll(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

var rootEl = document.documentElement;
var $modals = getAll('.modal');
var $modalButtons = getAll('.rules');
var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
var $burger = getAll('.navbar-burger');
var $headerbackground = getAll('.is-background');

if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;     
        closeBG();
        openModal(target);        
      });
    });
  }
  
if ($headerbackground.length > 0) {	
	$headerbackground.forEach(function (headerbackgroundImage) {
		var bgImage = headerbackgroundImage.dataset.image;
		headerbackgroundImage.style.backgroundImage =  'url('+ bgImage +')';	
	});
}

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }
  
 document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();      
    }
  });  

function openModal(target) {	 
var $target = document.getElementById(target);
$target.classList.add('is-active');
}

function closeBG() {
rootEl.classList.add('is-clipped');
}


function closeModals() {
rootEl.classList.remove('is-clipped');
$modals.forEach(function ($el) {
$el.classList.remove('is-active');
});
}

function closeMenus(target) {
	var $target = document.getElementById(target);
$target.classList.remove('is-active');
}


$burger.forEach(function ($el) {	
      $el.addEventListener('click', function () {		  		 
		$el.classList.toggle('is-active');
		var target = $el.dataset.target; 
		if ($el.classList.contains('is-active')) {			
			openModal(target);
		}  else {closeMenus(target);}            
      });
    }); 
