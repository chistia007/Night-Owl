# backend/tests/test_api.py

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

class APITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = '/api/token/'  # Replace with your endpoint

    def test_get_request(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('expected_field', response.data)

    def test_post_request(self):
        data = {'username': 'chistia234', 'password':'1234'}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
