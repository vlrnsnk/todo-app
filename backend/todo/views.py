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
            serializer = TaskSerializer(tasks, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response({'message': 'Task added successfully', 'data': serializer.data}, status=201)

        return Response(serializer.errors, status=400)

    def put(self, request, task_id=None, format=None):
        task = self.get_task(task_id)
        serializer = TaskSerializer(task, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()

            return Response({'message': 'Task updated successfully', 'data': serializer.data})

        return Response(serializer.errors, status=400)
