var food = "";
var amount = "";
var calculatedGains = "";

$("#food").on("focus", function() {
    $("#result").html("");
    food = "";
    amount = "";
    calculatedGains = "";
});

$("#food").on("keyup change", function() {
    food = $("#food").val();
});

$("#amount").on("keyup change", function() {
    amount = $("#amount").val();
});

$("#skjema").submit(function(event) {
    event.preventDefault();
    calculatedGains = parseInt(amount) / 2;

    $("#food").val("");
    $("#amount").val("");

    $("#result").html(`<div id="resultInner">
  	<img src="/img/cutler.jpg"/>
  	<h1>${calculatedGains} cals</h1>
  	</div>
  `);

});