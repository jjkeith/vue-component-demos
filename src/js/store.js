import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    platform: "Desktop",
    numSlots: 6,
    choices: [
    ],
    options: [
      {
        code: "a",
        type: "video",
        name: "sintel",
        title: "sintel",
        description: "sintel",
        //icon: "http://media.w3.org/2010/05/sintel/poster.png",
        thumb: "http://media.w3.org/2010/05/sintel/poster.png",
        //poster: "http://media.w3.org/2010/05/sintel/poster.png",
        src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
        occlusion: "total"
      },
      {
        code: "b",
        type: "video",
        name: "bunny",
        title: "bunny",
        description: "bunny",
        thumb: "http://media.w3.org/2010/05/bunny/poster.png",
        src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
        occlusion: "total"
      },
      {
        code: "c",
        type: "video",
        name: "oceans",
        title: "oceans",
        description: "oceans",
        thumb: "http://media.w3.org/2010/05/sintel/poster.png",
        src: "http://vjs.zencdn.net/v/oceans.mp4",
        occlusion: "total"
      },
      {
        code: "d",
        type: "video",
        name: "ExtendedOnAir",
        title: "ExtendedOnAir",
        description: "ExtendedOnAir",
        thumb: "./src/assets/vidmixer/video/video1_thumb.jpg",
        src: "./src/assets/vidmixer/video/video1_ExtendedOnAir.mp4",
        occlusion: "total"
      },
      {
        code: "e",
        type: "video",
        name: "Inspired",
        title: "Inspired",
        description: "Inspired",
        thumb: "./src/assets/vidmixer/video/video2_thumb.jpg",
        src: "./src/assets/vidmixer/video/video2_Inspired.mp4",
        occlusion: "total"
      },
      {
        code: "f",
        type: "video",
        name: "Montage",
        title: "Montage",
        description: "Montage",
        thumb: "./src/assets/vidmixer/video/video3_thumb.jpg",
        src: "./src/assets/vidmixer/video/video3_Montage.mp4",
        occlusion: "total"
      },
      {
        code: "g",
        type: "video",
        name: "Rolemodel",
        title: "Rolemodel",
        description: "Rolemodel",
        thumb: "./src/assets/vidmixer/video/video4_thumb.jpg",
        src: "./src/assets/vidmixer/video/video4_Rolemodel.mp4",
        occlusion: "total"
      },
      {
        code: "h",
        type: "graphic",
        name: "basketball",
        title: "basketball",
        description: "basketball",
        thumb: "./src/assets/vidmixer/graphic/basketball.png",
        src: "./src/assets/vidmixer/graphic/basketball.png",
        occlusion: "corner"
      },
      {
        code: "i",
        type: "graphic",
        name: "beachball",
        title: "beachball",
        description: "beachball",
        thumb: "./src/assets/vidmixer/graphic/beachball.png",
        src: "./src/assets/vidmixer/graphic/beachball.png",
        occlusion: "corner"
      },
      {
        code: "j",
        type: "graphic",
        name: "blaster",
        title: "blaster",
        description: "blaster",
        thumb: "./src/assets/vidmixer/graphic/blaster.png",
        src: "./src/assets/vidmixer/graphic/blaster.png",
        occlusion: "corner"
      },
      {
        code: "k",
        type: "graphic",
        name: "box",
        title: "box",
        description: "box",
        thumb: "./src/assets/vidmixer/graphic/box.png",
        src: "./src/assets/vidmixer/graphic/box.png",
        occlusion: "corner"
      },
      {
        code: "l",
        type: "graphic",
        name: "broom",
        title: "broom",
        description: "broom",
        thumb: "./src/assets/vidmixer/graphic/broom.png",
        src: "./src/assets/vidmixer/graphic/broom.png",
        occlusion: "corner"
      },
      {
        code: "m",
        type: "graphic",
        name: "bucket",
        title: "bucket",
        description: "bucket",
        thumb: "./src/assets/vidmixer/graphic/bucket.png",
        src: "./src/assets/vidmixer/graphic/bucket.png",
        occlusion: "corner"
      },
      {
        code: "n",
        type: "graphic",
        name: "cans",
        title: "cans",
        description: "cans",
        thumb: "./src/assets/vidmixer/graphic/cans.png",
        src: "./src/assets/vidmixer/graphic/cans.png",
        occlusion: "corner"
      },
      {
        code: "o",
        type: "graphic",
        name: "cups",
        title: "cups",
        description: "cups",
        thumb: "./src/assets/vidmixer/graphic/cups.png",
        src: "./src/assets/vidmixer/graphic/cups.png",
        occlusion: "corner"
      },
      {
        code: "p",
        type: "graphic",
        name: "glove",
        title: "glove",
        description: "glove",
        thumb: "./src/assets/vidmixer/graphic/glove.png",
        src: "./src/assets/vidmixer/graphic/glove.png",
        occlusion: "corner"
      },
      {
        code: "q",
        type: "graphic",
        name: "items",
        title: "items",
        description: "items",
        thumb: "./src/assets/vidmixer/graphic/items.png",
        src: "./src/assets/vidmixer/graphic/items.png",
        occlusion: "corner"
      },
      {
        code: "r",
        type: "graphic",
        name: "mittens",
        title: "mittens",
        description: "mittens",
        thumb: "./src/assets/vidmixer/graphic/mittens.png",
        src: "./src/assets/vidmixer/graphic/mittens.png",
        occlusion: "corner"
      },
      {
        code: "s",
        type: "graphic",
        name: "none",
        title: "none",
        description: "none",
        thumb: "./src/assets/vidmixer/graphic/none.png",
        src: "./src/assets/vidmixer/graphic/none.png",
        occlusion: "corner"
      },
      {
        code: "t",
        type: "graphic",
        name: "rope",
        title: "rope",
        description: "rope",
        thumb: "./src/assets/vidmixer/graphic/rope.png",
        src: "./src/assets/vidmixer/graphic/rope.png",
        occlusion: "corner"
      },
      {
        code: "u",
        type: "graphic",
        name: "snow",
        title: "snow",
        description: "snow",
        thumb: "./src/assets/vidmixer/graphic/snow.png",
        src: "./src/assets/vidmixer/graphic/snow.png",
        occlusion: "corner"
      },
      {
        code: "v",
        type: "graphic",
        name: "soccer",
        title: "soccer",
        description: "soccer",
        thumb: "./src/assets/vidmixer/graphic/soccer.png",
        src: "./src/assets/vidmixer/graphic/soccer.png",
        occlusion: "corner"
      },
      {
        code: "w",
        type: "graphic",
        name: "sock",
        title: "sock",
        description: "sock",
        thumb: "./src/assets/vidmixer/graphic/sock.png",
        src: "./src/assets/vidmixer/graphic/sock.png",
        occlusion: "corner"
      },
      {
        code: "x",
        type: "graphic",
        name: "stuffed",
        title: "stuffed",
        description: "stuffed",
        thumb: "./src/assets/vidmixer/graphic/stuffed.png",
        src: "./src/assets/vidmixer/graphic/stuffed.png",
        occlusion: "corner"
      },
      {
        code: "y",
        type: "graphic",
        name: "tennisball",
        title: "tennisball",
        description: "tennisball",
        thumb: "./src/assets/vidmixer/graphic/tennisball.png",
        src: "./src/assets/vidmixer/graphic/tennisball.png",
        occlusion: "corner"
      },
      {
        code: "z",
        type: "graphic",
        name: "watch",
        title: "watch",
        description: "watch",
        thumb: "./src/assets/vidmixer/graphic/watch.png",
        src: "./src/assets/vidmixer/graphic/watch.png",
        occlusion: "corner"
      },
      {
        code: "A",
        type: "graphic",
        name: "water",
        title: "water",
        description: "water",
        thumb: "./src/assets/vidmixer/graphic/water.png",
        src: "./src/assets/vidmixer/graphic/water.png",
        occlusion: "corner"
      },
      {
        code: "B",
        type: "audio",
        name: "ybtc",
        title: "ybtc",
        description: "ybtc",
        thumb: "./src/assets/vidmixer/audio/icon-audio.jpg",
        src: "./src/assets/vidmixer/audio/bg-audio1.mp3",
        occlusion: "universal"
      },
      {
        code: "C",
        type: "audio",
        name: "escape",
        title: "escape",
        description: "escape",
        thumb: "./src/assets/vidmixer/audio/icon-audio.jpg",
        src: "./src/assets/vidmixer/audio/bg-audio2.mp3",
        occlusion: "universal"
      },
      {
        code: "D",
        type: "audio",
        name: "pets",
        title: "pets",
        description: "pets",
        thumb: "./src/assets/vidmixer/audio/icon-audio.jpg",
        src: "./src/assets/vidmixer/audio/bg-audio3.mp3",
        occlusion: "universal"
      },
    ],
    categories: [
      {
        type: 'video',
        title: 'Clips'
      },
      {
        type: 'graphic',
        title: 'Effects'
      },
      {
        type: 'transition',
        title: 'Transitions'
      },
      {
        type: 'audio',
        title: 'Music'
      },
    ],
  },
  mutations: {
    initPlatform(state) {
      state.platform = (function() {
        var UA_RULES = [
          ["iPhone;", "Phone"],
          ["iPod;", "Phone"],
          ["iPad;", "Tablet"],
          ["Android.*Mobile Safari", "Phone"],
          ["Android.*Safari", "Tablet"],
          ["iemobile", "Phone"],
          ["Windows Phone", "Phone"],
          [".*", "Desktop"]
        ];

        var ua = navigator.userAgent;
        for (var i = 0; i < UA_RULES.length; i++) {
          var device = UA_RULES[i][1];
          var re = new RegExp(UA_RULES[i][0]);
          if (ua.match(re)) {
            return device;
          }
        }
      })();
    },
    addChoice(state, payload) {
      let newChoice;
      if(payload.blocking) {
        newChoice = {
          slot: payload.slot,
          option: payload.option,
          blocking: payload.blocking,
        };
      }
      else {
        newChoice = {
          slot: payload.slot,
          option: payload.option,
        };
      }

      let choicesToDelete;
      // Find any choices with a matching type and slot
      let slotMatches = state.choices.filter(choice => (choice.slot == newChoice.slot) && (choice.option.type == newChoice.option.type));
      // Handle replacement/removal of other choices based upon the occlusion of this one
      switch(newChoice.option.occlusion) {

        // - "universal" occlusion means remove everything with a matching type in ANY slot
        case 'universal':
          choicesToDelete = state.choices.filter(choice => choice.option.type == newChoice.option.type);
          break;

        // - "total" occlusion means remove everything with a matching slot
        case 'total':
          choicesToDelete = slotMatches;
          break;

        // - "corner" occlusion means remove everything with a matching blocking
        case 'corner':
          choicesToDelete = slotMatches.filter(match => (newChoice.blocking) && (match.blocking == newChoice.blocking));
          break;

        // - "half" occlusion means remove everything matching any strings in the blocking
        case 'vertical-half':
        case 'horizontal-half':
          if(newChoice.blocking) {
            let occludedBlocks = newChoice.blocking.split(' ');
            for(let i = 0; i < occludedBlocks.length; i++) {
              choicesToDelete.concat(slotMatches.filter(match => match.blocking == occludedBlocks[i]));
            }
            choicesToDelete = choicesToDelete.filter(function(elem, index, self) {
              return index === self.indexOf(elem);
            });
          }
          else {
            choicesToDelete = [];
          }
          break;

        // - default?  Should not get here
        default:
          choicesToDelete = [];
          break;
      }

      // Delete all overlapped choices
      for(let i = 0; i < choicesToDelete.length; i++) {
        Vue.delete(state.choices, state.choices.indexOf(choicesToDelete[i]));
      }

      Vue.set(state.choices, state.choices.length, newChoice);
    },
  }
});
export default store;