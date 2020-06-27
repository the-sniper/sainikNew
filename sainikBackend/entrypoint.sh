#!/bin/sh

python manage.py update_sd_list
gunicorn sainikBackend.wsgi:application --bind 0.0.0.0:8000