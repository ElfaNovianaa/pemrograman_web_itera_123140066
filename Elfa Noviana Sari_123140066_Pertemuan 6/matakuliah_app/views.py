from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import IntegrityError
import json
from .models import Matakuliah


def _parse_positive_int(value, field_name):
    """Helper untuk memastikan nilai int positif; menerima string angka."""
    try:
        int_value = int(value)
    except (TypeError, ValueError):
        raise ValueError(f'{field_name} must be a positive integer')
    if int_value <= 0:
        raise ValueError(f'{field_name} must be a positive integer')
    return int_value


@view_config(route_name='get_all_matakuliah', request_method='GET', renderer='json')
def get_all_matakuliah(request):
    """
    Endpoint untuk mendapatkan semua data matakuliah
    
    Method: GET
    URL: /api/matakuliah
    
    Returns:
        JSON dengan list semua matakuliah
    """
    try:
        # Query semua matakuliah dari database
        matakuliahs = request.dbsession.query(Matakuliah).all()
        
        # Konversi ke dictionary
        result = {
            'matakuliahs': [mk.to_dict() for mk in matakuliahs]
        }
        
        return result
    except Exception as e:
        request.response.status = 500
        return {'error': str(e)}


@view_config(route_name='get_matakuliah', request_method='GET', renderer='json')
def get_matakuliah(request):
    """
    Endpoint untuk mendapatkan satu matakuliah berdasarkan ID
    
    Method: GET
    URL: /api/matakuliah/{id}
    
    Returns:
        JSON dengan detail matakuliah atau error jika tidak ditemukan
    """
    try:
        # Ambil ID dari URL parameter
        matakuliah_id = request.matchdict['id']
        
        # Query matakuliah berdasarkan ID
        matakuliah = request.dbsession.query(Matakuliah).filter(
            Matakuliah.id == matakuliah_id
        ).first()
        
        # Cek apakah matakuliah ditemukan
        if not matakuliah:
            request.response.status = 404
            return {'error': 'Matakuliah not found'}
        
        return matakuliah.to_dict()
    except Exception as e:
        request.response.status = 500
        return {'error': str(e)}


@view_config(route_name='create_matakuliah', request_method='POST', renderer='json')
@view_config(route_name='get_all_matakuliah', request_method='POST', renderer='json')
def create_matakuliah(request):
    """
    Endpoint untuk menambahkan matakuliah baru
    
    Method: POST
    URL: /api/matakuliah
    Body: JSON dengan kode_mk, nama_mk, sks, semester
    
    Returns:
        JSON dengan matakuliah yang baru dibuat atau error
    """
    try:
        # Parse JSON dari request body
        data = request.json_body
        
        # Validasi field yang required
        required_fields = ['kode_mk', 'nama_mk', 'sks', 'semester']
        for field in required_fields:
            if field not in data:
                request.response.status = 400
                return {'error': f'Missing required field: {field}'}
        
        # Validasi tipe data
        try:
            sks_value = _parse_positive_int(data['sks'], 'SKS')
            semester_value = _parse_positive_int(data['semester'], 'Semester')
        except ValueError as e:
            request.response.status = 400
            return {'error': str(e)}
        
        # Buat object Matakuliah baru
        new_matakuliah = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=sks_value,
            semester=semester_value
        )
        
        # Tambahkan ke database
        request.dbsession.add(new_matakuliah)
        request.dbsession.flush()  # Untuk mendapatkan ID yang di-generate
        
        request.response.status = 201
        return {
            'message': 'Matakuliah created successfully',
            'matakuliah': new_matakuliah.to_dict()
        }
        
    except IntegrityError:
        # Error jika kode_mk sudah ada (karena unique constraint)
        request.dbsession.rollback()
        request.response.status = 400
        return {'error': 'Kode MK already exists'}
    except ValueError as e:
        request.response.status = 400
        return {'error': 'Invalid data format'}
    except Exception as e:
        request.response.status = 500
        return {'error': str(e)}


@view_config(route_name='update_matakuliah', request_method='PUT', renderer='json')
def update_matakuliah(request):
    """
    Endpoint untuk mengupdate matakuliah
    
    Method: PUT
    URL: /api/matakuliah/{id}
    Body: JSON dengan field yang ingin diupdate
    
    Returns:
        JSON dengan matakuliah yang sudah diupdate atau error
    """
    try:
        # Ambil ID dari URL parameter
        matakuliah_id = request.matchdict['id']
        
        # Parse JSON dari request body
        data = request.json_body
        
        # Cari matakuliah berdasarkan ID
        matakuliah = request.dbsession.query(Matakuliah).filter(
            Matakuliah.id == matakuliah_id
        ).first()
        
        if not matakuliah:
            request.response.status = 404
            return {'error': 'Matakuliah not found'}
        
        # Update field yang ada di request
        if 'kode_mk' in data:
            matakuliah.kode_mk = data['kode_mk']
        if 'nama_mk' in data:
            matakuliah.nama_mk = data['nama_mk']
        if 'sks' in data:
            try:
                matakuliah.sks = _parse_positive_int(data['sks'], 'SKS')
            except ValueError as e:
                request.response.status = 400
                return {'error': str(e)}
        if 'semester' in data:
            try:
                matakuliah.semester = _parse_positive_int(data['semester'], 'Semester')
            except ValueError as e:
                request.response.status = 400
                return {'error': str(e)}
        
        request.dbsession.flush()
        
        return {
            'message': 'Matakuliah updated successfully',
            'matakuliah': matakuliah.to_dict()
        }
        
    except IntegrityError:
        request.dbsession.rollback()
        request.response.status = 400
        return {'error': 'Kode MK already exists'}
    except Exception as e:
        request.response.status = 500
        return {'error': str(e)}


@view_config(route_name='delete_matakuliah', request_method='DELETE', renderer='json')
def delete_matakuliah(request):
    """
    Endpoint untuk menghapus matakuliah
    
    Method: DELETE
    URL: /api/matakuliah/{id}
    
    Returns:
        JSON dengan pesan sukses atau error
    """
    try:
        # Ambil ID dari URL parameter
        matakuliah_id = request.matchdict['id']
        
        # Cari matakuliah berdasarkan ID
        matakuliah = request.dbsession.query(Matakuliah).filter(
            Matakuliah.id == matakuliah_id
        ).first()
        
        if not matakuliah:
            request.response.status = 404
            return {'error': 'Matakuliah not found'}
        
        # Hapus dari database
        request.dbsession.delete(matakuliah)
        
        return {'message': 'Matakuliah deleted successfully'}
        
    except Exception as e:
        request.response.status = 500
        return {'error': str(e)}
