from django.db import models

# Create your models here.


class Post(models.Model):
    created_at = models.DateField()
    title = models.CharField(default = '', max_length = 100)
    picture = models.ImageField(default = '', max_length = 100)
    content = models.CharField(default = '', max_length = 100)
    site_url = models.URLField(default = '', max_length = 100)
    vote_total = models.Integer(default = '', max_length = 100)

    def __str__(self):
        return self.title

class User(models.Model):
   email = models.CharField(max_length=100)
   password = models.CharField(max_length=100)
   username = models.TextField(max_length=100)

   def __str__(self):
       return self.email

class Comments(models.Model):
    created_at = models.DateField()
    content = models.CharField(max_length=1000)
    vote _total = models.IntegerField(max_length=100)
    image_url = models.CharField(max_length=100)
    post = models.ForeignKey(
        'Post',
        on_delete=models.CASCADE,

    def __str__(self):
        return self



