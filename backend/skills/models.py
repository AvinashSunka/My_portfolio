from django.db import models

# Create your models here.

class SkillCategory(models.Model):
    name = models.CharField(max_length=50)  # e.g., Frontend, Backend, DevOps
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=50)  # e.g., Python, React, Docker
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE, related_name="skills")
    proficiency = models.IntegerField(default=0, help_text="0 to 100 scale")  # for progress bars or star ratings
    icon = models.ImageField(upload_to='skill_icons/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)  # display order in frontend

    def __str__(self):
        return self.name
