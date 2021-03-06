const MIN_TEMP = 10;

function Thermostat() {
  this.temperature = 20;
  // this.MIN_TEMP = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
}
Thermostat.prototype.up = function(degrees) {
  if (this.temperature + degrees > this.maxTemp) {
    throw new Error("too hot for me")
  }
  this.temperature += degrees;
}
Thermostat.prototype.down = function(degrees) {
  if (this.temperature - degrees < MIN_TEMP) {
    throw new Error("too cold for me")
  }
  this.temperature -= degrees;
}
Thermostat.prototype.togglePowerSaving = function() {
  this.powerSavingMode = !this.powerSavingMode
  this.maxTemp = this.powerSavingMode? 25 : 32
}
Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
}
Thermostat.prototype.energyUsage = function() {
  if (this.temperature > 25) {
      return "high-usage";
  } else if (this.temperature < 18) {
      return "low-usage";
  } else {
      return "medium-usage";
  }
}
Thermostat.prototype.getTemp = function() {
  return this.temperature;
}
Thermostat.prototype.getEnergyMode = function() {
  return this.powerSavingMode ?  "on" :  "off";
}
