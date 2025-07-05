from rest_framework import serializers
from .models import CodingProfile

class CodingProfileSerializer(serializers.ModelSerializer):
    platform_name = serializers.CharField(source='platform.name', read_only=True)

    class Meta:
        model = CodingProfile
        fields = [
            'platform_name',
            'username',
            'profile_url',
            'ranking',
            'problems_solved',
            'easy_total',
            'medium_total',
            'hard_total',
            'easy_solved',
            'medium_solved',
            'hard_solved',
            'last_synced',
        ]
