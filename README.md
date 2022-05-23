# Marketeers
Junior Full-Stack Developer Position Task.
- First Page with Login Interface. 
- Second Page two calculate percentage from input number and anther from database. 

# APIs
- Login API http://127.0.0.1:8000/account/account/
- Numbers API http://127.0.0.1:8000/home/home/
 
# Setup 
 To get started with this project we highly recommend the following:
 - git clone https://github.com/abrar4799/Marketeers.git in your terminal or download ZIP file.
 - Front End:
     - cd frontend
     - npm install
     - npm start
- Back End:
     - Follow databas instructions to setup it in ypur local host and don't forget to migrate it.
     - cd backend/core
     - pip install django djangorestframework
     - python3 manage.py runserver
      
# Database
- create database marketeers;
- create user marketeersuser with password '123';
- grant all privileges on database marketeers to marketeersuser;
- \q
- psql -h localhost -U clinicuser clinic

