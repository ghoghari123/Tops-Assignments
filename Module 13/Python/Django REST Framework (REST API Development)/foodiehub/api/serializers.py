from rest_framework import serializers
from .models import *

class RestaurantSerializer(serializers.ModelSerializer):
   class Meta:
      models = Restaurant
      fields = '__all__'