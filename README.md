![](http://images.restapi.co.za/pvt/Noroff-64.png)
# Back-end Development Year 1

 ## SRV Module 2 Lesson 5 Self Study (MySQL Cloud)
NOTE: Remember to create the .env file with the information for your database. The username, password, database and host information needs to be in the .env file. This information you can get from the cloud platform

#### This script can be used to insert some countries
```sql
INSERT INTO Countries (name) VALUES
('United States'),
('Canada'),
('United Kingdom'),
('Australia'),
('Japan'),
('Germany'),
('France'),
('Italy'),
('Spain'),
('China'),
('India'),
('Brazil'),
('Norway'),
('Mexico'),
('Russia'),
('South Africa');
```

### 2.5. Lesson - Self-study
## Lesson task

# In this lesson, you need to create the following application and connect the application to a MySQL cloud service.

1. Create an express application with the following endpoints:
    A. ``` /dishes ```
        i. POST - Adds a new dish to the database
        ii. Get - Gets a list of all the dishes

    B. ``` /dishes/:dishname ```
        i.  GET - Gets details of dishes of the provided dish name

2. Each dish has a name and country. The country field represents the country it comes from. You can assume data from the request will be in the correct format. If the client tries to add a dish from the same country with the same name, the application should return a message stating that this country already has a dish with the same name (there can be only one dish per country with the same name). 