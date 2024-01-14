ig.module("impact.feature.bgm.bgm-jsh").requires("impact.feature.bgm.bgm").defines(function() {

    ig.merge(ig.BGM_TRACK_LIST, {
        clockTower: {
            "path": "media/bgm/muClock.ogg",
            "loopEnd": 226.239,
            "volume": 1.5
        },
		jShock: {
            "path": "media/bgm/muJShock.ogg",
            "loopEnd": 195.602,
            "volume": 1.5
        }
    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
        clockTower: {
            field: {
                track: "clockTower",
                volume: 1
            }
        }
    });
});