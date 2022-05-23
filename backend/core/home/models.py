from django.db import models

# Create your models here.
class Home(models.Model):
    numbers = models.CharField(max_length=100 , null=False)
    
