ig.module("impact.feature.weather.weather-jshock").requires("impact.feature.weather.weather")
    .defines(    function() {
    ig.WEATHER_TYPES.CLOCK_TOWER_INNER = {
        fog: { alpha: 0.3, vel: { x: 30, y: 10 } },
        lightMapDarkness: 0.2,
        glowColor: "#08284d",
        particles: [{ type: "DARK_DUST", quantity: 10 }],
    },
	ig.WEATHER_TYPES.CLOCK_TOWER_LOWER = {
        fog: { alpha: 0.7, vel: { x: 30, y: 10 } },
        lightMapDarkness: 0.5,
        glowColor: "#08284d",
        particles: [{ type: "DARK_DUST", quantity: 10 }],
    },
    ig.WEATHER_TYPES.JUNGLE_OUTER = {
        fog: { alpha: 0.7, vel: { x: 30, y: 10 } },
        lightMapDarkness: 0.8,
        particles: [{ type: "DARK_DUST", quantity: 10 }],
    }
});