from rest_framework import serializers
from .models import Accounts

class AccountsSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = '__all__' 
