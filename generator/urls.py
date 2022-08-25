from django.urls import path
from generator.views import CableDocumentationView, generate_cable_documentation

urlpatterns = [
    path('', CableDocumentationView.as_view(), name='cable_documentation'),
    path('generate_cable_documentation/', generate_cable_documentation, name='generate_cable_documentation'),
]
