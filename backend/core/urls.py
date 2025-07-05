from django.urls import path
from .views import PersonalInfoView, SocialLinkView, TaglineView, PortfolioDataView

urlpatterns = [
    path('personal-info/', PersonalInfoView.as_view()),
    path('social-links/', SocialLinkView.as_view()),
    path('taglines/', TaglineView.as_view()),
    path('personalInfoComplete/', PortfolioDataView.as_view()),
]
