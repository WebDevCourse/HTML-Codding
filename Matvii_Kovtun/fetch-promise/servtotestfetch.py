from flask import Flask
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return random.choice(['Hello, World!', 'Hello Misha!', 'Hello Mihaluch!'])



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)