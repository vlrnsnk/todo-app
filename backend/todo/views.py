from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

class TaskAPIView(APIView):
    def get_task(self, task_id):
        try:
            return Task.objects.get(id=task_id)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, task_id=None, format=None):
        if task_id:
            task = self.get_task(task_id)
            serializer = TaskSerializer(task)
        else:
            tasks = Task.objects.all()
            serializer = TaskSerializer(tasks)
        return Response(serializer.data)

# def home_view(request):
#     return HttpResponse("Test")

# def task_detail_view(request, task_id):
#     obj = Task.objects.get(id=todo_id)
#     return HttpResponse(f"<h1>Title: {obj.title}, Detail: {obj.detail}</h1>")
