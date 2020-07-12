#!/bin/sh

python manage.py create_sd_list --no_update
python manage.py create_ranks_list --no_update 
gunicorn sainikBackend.wsgi:application --bind 0.0.0.0:8000