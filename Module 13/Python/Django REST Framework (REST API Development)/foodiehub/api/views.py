from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,generics,mixins
from .models import *
from .serializers import *

# Create your views here.
def hello_spotify(request):
    return JsonResponse({"message": "Hello, Spotify Fans!"})

class RestaurantListCreateAPIView(APIView):
    def get(self,request):
        restaurant = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurant,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK) 

    def post(sels,request):
        serializer = RestaurantSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

class RestaurantDetailAPIView(APIView):
    def get_object(self,pk):
        try:
            return Restaurant.objects.get(pk = pk)
        except Restaurant.DoesNotExist:
            return None

    def put(self,request,pk):
        restaurant = self.get_object(pk)

        if not restaurant:
            return (self.response({"error":"Restaurant Not Found"},status = status.HTTP_404_NOT_FOUND))
        serializer = RestaurantSerializer(restaurant,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def patch(self,request,pk):
        restaurant = self.get_object(pk)
        
        if not restaurant:
            return (self.response({"error":"Restaurant Not Found"},status = status.HTTP_404_NOT_FOUND))
        serializer = RestaurantSerializer(restaurant,data = request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        restaurant = self.get_object(pk)
        if not restaurant:
            return (self.response({"error":"Restaurant Not Found"},status = status.HTTP_404_NOT_FOUND))
        return Response({"msg":"Restaurant Deleted Sucessfully"},status=status.HTTP_200_OK)
                
# ===============================================================

# Compare JSON and XML [ Flipkart product with name and price ]

# JSON:{
#     "name" : "iphone_24",
#     "price" : 45000
# }

# XML:
# <product>
#     <name> iphone 14 </name>
#     <price> 45000 </price>
# </product>

# ====================GenericAPIView ======================

class RestaurantsListCreateAPIView(
    mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView
):

    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get(self, request, *args, **kwargs): 
        return self.list(request, *args, **kwargs)
     
    def post(self, request, *args, **kwargs): 
        return self.create(request, *args, **kwargs) 

class RestaurantsDetailView(
mixins.UpdateModelMixin,
mixins.DestroyModelMixin,
generics.GenericAPIView
):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
