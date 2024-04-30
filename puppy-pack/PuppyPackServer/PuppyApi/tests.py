from django.test import TestCase, Client

# Create your tests here.
class LoginPageTest(TestCase):
  def setUp(self):
    self.client = Client()
    
  def test_login_page(self):
    response = self.client.get('/woof/login')
    self.assertEqual(response.status_code, 200)
    self.assertContains(response, 'Woof Login')