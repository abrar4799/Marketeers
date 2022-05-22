from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Accounts
from .serializers import AccountsSeralizer
class AccountsViewset(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSeralizer

