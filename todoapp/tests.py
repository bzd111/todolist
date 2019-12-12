from django.test import TestCase

# Create your tests here.
from rest_framework.test import APITestCase

from todoapp.models import Todo


class TodoTestCase(APITestCase):
    def test_get_all(self):
        resp = self.client.get("/todos/")
        assert resp.status_code == 200

    def test_get_today(self):
        resp = self.client.get("/todos/today/")
        assert resp.status_code == 200
