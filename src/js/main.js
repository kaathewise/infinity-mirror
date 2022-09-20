import "./external/protobuf.js"
import { AmpChart } from "./chart.js"

const ampChart = new AmpChart(document.getElementById("amp_canvas"));

protobuf.load('static/proto/analyser.proto').then(root => {
    const AudioFrame = root.lookupType('AudioFrame');
    let socket = new WebSocket('ws://' + location.host + '/socket');
    socket.binaryType = 'arraybuffer';
    socket.onmessage = (ev => {
        let buffer = new Uint8Array(ev.data);
        let audioFrame = AudioFrame.decode(buffer);
        ampChart.addPoint(audioFrame.index, audioFrame.amplitude);
    });
});