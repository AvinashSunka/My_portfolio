from rest_framework import serializers
from .models import PersonalInfo, SocialLink, Tagline

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = [
            'full_name',
            'title',
            'subtitle',
            'bio',
            'profile_image',
            'resume_file',
            'location',
            'email',
            'phone_number',
        ]

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = [
            'platform',
            'url',
            'icon',
            'order',
        ]

class TaglineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tagline
        fields = [
            'text',
            'order',
        ]
