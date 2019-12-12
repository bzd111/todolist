from django.urls import include, path
from rest_framework import routers

from todoapp.views import TodosViewSet

router = routers.SimpleRouter()
router.register(r"todos", TodosViewSet)

urlpatterns = router.urls
