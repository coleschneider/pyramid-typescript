from setuptools import setup, find_packages

# List of dependencies installed via `pip install -e .`
# by virtue of the Setuptools `install_requires` value below.
requires = [
    'pyramid',
    'waitress',
    'pyramid_debugtoolbar',
    'pyramid_jinja2',
    'plaster_pastedeploy',
    'pyramid_retry',
    'pyramid_tm',
    'SQLAlchemy',
    'transaction',
    'psycopg2',
    'zope.sqlalchemy',
    'webob-graphql',
    'graphene-sqlalchemy'
]

dev_requires = [
    'pyramid_debugtoolbar',
    'pytest',
    'webtest',
]

setup(
    name='api',
    install_requires=requires,
    packages=find_packages(),
    extra_requires={
        'dev': dev_requires
    },
    entry_points={
        'paste.app_factory': [
            'main = api:main'
        ],
        'console_scripts': [
            'initialize_api_db=api.scripts.initialize_db:main',
        ],
    },
)