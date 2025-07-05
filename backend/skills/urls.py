from django.urls import path
from .views import SkillView, SkillCategoryView

urlpatterns = [
    path('skillView-info/', SkillView.as_view()),
    path('skillCategory-info/', SkillCategoryView.as_view()),
]