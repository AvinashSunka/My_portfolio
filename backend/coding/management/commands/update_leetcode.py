from django.core.management.base import BaseCommand
from coding.services import sync_leetcode_profile

class Command(BaseCommand):
    help = "Sync LeetCode profile stats"

    def add_arguments(self, parser):
        parser.add_argument('username', type=str)

    def handle(self, *args, **kwargs):
        username = kwargs['username']
        self.stdout.write(f"Syncing stats for: {username}")
        sync_leetcode_profile(username)
        self.stdout.write(self.style.SUCCESS("Successfully updated stats"))
