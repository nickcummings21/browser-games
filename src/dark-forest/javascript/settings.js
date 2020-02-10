let BUILD_FIRE_WOOD_COST;
let BUILD_FIRE_ROCKS_COST;
let FEED_FIRE_COST;
let MAX_FIRE;
let FIRE_COOLDOWN;

let GATHER_WOOD_COOLDOWN;

let GATHER_ROCKS_COOLDOWN;

let CRAFT_POINTY_STICK_COST;
let CRAFT_POINTY_STICK_COOLDOWN;

let GO_HUNTING_COOLDOWN;

const settings = {
    build_fire_wood_cost: {
        normal: 5,
        dev: 5
    },
    build_fire_rocks_cost: {
        normal: 2,
        dev: 2
    },
    feed_fire_cost: {
        normal: 1,
        dev: 1
    },
    max_fire: {
        normal: 5,
        dev: 5
    },
    fire_cooldown: {
        normal: 5,
        dev: 1
    },
    gather_wood_cooldown: {
        normal: 5,
        dev: 1
    },
    gather_rocks_cooldown: {
        normal: 5,
        dev: 1
    },
    craft_pointy_stick_cost: {
        normal: 1,
        dev: 1
    },
    craft_pointy_stick_cooldown: {
        normal: 10,
        dev: 1
    },
    go_hunting_cooldown: {
        normal: 10,
        dev: 1
    }
}

const setNormalMode = () => {
    BUILD_FIRE_WOOD_COST = settings.build_fire_wood_cost.normal;
    BUILD_FIRE_ROCKS_COST = settings.build_fire_rocks_cost.normal;
    FEED_FIRE_COST = settings.feed_fire_cost.normal;
    MAX_FIRE = settings.max_fire.normal;
    FIRE_COOLDOWN = settings.fire_cooldown.normal;
    
    GATHER_WOOD_COOLDOWN = settings.gather_wood_cooldown.normal;
    
    GATHER_ROCKS_COOLDOWN = settings.gather_rocks_cooldown.normal;
    
    CRAFT_POINTY_STICK_COST = settings.craft_pointy_stick_cost.normal;
    CRAFT_POINTY_STICK_COOLDOWN = settings.craft_pointy_stick_cooldown.normal;
    
    GO_HUNTING_COOLDOWN = settings.go_hunting_cooldown.normal;
}

const setDevMode = () => {
    BUILD_FIRE_WOOD_COST = settings.build_fire_wood_cost.dev;
    BUILD_FIRE_ROCKS_COST = settings.build_fire_rocks_cost.dev;
    FEED_FIRE_COST = settings.feed_fire_cost.dev;
    MAX_FIRE = settings.max_fire.dev;
    FIRE_COOLDOWN = settings.fire_cooldown.dev;
    
    GATHER_WOOD_COOLDOWN = settings.gather_wood_cooldown.dev;
    
    GATHER_ROCKS_COOLDOWN = settings.gather_rocks_cooldown.dev;
    
    CRAFT_POINTY_STICK_COST = settings.craft_pointy_stick_cost.dev;
    CRAFT_POINTY_STICK_COOLDOWN = settings.craft_pointy_stick_cooldown.dev;
    
    GO_HUNTING_COOLDOWN = settings.go_hunting_cooldown.dev;
}
