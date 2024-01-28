import Video from "./Video";
import List from "./UI/List";

export default class Gallery
{
    constructor(video, yearContainer, monthContainer)
    {
        // console.log('start Gallery');

        this.videoCanvas = video
        this.yearContainer = yearContainer
        this.monthContainer = monthContainer

        this.video = new Video(this.videoCanvas)
        this.list = new List(this.yearContainer, this.monthContainer)

    }
}