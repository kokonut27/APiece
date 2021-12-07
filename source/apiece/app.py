import os
from flask import Flask, render_template, request, session, url_for, redirect, flash, send_from_directory
import json
import requests
import shutil

app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')
# app.config["static"] = 'static/'


def e():
  @app.route('/')
  def index():
    return "e"
  if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
