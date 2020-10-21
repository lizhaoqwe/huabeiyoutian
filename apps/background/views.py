from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from django.views.decorators.http import require_GET,require_POST
from .models import Category
def index(request):
    return render(request, 'background/index.html')

def upload(request):
    pass
def add_article(request):
    if request.method == "POST":
        title = request.POST.get('title')
        describe = request.POST.get('describe')
        content = request.POST.get('content')
        print(title,describe,content)
        return JsonResponse({"content":"ok"})
    else:
        return render(request, 'background/publish.html')
@require_GET
def category(request):
    return render(request, 'background/category.html')
@require_POST
def add_category(request):
    filename = request.POST.get('filename')
    file = Category.objects.filter(name=filename).exists()
    if file:
        return JsonResponse({
            'code':'500',
            'message':'该分类已存在',
            'data':''
        })
    Category.objects.create(name=filename)
    return JsonResponse({
        'code': '200',
        'message': '',
        'data': ''
    })