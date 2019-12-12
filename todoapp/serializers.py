from datetime import datetime

from django.utils.dateparse import parse_datetime
from rest_framework import serializers

from todoapp.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    def to_representation(self, value):
        data = super().to_representation(value)
        data["created"] = parse_datetime(data["created"]).strftime("%Y-%m-%d %H:%M:%S")
        data["updated"] = parse_datetime(data["updated"]).strftime("%Y-%m-%d %H:%M:%S")
        return data

    date = serializers.SerializerMethodField("get_create_date")

    class Meta:
        model = Todo
        fields = ("id", "content", "status", "created", "updated", "date")
        read_only_fields = ("created", "id")
        extra_kwargs = {"content": {"required": False}}

    def get_create_date(self, obj):
        return obj.created.date()
