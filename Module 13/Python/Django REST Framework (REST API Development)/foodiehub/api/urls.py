from django.urls import path
from .views import *

urlpatterns= [
    path('',hello_spotify,name="hello_spotify"),
    path('restaurant/',RestaurantListCreateAPIView.as_view(),name="RestaurantListCreateAPIView"),
    path('restaurant/',RestaurantDetailAPIView.as_view(),name="RestaurantDetailAPIView"),
    path('restaurants/',RestaurantsListCreateAPIView.as_view(),name="RestaurantsListCreateAPIView"),
    path('restaurants/<int:pk>/',RestaurantsDetailView.as_view(),name="RestaurantsDetailView")
]