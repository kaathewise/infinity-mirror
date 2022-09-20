import wave
import numpy as np
from proto.analyser_pb2 import AudioFrame

wav = wave.open('recorded.wav', 'rb')
rate = wav.getframerate()
nframes = wav.getnframes()

T = nframes/rate
frames = np.frombuffer(wav.readframes(nframes), dtype=np.int16)

def frame_stream():
    for i,a in enumerate(frames):
        yield AudioFrame(index=i,amplitude=a)