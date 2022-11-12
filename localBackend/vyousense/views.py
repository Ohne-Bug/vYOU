from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import never_cache
from .sensors import Distance, Temperature

import datetime

last_person_when = None
people_counter = 0

@never_cache
def temperature(request):
	t = 0.0
	try:
		t = Temperature.check_temperature()
	except:
		return JsonResponse({"status": "ko"})
	return JsonResponse({"status": "ok", "data": {"temperature": t}})

@never_cache
def proximity(request):
	p = 0.0
	try:
		p = Distance.check_distance()
	except:
		return JsonResponse({"status": "ko"})
	return JsonResponse({"status": "ok", "data": {"distance": p}})

@csrf_exempt
def person_detected(request):
	global people_counter, last_person_when
	if request.method != "POST":
		return JsonResponse({"status": "ko"})
	people_counter += 1
	now = datetime.date.today()
	if last_person_when == None or last_person_when != now:
		people_counter = 1
		last_person_when = now
	return HttpResponse("ok", status=200)

@never_cache
def people_count(request):
	return JsonResponse({"status": "ok", "data": {"count": people_counter}})

