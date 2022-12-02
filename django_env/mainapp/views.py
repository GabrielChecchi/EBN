from django.shortcuts import render

# Create your views here.

def index_screen(request):
    return render(request, "index.html")

def login_screen(request):
    return render(request, "login.html")

def products_screen(request):
    return render(request, "products.html")

def about_me_screen(request):
    return render(request, "about_us.html")