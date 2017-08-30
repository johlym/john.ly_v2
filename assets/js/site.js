$(window).scroll(function () {
var s = $(window).scrollTop(),
d = $(document).height(),
c = $(window).height();
scrollPercent = (s / (d - c)) * 100;
var position = scrollPercent;

$("#progressbar").attr('value', position);

});

// Images meant to be wider than the text should have their parent paragraph element extend to match.
$('article>div>p:has(img[src*="med"])').addClass('med');

// Images meant go all super mega ultra will fill the page width.
$('article>div>p:has(img[src*="large"])').addClass('large');