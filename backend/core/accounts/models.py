from django.db import models

# Create your models here.
class Accounts(models.Model):
    email = models.CharField(max_length=100 , null=False)
    password = models.CharField(null=False, max_length=300)
