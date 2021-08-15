
Make the virtual enviroment by running the command ```python3 -m venv env```
Acivate the virtual environment by running the command ```source env/bin/activate``` or ```env\scripts\activate``` for windows
Install all the dependencies.
dependencies are:-
<ul>
  <li>flask</li>
  <li>flask-sqlalchemy</li>
  <li>flask-login</li>
  <li>flask-wtf</li>
  <li>flask-cors</li>
  <li>flask-mysqldb</li>
  </ul>
  
  to install dependencies the commmand is ```pip install ~dependency-name~```
  You may get error while installing flask-mysqldb for that follow these instruction:-
<ul>
  <li>install ```pip install wheel``` </li>
  <li>install ```sudo apt-get install libmysqlclient-dev``` first</li>
  <li>install ```pip install flask-mysqldb```</li>
 </ul>
 
 Hope that works!
  
