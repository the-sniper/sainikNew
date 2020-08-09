"""
Django settings for sainikBackend project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
from .states import states as INDIAN_STATES
from rest_framework.settings import api_settings
from datetime import timedelta

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'evpsu4n#m3le11(2)-hf_(tb+u(l8(e4@5r5o2r3)a38z&#w(u'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

MIN_PASSWORD_LENGTH = 5

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'StateDistrictList.apps.StatedistrictlistConfig',
    'UserAuth.apps.UserauthConfig',
    'RanksAndServices.apps.RanksandservicesConfig',
    'ServiceDetails.apps.ServicedetailsConfig',
    'FamilyDetails.apps.FamilydetailsConfig',
    'userDetails.apps.UserdetailsConfig',
    'api.apps.ApiConfig',
    'custom_tasks.apps.CustomTasksConfig',
    'Trades.apps.TradesConfig',
    'rest_framework',
    'knox'

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'sainikBackend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'sainikBackend.wsgi.application'
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'knox.auth.TokenAuthentication',
    ],
}

REST_KNOX = {
    'SECURE_HASH_ALGORITHM': 'cryptography.hazmat.primitives.hashes.SHA512',
    'AUTH_TOKEN_CHARACTER_LENGTH': 128,
    'TOKEN_TTL': timedelta(days=41, hours=10),
    # 'USER_SERIALIZER': 'knox.serializers.UserSerializer',
    'USER_SERIALIZER': 'UserAuth.serializers.UserSerializer',
    'TOKEN_LIMIT_PER_USER': None,
    'AUTO_REFRESH': False,
    # 'EXPIRY_DATETIME_FORMAT': api_settings.DATETME_FORMAT,
}

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'sainikApp',
#         'USER': 'admin',
#         'PASSWORD': 'admin',
#         'HOST': 'localhost',
#         'PORT': '3306',
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")
AUTH_USER_MODEL = 'UserAuth.UserAuthDetails'


logName = "server_logs.log"
logDir = os.path.join(BASE_DIR, "ServerLogs")

apps_logging_path = os.path.join(logDir, f"AppLogs/{logName}")
middleware_logging_path = os.path.join(logDir, f"MiddlewareLogs/{logName}")
background_task_logging_path = os.path.join(
    logDir, f"BackgroundTaskLogs/{logName}")

os.makedirs(os.path.dirname(apps_logging_path), exist_ok=True)
os.makedirs(os.path.dirname(middleware_logging_path), exist_ok=True)
os.makedirs(os.path.dirname(background_task_logging_path), exist_ok=True)

apps_logger_level = "DEBUG"
middleware_logger_level = "DEBUG"
test_logger_level = "DEBUG"
console_logger_level = "DEBUG"
background_task_logger_level = "DEBUG"

max_log_filesize = 1024 * 1024 * 5
app_logger_backup_count = 45  # keep logs for max 45 days
middleware_logger_backup_count = 45
background_task_logger_backup_count = 45

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'large': {
            'format': '%(asctime)s, %(levelname)s, %(filename)s, %(funcName)s, %(lineno)d : %(message)s'
        },
        'tiny': {
            'format': '%(asctime)s %(message)s '
        }
    },
    'handlers': {
        'app_logger': {
            'level': apps_logger_level,
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'when': 'midnight',
            'interval': 1,
            'filename': apps_logging_path,
            'formatter': 'large',
            'backupCount': app_logger_backup_count
        },
        'console': {
            'level': console_logger_level,
            'class': 'logging.StreamHandler',
            'formatter': 'large',
        },
        'middleware_logger': {
            'level': middleware_logger_level,
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'when': 'midnight',
            'interval': 1,
            'filename': middleware_logging_path,
            'formatter': 'large',
            'backupCount': middleware_logger_backup_count
        },
        'background_task_logger': {
            'level': background_task_logger_level,
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'when': 'midnight',
            'interval': 1,
            'filename': background_task_logging_path,
            'formatter': 'large',
            'backupCount': background_task_logger_backup_count
        },
    },
    'loggers': {
        'apps_logger': {
            'handlers': ["app_logger", "console"],
            'level': apps_logger_level,
            'propagate': False,
        },
        'middleware_logger': {
            'handlers': ['console', 'middleware_logger'],
            'level': middleware_logger_level,
            'propagate': False,
        },
        'test_logger': {
            'handlers': ['console'],
            'level': test_logger_level,
            'propagate': False,
        },
        'background_task_logger': {
            'handlers': ['console', 'background_task_logger'],
            'level': background_task_logger_level,
            'propagate': False,
        },
    },
}
