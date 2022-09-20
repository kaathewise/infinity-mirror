from flask import Flask, render_template
from flask_sock import Sock
from .proto.analyser_pb2 import AudioFrame
from time import sleep

app = Flask(__name__)
sock = Sock(app)


@app.route('/')
def index():
    return render_template('index.html')


@sock.route('/socket')
def socket(ws):
    while True:
        frame = AudioFrame()
        frame.index = 1
        frame.amplitude = 100
        ws.send(frame.SerializeToString())
        sleep(1)

