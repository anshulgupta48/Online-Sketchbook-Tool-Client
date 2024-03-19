import { useDispatch, useSelector } from 'react-redux';
import { actionItemClick, menuItemClick } from '@/redux/menuSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { MENU_ITEMS } from '@/constants';
import styles from './index.module.css';

const Menu = () => {
    const { activeMenuItem } = useSelector((state) => state.menu);
    const dispatch = useDispatch();

    return (
        <div className={styles["menu_container"]}>
            <div className={activeMenuItem === MENU_ITEMS.PENCIL ? `${styles.menu_container_item} ${styles.active}` : `${styles.menu_container_item}`} onClick={() => dispatch(menuItemClick(MENU_ITEMS.PENCIL))}>
                <FontAwesomeIcon icon={faPencil} className={styles["menu_container_item_box"]} />
            </div>

            <div className={activeMenuItem === MENU_ITEMS.ERASER ? `${styles.menu_container_item} ${styles.active}` : `${styles.menu_container_item}`} onClick={() => dispatch(menuItemClick(MENU_ITEMS.ERASER))}>
                <FontAwesomeIcon icon={faEraser} className={styles["menu_container_item_box"]} />
            </div>

            <div className={styles["menu_container_item"]} onClick={() => dispatch(actionItemClick(MENU_ITEMS.UNDO))}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles["menu_container_item_box"]} />
            </div>

            <div className={styles["menu_container_item"]} onClick={() => dispatch(actionItemClick(MENU_ITEMS.REDO))}>
                <FontAwesomeIcon icon={faRotateRight} className={styles["menu_container_item_box"]} />
            </div>

            <div className={styles["menu_container_item"]} onClick={() => dispatch(actionItemClick(MENU_ITEMS.DOWNLOAD))}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles["menu_container_item_box"]} />
            </div>
        </div>
    )
}

export default Menu;