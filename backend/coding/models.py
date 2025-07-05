from django.db import models


class CodingPlatform(models.Model):
    name = models.CharField(max_length=50, unique=True)  # e.g., LeetCode, Codeforces, GFG
    logo = models.ImageField(upload_to='platform_logos/', blank=True, null=True)
    website_url = models.URLField(blank=True)

    def __str__(self):
        return self.name


class CodingProfile(models.Model):
    platform = models.ForeignKey(CodingPlatform, on_delete=models.CASCADE, related_name='profiles')
    username = models.CharField(max_length=100)
    profile_url = models.URLField(blank=True)

    # Dynamic stats fields
    problems_solved = models.PositiveIntegerField(default=0)
    rating = models.FloatField(blank=True, null=True)  # e.g., Codeforces rating
    ranking = models.CharField(max_length=50, blank=True)  # e.g., "Top 10%"
    contests_participated = models.PositiveIntegerField(default=0)

    # Sync meta
    last_synced = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    sync_status = models.CharField(max_length=100, blank=True)  # e.g., "Success", "Error", etc.
    last_error = models.TextField(blank=True)

    easy_solved = models.IntegerField(default=0)
    medium_solved = models.IntegerField(default=0)
    hard_solved = models.IntegerField(default=0)

    easy_total = models.IntegerField(default=0)
    medium_total = models.IntegerField(default=0)
    hard_total = models.IntegerField(default=0)

    class Meta:
        unique_together = ('platform', 'username')

    def __str__(self):
        return f"{self.username} on {self.platform.name}"
