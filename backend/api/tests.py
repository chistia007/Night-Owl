# backend/tests/test_api.py

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

class APITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = '/api/token/'  # Replace with your endpoint

   # Change test_get_request to use POST method
def test_get_request(self):
    data = {'username': 'chistia234', 'password': '1234'}  # Add credentials here
    response = self.client.post(self.url, data, format='json')  # Using POST method
    self.assertEqual(response.status_code, status.HTTP_200_OK)  # You might expect HTTP 200 OK for successful login
    self.assertIn('access', response.data)  # Check if the 'access' token is in the response data

