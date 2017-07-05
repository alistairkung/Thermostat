const MIN_TEMP = 10;

function Thermostat() {
  this.temperature = 20;
  // this.MIN_TEMP = 10;
}

Thermostat.prototype.up = function(degrees) {
  this.temperature += degrees;
}

Thermostat.prototype.down = function(degrees) {
  if (this.temperature - degrees < MIN_TEMP) {
    throw new Error
  }
  this.temperature -= degrees;
}
