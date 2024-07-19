# Tasks Maestro

Tasks Maestro is a full-stack web application for managing tasks, built with React, Bootstrap, Django Rest Framework, and Supabase PostgreSQL. It allows user to list, add, edit, mark complete and delete tasks seamlessly.

## Features

### Task Management:
  - List tasks with details
  - Add new tasks
  - Edit existing tasks
  - Mark tasks complete
  - Delete tasks
### Technology Stack:
#### Frontend:
  - React
  - Bootstrap
  - Hosted on AWS S3 and distributed via AWS CloudFront
#### Backend:
  - Django Rest Framework
  - Supabase PostgreSQL
  - Deployed on AWS EC2 within a private VPC

## Deployment

### Frontend Deployment

1. Build Setup:

```bash
# Install dependencies
npm install

# Compiles and hot-reloads for development
npm start

# Compiles and minifies for production
npm run build
```

2. Deployment to AWS:

- Upload the build artifacts (`build` folder) to AWS S3 bucket.
- Configure AWS CloudFront to serve the static content from the S3 bucket.

### Backend Deployment

1. Setup Environment:
- Set up a virtual environment and activate it.
```bash
python -m venv myenv
source myenv/bin/activate
```
- Install dependencies:
```bash
pip install -r requirements.txt
```

2. Database Configuration:
- Set up a Supabase PostgreSQL database instance.
- Configure database settings in `settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_database_name',
        'USER': 'your_database_user',
        'PASSWORD': 'your_database_password',
        'HOST': 'database_host_url',
        'PORT': 'database_port',
    }
}
```

3. Make and apply migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

4. Run Django Server:
- Start the Django server:
```bash
python manage.py runserver
```

5. Deployment to AWS EC2:
- Provision an EC2 instance within a private VPC.
- Deploy the Django application using a Git clone on the EC2 instance.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screenshots
### Click on image to open full-size version

- Dashboard showing task list

[![Dashboard showing task list](https://i.ibb.co/tqBnPK6/2024-07-18-18-42-03.png)](https://ibb.co/tqBnPK6)
- Adding a new task interface

[![Adding a new task interface](https://i.ibb.co/Zc2M1Fh/2024-07-18-18-42-32.png)](https://ibb.co/Zc2M1Fh)
- Task edit page

[![Task edit page](https://i.ibb.co/m5SKTGB/2024-07-18-18-42-20.png)](https://ibb.co/m5SKTGB)
- Deleting task confirm window

[![Deleting task confirm window](https://i.ibb.co/pJPDdyQ/2024-07-18-18-43-51.png)](https://ibb.co/pJPDdyQ)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built using React, Django, and Supabase PostgreSQL.
- Deployed on AWS for scalability and reliability.
