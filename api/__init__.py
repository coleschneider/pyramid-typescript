from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.settings import asbool


def main(global_config, **settings):
    
    settings['webpack-dev-server'] = \
        asbool(settings.get('webpack-dev-server', 'f'))
    config = Configurator(settings=settings)
    config.include('pyramid_jinja2')
    # Relative to this directory. Do the same path for the template
    config.add_static_view('static', '../dist')
    config.add_route('home', '/*subpath')
    config.add_renderer('.html', "pyramid_jinja2.renderer_factory")
    config.scan()
    return config.make_wsgi_app()