from django.urls import path
from .views import TaskAPIView

urlpatterns = [
    path('tasks/', TaskAPIView.as_view()),
    path('tasks/<int:task_id>/', TaskAPIView.as_view()),
]
