# Generated by Django 5.0.4 on 2024-05-15 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PuppyApi', '0004_owner_password'),
    ]

    operations = [
        migrations.CreateModel(
            name='PupParent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(default='', max_length=100)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
