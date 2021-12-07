from flask import Flask, render_template, request, session, url_for, redirect, flash, send_from_directory
import json
import os
from flask_session import Session
import requests
import shutil

app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')
app.config["SECRET_KEY"] = os.environ["key"]
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
# app.config["static"] = 'static/'
Session(app)


def e():
  @app.route('/')
  def index():
    return "e"

  app.run(host="0.0.0.0", port=5050)

e()

