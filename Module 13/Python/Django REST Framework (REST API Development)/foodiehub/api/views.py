from django.shortcuts import render
from django.http import JsonResponse,HttpResponse

# Create your views here.
def hello_spotify(request):
    return JsonResponse({"message": "Hello, Spotify Fans!"})


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
