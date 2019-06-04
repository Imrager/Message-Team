from rest_framework import serializers
from .models import Post, Comment, User

class PostSerializer(serializers.HyperlinkedModelSerializer):
    comment = serializers.HyperlinkedRelatedField(
        view_name='comment-detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Post
        fields = ('created_at', 'title', 'picture', 'content', 'site_url', 'vote_total')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.HyperlinkedRelatedField(
        view_name='post-detail',
        read_only=True
    )
    class Meta:
        model = Comment
        fields = ('created_at', 'content', 'vote_total', 'image_url', 'post',)

class UserSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.HyperlinkedRelatedField(
        view_name='post-detail',
        read_only=True
    )
    class Meta:
        model = Comment
        fields = ('created_at', 'content', 'vote_total', 'image_url', 'post',)