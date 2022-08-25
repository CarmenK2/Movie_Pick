#import os
from flask import Flask, render_template, redirect
#from flask_pymongo import PyMongo
#import pymongo
#from flask import Response 
# from bson import json_util
# from flask import jsonify
# import json
# from bson.json_util import ObjectId


# Create an instance of Flask
app = Flask(__name__)



# Route to render index.html template
@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")

# Route to render visualisation.html template
@app.route("/visualization")
def visualization():

    return render_template("visualization.html")

if __name__ == "__main__":
    app.run(debug=True)
