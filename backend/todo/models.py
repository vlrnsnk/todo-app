from django.db import models

class Task(models.Model):
    title = models.TextField(blank=False)
    detail = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
