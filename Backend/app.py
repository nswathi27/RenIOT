from flask import Flask, render_template, url_for
from flask.helpers import flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required
from flask_wtf import FlaskForm
from sqlalchemy.orm import session
from werkzeug.utils import redirect
from wtforms import StringField,PasswordField,SubmitField,IntegerField
from wtforms.validators import InputRequired,Length
import hashlib
from datetime import datetime
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request
from flask import jsonify 
from flask_mysqldb import MySQL



app = Flask(__name__,instance_relative_config=True)
CORS(app, resources={r"/*": {"origins": "*"}})


#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/infinosbox'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Royalexotica@123'
app.config['MYSQL_DB'] = 'infinosbox'
app.config['SECRET_KEY'] =  'shravanissshravanissshravaniss'
app.config['CORS_HEADERS'] = 'Content-Type'


db=SQLAlchemy(app)

@app.route("/demo", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def demo_fun():
    return jsonify({"Hello":"world"})

#userLogin
@app.route("/userLogin", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def userLogin():
    username={}
    if request.method == 'POST':
        #req = request.json
        #print(request.args.get("uname"))
        data = request.get_json().get('uname')
        #username = data['uname']
    return jsonify(data)

#userSignUp
@app.route("/userSignUp", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def userSignUp():
    if request.method == 'POST':
        #req = request.json
        #print(request.args.get("uname"))
        data = request.get_json()
    return data

#boxLogin
@app.route("/boxLogin", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def boxLogin():
    if request.method == 'POST':
        #req = request.json
        #print(request.args.get("uname"))
        data = request.get_json()
    return data


#boxSignUp
@app.route("/boxSignUp", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def boxSignUp():
    if request.method == 'POST':
        #req = request.json
        #print(request.args.get("uname"))
        data = request.get_json()
    return data

app.run(debug=True)
    
    
    
    
    
    
    
    
    
    
    
    
    # if request.method == 'POST':
    #req = request.json
    #return jsonify(data = request.args.get("uname"))
    
    
    #http://127.0.0.1:5000/