from django.shortcuts import render
from django.http import HttpResponse
from .models import Task

def home_view(request):
    return HttpResponse("Test")

def todo_detail_view(request, todo_id):
    obj = Task.objects.get(id=todo_id)
    return HttpResponse("<h1>test</h1>")
    # return HttpResponse(f"<h1>Title: {obj.title}, Detail: {obj.detail}</h1>")

