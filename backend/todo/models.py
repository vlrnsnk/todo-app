from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=100)
    detail = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)

    class Meta:
        db_table = 'tasks'

    def __str__(self):
        return self.title
