// UserList.jsx
import React from 'react';

const UserListItem = ({ nome, foto, deficiencia }) => (
    <div className="user-list-item  shadow-sm my-2 bg-eco py-1 rounded-pill justify-content-between gap-3 d-flex" style={{ width: '' }}>
        <div className="d-flex gap-3">
            <img style={{ height: '7em' }} src={foto} alt={`${nome}'s Photo`} className="user-photo  rounded-circle rounded-full" />
            <div className="user-info my-auto">
                <h4><b>{nome}</b></h4>
                <p>Disability: <b className='text-success'>{deficiencia}</b></p>
            </div>
        </div>
        <div className="btnn flex-end me-4 flex-1 text-end my-auto">
            <button className="btn rounded-pill my-auto btn-sm btn-success">Support <i className="bi bi-arrow-right-short"></i></button>

        </div>
    </div>
);

const UserList = ({ usuarios }) => (
    <div className="user-list  row  justify-content-start">
        {usuarios.map((usuario, index) => (
            <UserListItem
                key={index}
                nome={usuario.nome}
                foto={usuario.foto}
                deficiencia={usuario.disability}
            />
        ))}
    </div>
);

export default UserList;
