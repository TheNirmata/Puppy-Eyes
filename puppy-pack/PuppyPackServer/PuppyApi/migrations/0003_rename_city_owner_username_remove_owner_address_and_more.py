# Generated by Django 5.0.4 on 2024-05-15 02:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PuppyApi', '0002_alter_owner_lastname_alter_pup_lastname'),
    ]

    operations = [
        migrations.RenameField(
            model_name='owner',
            old_name='city',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='owner',
            name='address',
        ),
        migrations.RemoveField(
            model_name='owner',
            name='state',
        ),
        migrations.RemoveField(
            model_name='owner',
            name='zip',
        ),
    ]
