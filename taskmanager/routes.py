from flask import render_template
from taskmanager import app, db
from taskmanager.models import Category, Task


@app.route("/")
def home():
    return render_template("base.html")


@app.route("/tasks.html")
def tasks():
    return render_template("tasks.html")