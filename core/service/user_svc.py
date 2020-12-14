from core.models import User

def create_user(first_name, last_name, username, email, password):
    if User.objects.filter(email=email).count() == 0:
        user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
        user.save()