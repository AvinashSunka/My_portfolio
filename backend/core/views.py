from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import PersonalInfo, SocialLink, Tagline
from .serializers import PersonalInfoSerializer, SocialLinkSerializer, TaglineSerializer

class PersonalInfoView(generics.ListAPIView):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer

class SocialLinkView(generics.ListAPIView):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class TaglineView(generics.ListAPIView):
    queryset = Tagline.objects.all()
    serializer_class = TaglineSerializer


class PortfolioDataView(APIView):
    def get(self, request):
        personal_info = PersonalInfo.objects.first()  # Assuming only one
        social_links = SocialLink.objects.all()
        taglines = Tagline.objects.all()

        data = {
            'personal_info': PersonalInfoSerializer(personal_info).data,
            'social_links': SocialLinkSerializer(social_links, many=True).data,
            'taglines': TaglineSerializer(taglines, many=True).data,
        }
        return Response(data)
