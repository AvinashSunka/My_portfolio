from django.db import models


class PersonalInfo(models.Model):
    full_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200, blank=True)  # Optional tagline
    bio = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    resume_file = models.FileField(upload_to='resumes/', blank=True, null=True)
    location = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.full_name

    
class SocialLink(models.Model):
    PLATFORM_CHOICES = [
        ('linkedin', 'LinkedIn'),
        ('github', 'GitHub'),
        ('twitter', 'Twitter'),
        ('youtube', 'YouTube'),
        ('portfolio', 'Portfolio'),
        ('other', 'Other'),
    ]
    
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    url = models.URLField()
    icon = models.CharField(max_length=50, blank=True)  # e.g., "fa-brands fa-github"
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.platform.capitalize()}: {self.url}"


class Tagline(models.Model):
    text = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.text
