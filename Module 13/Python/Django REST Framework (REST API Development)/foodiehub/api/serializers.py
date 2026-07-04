from rest_framework import serializers
from .models import *

class RestaurantSerializer(serializers.ModelSerializer):
   class Meta:
      models = Restaurant
      fields = ['id','name','cuisine','rating']