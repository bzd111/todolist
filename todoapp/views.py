from datetime import datetime, timedelta
import logging

from django.shortcuts import render
from django.db.models import Q
from django.shortcuts import render
from rest_framework import generics, mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from todoapp.models import Todo
from todoapp.serializers import TodoSerializer

# Create your views here.
logger = logging.getLogger("django")


def index(request):
    return render(request, 'index.html')


class TodosViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    @action(detail=False, methods=["get"])
    def today(self, request, pk=None):
        today = datetime.today().date()
        tomorrow = today + timedelta(days=1)

        todos = Todo.objects.filter(Q(created__gt=today) & Q(created__lte=tomorrow))
        logger.debug(f"todos today: {todos}")
        serializer = self.get_serializer(todos, many=True)
        return Response(serializer.data)
