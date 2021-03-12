# django-geolocation
A django geolocation project undertaken as a learning venture

## setting up
The following are needed in setting up the project:

- Django 3+
- Docker (optional, for quick DB setting up)
- PostgreSQL DB
- PostGIS extension (for PostgreSQL DB)

To install GeoDjango,follow GeoDjango Installation Instructions at 
https://docs.djangoproject.com/en/3.1/ref/contrib/gis/install

Set up the database with PostgreSQL and PostGIS using docker, by running:
```
docker run --name=postgis -d -e 
POSTGRES_USER=postgres -e POSTGRES_PASS=ronnie -e POSTGRES_DBNAME=gis -p 5432:5432 kartoza/postgis:9.6-2.4
```
Note: change the values above as per your implementation

## Adding initial Data
Manual data entry can be cumbersome and error prone. The data.json file in this project contains data used in this project but you can use your own.
Get initial json data from the wizard at

 https://overpass-turbo.eu/

Create and run a query then Download the data as raw OSM data

Create an empty migration on your django model by running

```
python manage.py makemigraions myapp --empty
```

modify the load_data function in <i> 0004_auto_20210209_1101.py </i> migration file to values corresponding to the data you have downloaded. 
(If you use the data.json file in this project, that will not be necessary)

Run

```
python manage.py migrate
```

## `Note`
`This project, including this readme is still under development`