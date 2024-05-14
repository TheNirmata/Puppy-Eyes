from django.test import TestCase, Client

# Create your tests here.
class LoginPageTest(TestCase):
  def setUp(self):
    self.client = Client()
    
  def test_login_page(self):
    response = self.client.get('/woof/login')
    self.assertEqual(response.status_code, 200)
    self.assertContains(response, 'Woof Login')
    

class OwnerModelTest(TestCase):
  def setUp(self):
    Owner.objects.create(
      firstname = 'aimee',
      lastname = 'nguyen',
      email = 'aimee@aimee.com',
      phone = '1234567890',
      address = '1234 aimee lane',
      city = 'Orange County',
      state = 'CA',
      zip = '12345'
      )
  
  def test_owner_model(self):
    owner = Owner.objects.get(firstname='aimee')
    self.assertEqual(owner.firstname, 'aimee')
    self.assertEqual(owner.lastname, 'nguyen')
    self.assertEqual(owner.email, 'aimee@aimee.com')
    self.assertEqual(owner.phone, '1234567890')
    self.assertEqual(owner.address, '1234 aimee lane')
    self.assertEqual(owner.city, 'Orange County')
    self.assertEqual(owner.state, 'CA')