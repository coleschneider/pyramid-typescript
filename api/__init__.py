from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.settings import asbool


def main(global_config, **settings):
    # Settings
    settings['webpack-dev-server'] = \
        asbool(settings.get('webpack-dev-server', 'f'))
        
    config = Configurator(settings=settings)
    config.include('.models')
    config.include('pyramid_jinja2')

    config.add_renderer('.html', "pyramid_jinja2.renderer_factory")
    # Routes
    config.include('.routes')
    # Models
    
    config.scan()
    return config.make_wsgi_app()