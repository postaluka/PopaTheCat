
import Experience from './Experience/Experience'
import videojs from 'video.js';


/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl')

console.log(videojs);

// videojs(document.querySelector('.video-js'))

videojs("my-player",
    {
        controls: true,
        autoplay: true,
        preload: 'auto'
    })

videojs.getPlayer()

// const videojs = document.querySelector('.videojs_player')

// console.log(videojs);

// videojs.getPlayer()

/**
 * Experience class
 */

const experience = new Experience(canvas)


