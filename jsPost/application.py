from flask import Flask, render_template, request, redirect, jsonify, make_response
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/upload-image', methods=["GET","POST"])
def upload_image():
    if request.method == 'POST':
        if request.files:
            image = request.files["image"]
            print(image)
            return redirect
    return render_template("canvas.html")

if __name__ == '__main__':
    app.run(debug=True)