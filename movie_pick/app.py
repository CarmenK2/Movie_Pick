# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

import pandas as pd

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


@app.route("/test")
def pals():
    results = "https://moviepickfiles.s3.us-east-2.amazonaws.com/data_to_filter_df.csv"
    df = pd.read_csv(results)
    #json_ = df.to_json(orient="table")

    return df.to_json(orient="index")

if __name__ == "__main__":
    app.run(debug=True)
