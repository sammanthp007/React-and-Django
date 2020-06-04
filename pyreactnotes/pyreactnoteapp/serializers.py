from rest_framework import serializers
from .models import Todo


# In the code snippet above, we specified the model to work with and the fields we want to be 
# converted to JSON.
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
