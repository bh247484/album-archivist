from PIL import Image
import requests, math, random
import numpy as np

from pydantic import BaseModel

class Req(BaseModel):
    url: str

def analyze_image(url):
    payload = {
      'key': '',
      'rgb_means': [],
      'hsv_means': [],
      'rhythm': []
    }

    img = Image.open(requests.get(url, stream=True).raw)

    # def bound(value, low=0, high=11):
    #     diff = high - low
    #     return (((value - low) % diff) + low)

    # payload['key'] = bound(img.height * img.width)
    payload['key'] = ((img.height * img.width) + random.randint(0, 10)) % 12

    red = np.array(img.getchannel('R'))
    green = np.array(img.getchannel('G'))
    blue = np.array(img.getchannel('B'))

    payload['rgb_means'] = [math.floor(np.mean(red)), math.floor(np.mean(green)), math.floor(np.mean(blue))]

    ni = img.convert('HSV')
    hue = np.array(ni.getchannel('H'))
    sat = np.array(ni.getchannel('S'))
    bright = np.array(ni.getchannel('V'))

    payload['hsv_means'] = [math.floor(np.mean(hue)), math.floor(np.mean(sat)), math.floor(np.mean(bright))]

    avg_val = (int(red[0][0]) + int(green[0][0]) + int(blue[0][0])) / 3

    bin_str = bin(math.floor(avg_val))

    padding_arr = ['1','0','0','0','0','0','0','0']

    # interleave binary
    rhythm = [val for pair in zip(padding_arr, bin_str) for val in pair]
    rhythm.remove('b')
    rhythm.append(bin_str[-1])
    # convert to ints
    rhythm = [int(char) for char in rhythm]

    payload['rhythm'] = rhythm

    print(payload)
    return payload
