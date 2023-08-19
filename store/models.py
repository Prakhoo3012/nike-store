from django.db import models

# Create your models here.


class SalesProduct(models.Model):
    product_name = models.CharField(max_length=256)
    product_desc = models.CharField(max_length=256)
    price = models.FloatField()
    rate = models.CharField(max_length=10)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return f"{self.product_name}"


class Popular(models.Model):
    product_name = models.CharField(max_length=256)
    product_desc = models.CharField(max_length=256)
    price = models.FloatField()
    rate = models.CharField(max_length=10)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return f"{self.product_name}"
