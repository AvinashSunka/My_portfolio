from rest_framework import generics
from .models import Skill, SkillCategory
from .serializers import SkillSerializer, SkillCategorySerializer

class SkillCategoryView(generics.ListAPIView):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer


class SkillView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer