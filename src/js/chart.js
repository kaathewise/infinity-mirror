import { WebglPlot, WebglLine, ColorRGBA } from "./external/webglplot.esm.min.js"

export class AmpChart {
    constructor(canvas) {
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        
        const numX = 200000;
        this.counter = 0;
        this.wglp = new WebglPlot(canvas);

        const color = new ColorRGBA(Math.random(), Math.random(), Math.random(), 1);
        this.line = new WebglLine(color, numX);
        this.line.arrangeX(0,numX);
        this.wglp.addLine(this.line);
    }

    addPoint(x,y) {
        this.line.setY(x,y/5000);
        if (!this.counter) {
            this.wglp.update();
        }
        this.counter = (this.counter + 1) % 5000;
    }
}