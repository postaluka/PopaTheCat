
import Experience from './Experience/Experience'
import Gallery from './Gallery/Gallery';
import videojs from 'video.js';

import util from 'canvas-sketch-util'

/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl')

/**
 * Video
 */
const videoCanvas = document.querySelector('.video')

/**
 * UI
 */
const yearContainer = document.querySelector('.yearContainer')
const monthContainer = document.querySelector('.monthContainer')


/**
 * Gallery class
 */

const gallery = new Gallery(videoCanvas, yearContainer, monthContainer)

randomButton.addEventListener('click', () =>
{
    gallery.video.setRandomNumber()
});
previousButton.addEventListener('click', () =>
{
    gallery.video.setPrevious()
});
nextButton.addEventListener('click', () =>
{
    gallery.video.setNext()
});


// createYearList()




/**
 * Experience class
 */

// const experience = new Experience(canvas)\






