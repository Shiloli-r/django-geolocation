from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Station


# Register your models here.
@admin.register(Station)
class StationAdmin(OSMGeoAdmin):
    list_display = ('name', 'location')
    list_filter = ['name', 'city', 'address']
