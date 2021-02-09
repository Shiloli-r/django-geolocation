# django-geolocation
A django geolocation project

Follow GeoDjango Installation Instructions at 
https://docs.djangoproject.com/en/3.1/ref/contrib/gis/install

Create the database using Docker, by typing:
docker run --name=postgis -d -e POSTGRES_USER=postgres -e POSTGRES_PASS=ronnie -e POSTGRES_DBNAME=gis -p 5432:5432 kartoza/postgis:9.6-2.4

get the json data from the wizard at https://overpass-turbo.eu/
Create and run query then Download the data as raw OSM data