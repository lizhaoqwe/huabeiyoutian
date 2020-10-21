from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=100,unique=True,null=False,verbose_name='分类')
    class Meta:
        db_table = 'Category'