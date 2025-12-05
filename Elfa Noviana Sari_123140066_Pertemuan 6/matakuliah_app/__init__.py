from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
import zope.sqlalchemy


def main(global_config, **settings):
    """
    Fungsi utama untuk setup aplikasi Pyramid
    
    Args:
        global_config: Konfigurasi global dari file .ini
        settings: Dictionary berisi setting aplikasi
        
    Returns:
        WSGI application
    """
    # Setup database engine
    engine = engine_from_config(settings, 'sqlalchemy.')
    session_factory = sessionmaker()
    session_factory.configure(bind=engine)
    
    # Setup Pyramid configurator
    config = Configurator(settings=settings)
    
    # Tambahkan database session ke request dan ikat ke transaction manager
    def _dbsession(request):
        session = session_factory()
        zope.sqlalchemy.register(session, transaction_manager=request.tm)
        return session
    
    config.add_request_method(_dbsession, 'dbsession', reify=True)
    
    # Register zope transaction manager
    config.include('pyramid_tm')
    
    # Setup routes untuk API
    # GET all matakuliah
    config.add_route('get_all_matakuliah', '/api/matakuliah')
    
    # GET single matakuliah by ID
    config.add_route('get_matakuliah', '/api/matakuliah/{id}')
    
    # POST create new matakuliah
    config.add_route('create_matakuliah', '/api/matakuliah')
    
    # PUT update matakuliah
    config.add_route('update_matakuliah', '/api/matakuliah/{id}')
    
    # DELETE matakuliah
    config.add_route('delete_matakuliah', '/api/matakuliah/{id}')
    
    # Scan untuk mencari views
    config.scan('.views')
    
    return config.make_wsgi_app()
