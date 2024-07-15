from django.shortcuts import render
from django.http import HttpResponse
from .models import Todo

def home_view(request):
    return HttpResponse("Test")

def todo_detail_view(request, todo_id):
    obj = Todo.objects.get(id=todo_id)
    return HttpResponse(f"<h1>Title: {obj.title}, Detail: {obj.detail}</h1>")
