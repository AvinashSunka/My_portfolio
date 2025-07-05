from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CodingProfile
from .serializers import CodingProfileSerializer

class CodingProfileView(APIView):
    def get(self, request):
        profiles = CodingProfile.objects.all()
        serializer = CodingProfileSerializer(profiles, many=True)
        return Response(serializer.data)
