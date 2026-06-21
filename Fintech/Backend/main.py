from flask import Flask, jsonify
from flask_cors import CORS #CORS is a rule that tells the browser whether a frontend application is allowed to access resources from another server.

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend Running Successfully"

@app.route("/hello")
def hello():
    return jsonify({"message": "Hello World"})

if __name__ == "__main__":
    app.run(debug=True)