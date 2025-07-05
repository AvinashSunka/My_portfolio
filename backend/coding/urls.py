from django.urls import path
from .views import CodingProfileView

urlpatterns = [
    path("leetcode-stats/", CodingProfileView.as_view(), name="leetcode-stats")
]
