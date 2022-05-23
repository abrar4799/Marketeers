from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Home
from .serializers import HomeSeralizer
class HomeViewset(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSeralizer