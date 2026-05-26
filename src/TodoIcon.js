import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
    check: CheckSVG,
    delete: DeleteSVG,
};

function TodoIcon ({ type, color, onClick }) {
    const IconComponent = iconTypes[type];

    return (
        <span 
            className={`Icon Icon-${type}`} 
            style={{ color }}
            onClick={onClick}
        >
            <IconComponent />
        </span>
    );
}

export { TodoIcon };