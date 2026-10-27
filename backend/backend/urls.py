from django.contrib import admin
from django.urls import path
from productos.views import lista_productos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/productos/', lista_productos),
]
