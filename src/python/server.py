from flask import Flask, render_template
from flask_sock import Sock
from proto.analyser_pb2 import AudioFrame
import analyser

app = Flask(__name__)
sock = Sock(app)


@app.route('/')
def index():
    return render_template('index.html')


@sock.route('/socket')
def socket(ws):
    for frame in analyser.frame_stream():
        ws.send(frame.SerializeToString())

