from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home.as_view()),
    path('get-coords', views.getCoords, name='get-coords')
]
