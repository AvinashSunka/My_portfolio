from rest_framework import serializers
from .models import Experience

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
            # 'company_name',
            # 'job_title',
            # 'job_type',
            # 'location',
            # 'start_date',
            # 'end_date',
            # 'is_current',
            # 'description',
            # 'technologies',
            # 'logo',
            # 'order',