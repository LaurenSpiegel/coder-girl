
var adjectives = ["Gray","Brown","Red","Pink","Crimson","Carnelian","Orange","Yellow","Ivory","Cream","Green","Viridian","Aquamarine","Cyan","Blue","Cerulean","Azure","Indigo","Navy","Violet","Purple","Lavender","Magenta","Rainbow","Iridescent","Spectrum","Prism","Bold","Vivid","Pale","Clear","Glass","Translucent","Misty","Gold","Silver","Copper","Bronze","Steel","Iron","Brass","Mercury","Zinc","Chrome","Platinum","Titanium","Nickel","Lead","Pewter","Rust","Metal","Stone","Quartz","Granite","Marble","Alabaster","Agate","Jasper","Pebble","Pyrite","Crystal","Geode","Obsidian","Mica","Flint","Sand","Gravel","Boulder","Basalt","Ruby","Beryl","Scarlet","Citrine","Sulpher","Topaz","Amber","Emerald","Malachite","Jade","Abalone","Lapis","Sapphire","Diamond","Peridot","Gem","Jewel","Bevel","Coral","Jet","Wood","Tree","Maple","Cedar","Branch","Bramble","Rowan","Ash","Fir","Pine","Cactus","Alder","Grove","Forest","Jungle","Mulberry","Juniper","Vine","Ivy","Rose","Lily","Tulip","Daffodil","Honeysuckle","Fuschia","Hazel","Walnut","Almond","Lime","Lemon","Apple","Blossom","Bloom","Rose","Buttercup","Dandelion","Iris","Carnation","Fern","Root","Branch","Leaf","Seed","Flower","Petal","Pollen","Orchid","Cypress","Sequoia","Sage","Heather","Snapdragon","Daisy","Mountain","Hill","Alpine","Chestnut","Valley","Glacier","Forest","Grove","Glen","Tree","Desert","Canyon","Oasis","Mirage","Well","Spring","Meadow","Field","Prairie","Grass","Island","Shore","Sand","Shell","Surf","Wave","Foam","Tide","Lake","River","Brook","Stream","Pool","Pond","Sun","Sprinkle","Shade","Rain","Cloud","Snow","Thunder","Lightning","Dawn","Sunrise","Morning","Noon","Twilight","Evening","Sunset","Midnight","Night","Sky","Star","Stellar","Comet","Nebula","Quasar","Solar","Lunar","Planet","Meteor","Pear","Plum","Kiwi","Berry","Apricot","Peach","Mango","Pineapple","Coconut","Olive","Fancy","Stripe","Spot","Speckle","Spangle","Ring","Band","Paint","Calico","Checker","Dot","Pattern","Glitter","Glimmer","Shimmer","Glaze","Scratch","Quick","Swift","Clever","Fire","Flicker","Flash","Spark","Ember","Coal","Vanilla","Sugar","Spice","Cake","Cookie","Candy","Spiral","Jelly","Great","Atom","Peppermint","Mint","Butter","Quilt","Truth","Noble","Sly","Brave","Lava","Keen","Luminous","Feather","Gossamer","Cotton","Silk","Satin","Denim","Flannel","Plaid","Wool","Linen","Silent","Flax","Valiant","Rhinestone","Splash","North","South","East","West","Summer","Winter","Autumn","Spring","Season","Equinox","Solstice","Paper","Shag","Freckle","Wild","Free","Fierce","Sheer","Candle","Ribbon","Lace","Wax","Shine","Deep","Bubble","Harvest","Fluff","Rune","Quill","Love","Garnet","Zircon","Power","Glory","Cyber","Nova","Helix","Cosmic","Quark","Holly","Clover","Polar","Regal","Phantom","Dew","Chisel","Chatter","Laser","Foil","Clever","Treasure","Maze","Twisty","Curly","Fortune","Fate","Destiny","Cute","Ink","Disco","Time","Relic","Water","Rapid","Road","Trail","Bow","Nimble","Zest","Phase","Fan","Frill","River","Spring","Stream","Arrow","Plume","Cat","Dog","Horse","Bird","Neon","Puzzle","Warp","Luck","Coffee","Chip", "Legend","Hickory","Mesquite","Nettle","Rogue","Charm","Sponge","Frost","Volcano","Maze","Proud","Dew","Mirror","Glow","Zenith", "Awesome", "Clever", "Quirky", "Amazing", "Dazzling", "Shimmering"];

var nouns = ["crest","crown","frill","voice","eye","sight","seer","speaker","singer","song","chatter","wing","racer","runner","fly","flier","swoop","crafter","scribe","muse","snap","friend","lightning","cloud","braid","dancer","player","twister","painter","dart","queen","princess","dutchess","sage","wizard","warrior","jester","bow","leader","tiger","jaguar","ocelot","lion","leopard","bear","kitten","puppy","cub","antelope","gazelle","dolphin","otter","bird","eagle","owl","sparrow","robin","parrot","gecko","iguana","condor","toucan","bee","rabbit","chill","gem","myth","elf","fairy","pixie","unicorn","pegasus","sprite","butterfly","legend","glass","crystal","lantern","bell","keeper","whimsey","quester","stone","gem","grin","koala","kangaroo","shirt","mind","cap","cupcake", "hashtag", "cronut", "macaron", "pastry", "festival", "pilates", "yoga", "spinning", "strawberry", "bumblebee", "basketball", "beach", "ocean", "surfing", "sunset", "vacation", "star"];

function randomNoun(){
    return nouns[Math.floor(Math.random()*nouns.length)];
}

function randomAdjective(){
    return adjectives[Math.floor(Math.random()*adjectives.length)];
}

function generateSillyName(){
    var noun1 = randomNoun();
    var noun2 = randomNoun();
    noun2 = noun2.substr(0, 1).toUpperCase() + noun2.substr(1);
    var adjective = randomAdjective();
    return adjective + noun1 + ' ' + noun2;
}

module.exports = generateSillyName;
