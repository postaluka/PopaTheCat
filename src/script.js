
import Experience from './Experience/Experience'
import videojs from 'video.js';

import util from 'canvas-sketch-util'

console.log(util);


/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl')

const video = document.querySelector('video')

const numverOfVideos = 4

let previousStatus = null

randomVideo()

randomButton.addEventListener('click', randomVideo);

function randomVideo()
{
    let number = util.random.rangeFloor(1, numverOfVideos + 1)
    console.log(number);

    if (number < 10)
    {
        number = '0' + number
    }

    if (!previousStatus)
    {
        previousStatus = number

        console.log('null ->', previousStatus);
    }
    if (previousStatus)
    {
        if (number === previousStatus)
        {
            randomVideo()
        }
        console.log('number:', number, 'previousStatus:', previousStatus);
    }

    video.innerHTML = ` <source src="/Video/video-${number}.mp4" type="video/mp4"></source> `

    video.addEventListener('loadedmetadata', function ()
    {
        video.play();
    });

    video.load();

    // video.load();
    // video.play();
}



/**
 * Experience class
 */

// const experience = new Experience(canvas)\






