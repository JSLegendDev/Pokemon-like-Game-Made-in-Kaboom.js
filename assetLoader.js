function loadAssets() {
    loadSpriteAtlas('./assets/characters.png', {
        'player-down': {
            x: 0,
            y: 82,
            width: 16,
            height: 16,
        },
        'player-up': {
            x: 16,
            y: 82,
            width: 16,
            height: 16
        },
        'player-side': {
           x: 0,
           y: 98,
           width: 32,
           height: 16,
           sliceX: 2,
           sliceY: 1,
           anims: {
            'walk': {
                from: 0,
                to: 1,
                speed: 6,
            }
           } 
        },
        'npc': {
            x: 32,
            y: 98,
            width: 16,
            height: 16,   
        },
        'cat-mon': {
            x: 0,
            y: 16,
            width: 32,
            height: 32 
        },
        'spider-mon': {
            x: 32,
            y: 16,
            width: 32,
            height: 32
        },
        'centipede-mon': {
            x: 64,
            y: 16,
            width: 32,
            height: 32
        },
        'grass-mon': {
            x: 0,
            y: 49,
            width: 32,
            height: 32
        },
        'mushroom-mon': {
            x: 32,
            y: 49,
            width: 32,
            height: 32
        },
        'mini-mons': {
            x: 0,
            y: 0,
            width: 128,
            height: 16,
            sliceX: 8,
            sliceY: 1,
            anims: {
                'spider': 1,
                'centipede': 2,
                'grass': 3
            }
        }
    })
    
    loadSprite('battle-background', './assets/battleBackground.png')
    
    loadSpriteAtlas('./assets/tiles.png', {
        'tile': {
            x: 0,
            y: 0,
            width: 128,
            height: 128,
            sliceX: 8,
            sliceY: 8,
            anims: {
                'bigtree-pt1': 1,
                'bigtree-pt2': 2,
                'bigtree-pt3': 9,
                'bigtree-pt4': 10,
                'grass-m': 14,
                'grass-tl': 17,
                'grass-tm': 18,
                'grass-tr': 19,
                'grass-l': 25,
                'grass-r': 27,
                'grass-bl': 33,
                'grass-mb': 34,
                'grass-br': 35,
                'tree-t': 4,
                'tree-b': 12,
                'grass-water': 20,
                'sand-1': 6,
                'ground-l': 41,
                'ground-m': 42,
                'ground-r': 43,
                'rock-water': 60
            }
        }
    })
    
}