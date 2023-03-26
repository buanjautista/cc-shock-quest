ig.module("impact.feature.bgm.bgm-jsh").requires("impact.feature.bgm.bgm").defines(function() {

    ig.merge(ig.BGM_TRACK_LIST, {
        JShock: {
            "path": "media/bgm/muJShock.ogg",
            "loopEnd": 180.000,
            "volume": 2.5
        }
    });
});