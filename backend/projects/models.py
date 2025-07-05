from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=300, blank=True)
    detailed_description = models.TextField(blank=True)
    
    github_url = models.URLField(blank=True)
    live_demo_url = models.URLField(blank=True)
    readme_sync_enabled = models.BooleanField(default=False)  # fetch README.md
    
    tech_stack = models.CharField(max_length=255, help_text="Comma-separated list of technologies")
    
    thumbnail = models.ImageField(upload_to='project_thumbnails/', blank=True, null=True)
    created_at = models.DateField()
    updated_at = models.DateField(auto_now=True)

    is_featured = models.BooleanField(default=False)  # for homepage/landing section
    order = models.PositiveIntegerField(default=0)  # for frontend ordering

    def __str__(self):
        return self.title
