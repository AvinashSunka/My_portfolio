from django.urls import path
from .views import ProjectView

urlpatterns = [
    path('project-info/', ProjectView.as_view()),
]