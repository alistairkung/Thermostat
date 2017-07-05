describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should start at 20 degrees", function (){
    expect(thermostat.temperature).toEqual(20);
  })

  it("should respond to up and increase the temperature", function (){
    thermostat.up(5)
    expect(thermostat.temperature).toEqual(25);
  })

  it("should respond to down and decrease the temperature", function (){
    thermostat.down(5)
    expect(thermostat.temperature).toEqual(15);
  })

  it("should not be able to drop below MIN_TEMP", function (){
    expect(function(){
      thermostat.down(11);
    }).toThrowError("too cold for me")
  })
  it("cannot raise temperature above 25 if power saving mode is on", function() {
    expect(function() {
      thermostat.up(6);
    }).toThrowError("too hot for me")
  })
  it("can toggle and untoggle powerSavingMode", function() {
    thermostat.togglePowerSaving();
    expect(thermostat.powerSavingMode).toBe(false)
  })
  it("should set maxTemp accordingly", function() {
    expect(thermostat.maxTemp).toEqual(25);
    thermostat.togglePowerSaving();
    expect(thermostat.maxTemp).toEqual(32);
  } )
})
