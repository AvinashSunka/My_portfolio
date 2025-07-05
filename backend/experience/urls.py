from django.urls import path
from .views import ExperienceView

urlpatterns = [
    path('experience-info/', ExperienceView.as_view()),
]