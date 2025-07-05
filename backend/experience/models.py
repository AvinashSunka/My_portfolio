from django.db import models

# Create your models here.
class Experience(models.Model) :

    company_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    job_type = models.CharField(choices=[('intern', 'Internship'), ('full-time', 'Full Time')])
    location = models.CharField(max_length=100, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)  # Null = currently working
    is_current = models.BooleanField(default=False)  # Optional, for current role
    description = models.TextField(blank=True)  # Role responsibilities, achievements
    technologies = models.CharField(max_length=255, blank=True)  # E.g., Django, React
    logo = models.ImageField(upload_to='experience_logos/', blank=True, null=True)  # Optional
    order = models.PositiveIntegerField(default=0)  # For ordering in frontend

    def __str__(self):
        return self.name
    