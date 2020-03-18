from django.contrib.auth.models import AbstractUser


# [BAY] This is a preparation for the future
# At the moment, we can use the example user from Django
# However, in the future, we may need to adjust it.
# Please look at AbstractUser Class for more info
class CustomUser(AbstractUser):
    pass