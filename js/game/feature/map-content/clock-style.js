ig.module("game.feature.map-content.clock-map-style").requires("game.feature.map-content.map-style")
    .defines(function() {
        ig.MAP_STYLES = {
            ...ig.MAP_STYLES,
            "clock": {
                ...ig.MAP_STYLES["clock"],
                anticompressor: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 240,
                    y: 400
                },
                bouncer: {
                    sheet: "media/map/shockwave-dng-props.png",
                    x: 0,
                    y: 0
                },
                puzzle: {
                    sheet: "media/entity/style/shockwave-dng-puzzle.png"
                },
                puzzle2: {
                    sheet: "media/entity/style/shockwave-dng-puzzle-2.png"
                },
                waterblock: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 384,
                    y: 304,
                    puddleX: 352,
                    puddleY: 448,
                },
                tesla:{
                    sheet: "media/map/shockwave-dng.png",
                    x: 240,
                    y: 352,
                },
                waveSwitch: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 16,
                    y: 696
                },
                waveblock: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 96,
                    y: 480
                },
                rotateBlocker: {
                    sheet: "media/map/clock-dng.png",
                    x: 256,
                    y: 720
                },
                destruct: {
                    sheet: "media/entity/style/shockwave-dng-destruct.png",
                },
                dynPlatformSmall: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 48,
                    y: 640,
                },
                dynPlatformMedium: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 0,
                    y: 640,
                },
                lorry: {
                    sheet: "media/map/shockwave-dng.png",
                    railX: 176,
                    railY: 304,
                    lorryX: 128,
                    lorryY: 304,
                },
                magnet: {
                    sheet: "media/map/shockwave-dng.png",
                    x: 160,
                    y: 272,
                }

            }
        }
    });


ig.module("game.feature.puzzle.entities.clock-rotate-blocker").requires("game.feature.puzzle.entities.rotate-blocker")
{
    // Add an exception to vanilla Rotate Blocker to allow 4 rotations without flipping
    ig.ENTITY.RotateBlocker.inject({
        init: function (a, d, c, e) {
            this.parent(a, d, c, e);
            let currentSheet = ig.mapStyle.get("rotateBlocker").sheet;
            let clockSheet = "media/map/clock-dng.png";
            if (currentSheet == clockSheet) {
                (d = ig.mapStyle.get("rotateBlocker")) && 
                this.initAnimations({
                    namedSheets: {
                        ground: {
                            src: d.sheet,
                            width: 32,
                            height: 32,
                            offX: d.x,
                            offY: d.y,
                            xCount: 1,
                        },
                        block: {
                            src: d.sheet,
                            width: 32,
                            height: 64,
                            offX: d.x + 32,
                            offY: d.y,
                        },
                    },
                    SUB: [
                        {
                            sheet: "ground",
                            shapeType: "Z_FLAT",
                            frames: [1],
                            SUB: [
                                { name: "off" },
                                { name: "ne" },
                                { name: "se" },
                                { name: "sw" },
                                { name: "nw" },
                                { name: "turn" },
                            ],
                        },
                        {
                            sheet: "block",
                            renderMode: "lighter",
                            SUB: [
                                { name: "ne", frames: [1], flipX: false },
                                { name: "se", frames: [0], flipX: false, wallY: 1 },
                                { name: "sw", frames: [2], flipX: false, wallY: 1 },
                                { name: "nw", frames: [3], flipX: false },
                            ],
                        },
                        {
                            sheet: "ground",
                            shapeType: "Y_FLAT",
                            renderMode: "lighter",
                            frames: [0],
                            SUB: [
                                { name: "turn", offset: { z: 1 } },
                                { name: "turn", offset: { z: 4 } },
                                { name: "turn", offset: { z: 8 } },
                                { name: "turn", offset: { z: 12 } },
                                { name: "turn", offset: { z: 16 } },
                                { name: "turn", offset: { z: 20 } },
                                { name: "turn", offset: { z: 24 } },
                                { name: "turn", offset: { z: 28 } },
                                { name: "turn", offset: { z: 32 } },
                            ],
                        },
                    ],
                });
            }
            else {
                (d = ig.mapStyle.get("rotateBlocker")) && 
                this.initAnimations({
                    namedSheets: {
                        ground: {
                            src: d.sheet,
                            width: 32,
                            height: 32,
                            offX: d.x,
                            offY: d.y,
                            xCount: 1,
                        },
                        block: {
                            src: d.sheet,
                            width: 32,
                            height: 64,
                            offX: d.x + 32,
                            offY: d.y,
                        },
                    },
                    SUB: [
                        {
                            sheet: "ground",
                            shapeType: "Z_FLAT",
                            frames: [1],
                            SUB: [
                                { name: "off" },
                                { name: "ne" },
                                { name: "se" },
                                { name: "sw" },
                                { name: "nw" },
                                { name: "turn" },
                            ],
                        },
                        {
                            sheet: "block",
                            renderMode: "lighter",
                            SUB: [
                                { name: "ne", frames: [1], flipX: false },
                                { name: "se", frames: [0], flipX: false, wallY: 1 },
                                { name: "sw", frames: [0], flipX: true, wallY: 1 },
                                { name: "nw", frames: [1], flipX: true },
                            ],
                        },
                        {
                            sheet: "ground",
                            shapeType: "Y_FLAT",
                            renderMode: "lighter",
                            frames: [0],
                            SUB: [
                                { name: "turn", offset: { z: 1 } },
                                { name: "turn", offset: { z: 4 } },
                                { name: "turn", offset: { z: 8 } },
                                { name: "turn", offset: { z: 12 } },
                                { name: "turn", offset: { z: 16 } },
                                { name: "turn", offset: { z: 20 } },
                                { name: "turn", offset: { z: 24 } },
                                { name: "turn", offset: { z: 28 } },
                                { name: "turn", offset: { z: 32 } },
                            ],
                        },
                    ],
                });
            }
           
        }
    })
}