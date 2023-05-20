import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    const role = useSelector(state => state.role);

    const buttons = [
        {
            name: 'Crear Usuario',
            path: '/create-user'
        },
        {
            name: 'Añadir producto',
            path: '/add-product'
        },
        {
            name: 'Registrar cliente',
            path: '/add-client'
        },
        {
            name: 'Nueva orden',
            path: '/generate-order'
        },
        {
            name: 'Ver facturas',
            path: '/invoice'
        },
    ];

    const permissionConfig = {
        1: buttons.slice(0, 4), // Rol 1 tiene acceso a todos los botones, menos el de las facturas, es el administrador.
        2: buttons.slice(2, 4), // Rol 2 tiene acceso a los botones desde el índice 2 hasta el 3, es el vendedor.
        3: buttons.slice(1), // Rol 3 tiene acceso a los botones desde el índice 1 hasta el último, es el supervisor.
      };
      
      const permissionPerRole = () => {
        return permissionConfig[role.roleId] || [];
      };

    return (
        <ul className='content-buttons-role'>
            {
                permissionPerRole().map(button => (
                    <li key={button.path}>
                        <Link to={button.path}>
                            <button>
                                <h2>{button.name}</h2>
                            </button>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default Dashboard;