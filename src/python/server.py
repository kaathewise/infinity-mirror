from flask import Flask, render_template
from flask_sock import Sock


app = Flask(__name__)
sock = Sock()


@app.route('/')
def index():
    return render_template('index.html')


@sock.route('/socket')
def socket(ws):
    pass

