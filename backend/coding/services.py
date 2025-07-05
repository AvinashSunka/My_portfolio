from .models import CodingPlatform, CodingProfile
from .graphQL.leetcode import fetch_leetcode_stats

def sync_leetcode_profile(username):
    data = fetch_leetcode_stats(username)

    platform, _ = CodingPlatform.objects.get_or_create(
        name="LeetCode", defaults={"website_url": "https://leetcode.com"}
    )

    profile, _ = CodingProfile.objects.get_or_create(
        platform=platform,
        username=username,
        defaults={"profile_url": f"https://leetcode.com/{username}"}
    )

    # ⬇️ Updated based on new return structure
    profile.problems_solved = data['solved_problems']['All']
    profile.ranking = f"Rank {data['ranking']}"


    profile.easy_solved = data['solved_problems']['Easy']
    profile.medium_solved = data['solved_problems']['Medium']
    profile.hard_solved = data['solved_problems']['Hard']


    profile.easy_total = data['total_problems']['Easy']
    profile.medium_total = data['total_problems']['Medium']
    profile.hard_total = data['total_problems']['Hard']

    profile.save()
