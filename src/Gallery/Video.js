import util from 'canvas-sketch-util'

export default class Video
{
    constructor(video)
    {
        // console.log('start Video');

        this.instance = video

        this.number = 4

        this.previousStatus = null

        this.setRandomNumber()
    }

    setRandomNumber()
    {
        this.randomNumber = util.random.rangeFloor(1, this.number + 1)

        if (this.randomNumber < 10)
        {
            this.randomNumber = '0' + this.randomNumber
        }

        if (this.previousStatus)
        {
            if (this.randomNumber === this.previousStatus)
            {
                this.setRandomNumber()
            }
        }

        if (!this.previousStatus)
        {
            this.previousStatus = this.randomNumber
        }

        this.instance.innerHTML = ` <source src="/Video/video-${this.randomNumber}.mp4" type="video/mp4"></source> `

        this.instance.addEventListener('loadedmetadata', () => 
        {
            if (this.instance) this.instance.play();
        });

        this.instance.load();
    }

    setPrevious()
    {
        console.log('setPrevious');
    }

    setNext()
    {
        console.log('setNext');
    }
}