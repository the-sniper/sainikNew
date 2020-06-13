from django.conf import settings
from django.core import serializers


def validate_indian_states(state):

    if state:
        state = str(state).lower()
        for x in settings.INDIAN_STATES:
            if state == x["name"].lower():
                return state

    return False


def return_states_tuple_list():
    indian_states = []
    for state in settings.INDIAN_STATES:
        indian_states.append((state['name'], state['name']))

    return indian_states