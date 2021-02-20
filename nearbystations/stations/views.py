from django.shortcuts import render
from .models import Station
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models.functions import Distance

# longitude = 36.7948285
# latitude = -1.3005535


# Create your views here.
def home(request):
    if request.method == 'GET':
        longitude = request.GET.get('longitude')
        latitude = request.GET.get('latitude')
        if longitude and latitude:
            user_location = Point(float(longitude), float(latitude), srid=4326)
            print(user_location)
            stations = Station.objects.annotate(distance=Distance('location', user_location)).order_by('distance')[0:6]
            context = {
                'stations': stations
            }
            return render(request, "index.html", context)
    return render(request, 'index.html')

