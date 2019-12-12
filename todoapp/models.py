from django.db import models

# Create your models here.
class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=False)
    content = models.TextField()

    class Meta:
        db_table = "todos"
        ordering = ("created",)
