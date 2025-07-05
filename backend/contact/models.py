from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone_number = PhoneNumberField(blank=True, null=True)
    subject = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
