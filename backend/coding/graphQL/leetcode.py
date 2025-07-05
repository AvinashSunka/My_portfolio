from django.core.cache import cache
import requests

def fetch_leetcode_stats(username):
    cache_key = f"leetcode_stats_{username}"
    cached_data = cache.get(cache_key)

    if cached_data:
        return cached_data

    url = "https://leetcode.com/graphql"
    query = """
    query getUserProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
        }
      }
    }
    """
    variables = {"username": username}
    response = requests.get(url, json={"query": query, "variables": variables})

    if response.status_code != 200:
        raise Exception("LeetCode API failed with status: " + str(response.status_code))

    json_data = response.json()
    data = json_data.get("data", {})
    user_data = data.get("matchedUser")
    all_questions = data.get("allQuestionsCount")

    if not user_data or not all_questions:
        raise Exception("User not found or question data missing.")

    # Process solved problems
    solved_stats = {item["difficulty"]: item["count"] for item in user_data["submitStats"]["acSubmissionNum"]}
    total_stats = {item["difficulty"]: item["count"] for item in all_questions}
    profile = user_data["profile"]

    print(total_stats)

    result = {
        "username": user_data.get("username", ""),
        "ranking": profile.get("ranking", "Unranked"),
        "total_problems": {
            "Easy": total_stats.get("Easy", 0),
            "Medium": total_stats.get("Medium", 0),
            "Hard": total_stats.get("Hard", 0),
            "All": total_stats.get("All", 0),
        },
        "solved_problems": {
            "Easy": solved_stats.get("Easy", 0),
            "Medium": solved_stats.get("Medium", 0),
            "Hard": solved_stats.get("Hard", 0),
            "All": solved_stats.get("All", 0),
        },
    }

    cache.set(cache_key, result, timeout=60 * 60 * 24)  # Cache for 24 hours
    return result
