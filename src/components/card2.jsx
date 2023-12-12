// UserList.jsx
import React from 'react';

const UserListItemm = ({ nome, foto, deficiencia }) => (
    <div className="user-list-item text-center" style={{width:'15rem'}}>
      <img style={{height:'7em'}} src={foto} alt={`${nome}'s Photo`} className="user-photo  rounded-circle rounded-full" />
      <div className="user-info f-12">
        <h4><b>{nome}</b></h4>
        <p>Disability: <b className='text-success'>{deficiencia}</b><br /><button className="btn btn-sm btn-outline-success">Suport</button>
    </p>
      </div>
       </div>
  );

const UserListm = ({ usuarios }) => (
    <div className="user-list  row  justify-content-center">
        {usuarios.map((usuario, index) => (
            <UserListItemm
                key={index}
                nome={usuario.nome}
                foto={usuario.foto}
                deficiencia={usuario.disability}
            />
        ))}
    </div>
);

export default UserListm;
