$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#power-saving-status").text(thermostat.getEnergyMode());
  $('#temperature').text(thermostat.getTemp());
  $("#temperature-up").click(function() {
    thermostat.up(1);
    $("#temperature").text(thermostat.getTemp());
  });
  $("#temperature-down").click(function() {
    thermostat.down(1);
    $("#temperature").text(thermostat.getTemp());
  });
  $("#temperature-reset").click(function() {
    thermostat.resetTemp();
    $("#temperature").text(thermostat.getTemp());
  });
  $("#powersaving-toggle").click(function() {
    thermostat.togglePowerSaving();
    $("#power-saving-status").text(thermostat.getEnergyMode());
  });
});
