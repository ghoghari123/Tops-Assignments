from django.urls import path
from .views import *

urlpatterns= [
    path('',hello_spotify,name="hello_spotify")
]