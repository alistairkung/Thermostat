$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#power-saving-status").text(thermostat.getEnergyMode());
  updateTemperature()
  $("#temperature-up").click(function() {
    thermostat.up(1);
    updateTemperature()
  });
  $("#temperature-down").click(function() {
    thermostat.down(1);
    updateTemperature()
  });
  $("#temperature-reset").click(function() {
    thermostat.resetTemp();
    updateTemperature()
  });
  $("#powersaving-toggle").click(function() {
    thermostat.togglePowerSaving();
    $("#power-saving-status").text(thermostat.getEnergyMode());
  });
  function updateTemperature() {
    $('#temperature').text(thermostat.getTemp());
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
