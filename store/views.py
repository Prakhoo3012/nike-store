from django.shortcuts import render
from django.http import HttpResponse
from .models import Popular, SalesProduct

# Create your views here.


def index(request):
    popular = Popular.objects.all()
    sales = SalesProduct.objects.all()
    return render(request, "store/footer.html", {
        "popular": popular,
        "top": sales
    })
