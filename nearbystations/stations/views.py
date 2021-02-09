from .models import Station
from django.contrib.gis.geos import fromstr, Point
from django.contrib.gis.db.models.functions import Distance
from django.views import generic

longitude = 36.8160518
latitude = -1.2895272

user_location = Point(longitude, latitude, srid=4326)  # Uhuru Gardens, Nairobi Kenya
user = fromstr("POINT({} {})".format(longitude, latitude), srid=4326)


# Create your views here.
class Home(generic.ListView):
    model = Station
    context_object_name = 'stations'
    queryset = Station.objects.annotate(distance=Distance('location', user_location)).order_by('distance')[0:6]
    template_name = 'index.html'

