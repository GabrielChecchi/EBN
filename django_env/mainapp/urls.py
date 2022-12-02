from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index_screen, name = ""),
    path('autenticacion/', views.login_screen, name = "autenticacion"),
    path('productos/', views.products_screen, name = "productos"),
    path('sobre-mi/', views.about_me_screen, name = "sobre-mi"),

    #path('autenticar_usuario/', views.autenticar),
]